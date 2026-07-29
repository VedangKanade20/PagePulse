import { z } from "zod";

export const auditSchema = z.object({
  url: z.string().trim().url("https://google.com"),
});

export type AuditRequest = z.infer<typeof auditSchema>;
