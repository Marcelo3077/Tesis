'use server'

import { db } from '@/lib/db'
import { experimentSubmissions } from '@/lib/db/schema'
import { eq } from 'drizzle-orm'
import { Resend } from 'resend'
import { z } from 'zod'

const clientSchema = z.object({
  name: z.string().trim().min(2).max(120),
  email: z.string().trim().email().max(160),
  phone: z.string().trim().min(7).max(30),
  district: z.string().trim().min(2).max(80),
  storageType: z.string().trim().min(2).max(80),
  duration: z.string().trim().min(2).max(80),
  notes: z.string().trim().max(1000).optional().default(''),
})

const ownerSchema = z.object({
  name: z.string().trim().min(2).max(120),
  email: z.string().trim().email().max(160),
  phone: z.string().trim().min(7).max(30),
  district: z.string().trim().min(2).max(80),
  spaceType: z.string().trim().min(2).max(80),
  area: z.string().trim().min(1).max(30),
  availability: z.string().trim().min(2).max(80),
  notes: z.string().trim().max(1000).optional().default(''),
})

async function persistSubmission(experiment: string, payload: Record<string, unknown>) {
  const [submission] = await db.insert(experimentSubmissions).values({ experiment, payload }).returning({ id: experimentSubmissions.id })
  let notificationSent = false
  const recipient = process.env.RESEND_TO_EMAIL || process.env.RESEND_FROM_EMAIL
  if (process.env.RESEND_API_KEY && process.env.RESEND_FROM_EMAIL && recipient) {
    const resend = new Resend(process.env.RESEND_API_KEY)
    const { error } = await resend.emails.send(
      {
        from: process.env.RESEND_FROM_EMAIL,
        to: [recipient],
        subject: `Nueva solicitud FlexiLogs: ${experiment}`,
        html: `<h2>Nueva solicitud</h2><p><strong>Experimento:</strong> ${experiment}</p><pre>${JSON.stringify(payload, null, 2)}</pre>`,
      },
      { idempotencyKey: `experiment-submission/${submission.id}` },
    )
    notificationSent = !error
    if (error) console.error('[v0] Resend notification failed:', error.message)
  }
  if (notificationSent) {
    await db.update(experimentSubmissions).set({ notificationSent: true }).where(eq(experimentSubmissions.id, submission.id))
  }
  return { id: submission.id, notificationSent }
}

export async function submitClientExperiment(input: unknown) {
  const payload = clientSchema.parse(input)
  return persistSubmission('cliente', payload)
}

export async function submitOwnerExperiment(input: unknown) {
  const payload = ownerSchema.parse(input)
  return persistSubmission('anfitrion', payload)
}
