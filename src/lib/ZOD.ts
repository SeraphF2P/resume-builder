import { z } from 'zod'
export default {
  resume: z.object({
    templateId: z.number().int().optional().default(1),
    fullName: z.string().min(3, "name must be between 3 and 30 characters").max(30, "name must be between 3 and 30 characters"),
    email: z.string().email("wrong email format"),
    phone: z.string().min(3, "phone must be between 3 and 30 characters").max(30, "phone must be between 3 and 30 characters").optional(),
    jobTitle: z.string().min(3, "job title must be between 3 and 30 characters").max(30, "job title must be between 3 and 30 characters"),
    home: z.string().min(3, "home must be between 3 and 30 characters").max(30, "home must be between 3 and 30 characters"),
    profile: z.string().min(8, "profile must be between 8 and 256 characters").max(256, "profile must be between 8 and 256 characters"),
    skills: z.array(z.object({
      name: z.string().min(3, "skill must be between 3 and 30 characters").max(30, "skill must be between 3 and 30 characters"),
      level: z.enum(["biggener", "intermediate", "advanced", "expert"])
    })).optional().default([]),
    experiences: z.array(z.object({
      description: z.string().min(8, "description must be between 8 and 256 characters").max(256, "description must be between 8 and 256 characters"),
      jobTitle: z.string().min(3, "job title must be between 3 and 30 characters").max(30, "job title must be between 3 and 30 characters"),
      timePeriod: z.object({
        from: z.date(),
        to: z.date()
      }),
      location: z.string().min(3, "location must be between 3 and 30 characters").max(30, "location must be between 3 and 30 characters"),
    })).optional().default([]),
    languages: z.array(z.object({
      name: z.string().min(3, "language must be between 3 and 30 characters").max(30, "language must be between 3 and 30 characters"),
      level: z.enum(["native", "intermediate", "advanced", "fluent"])
    })).min(1, "must at least have one language"),
    links: z.array(z.object({
      name: z.string().min(3, "link name must be between 3 and 30 characters").max(30, "link name must be between 3 and 30 characters"),
      link: z.string().url("link must be an actual URL")
    })).optional().default([]),
    certifications: z.array(z.object({
      name: z.string().min(3, "certifactaion name must be between 3 and 30 characters").max(30, "certifactaion name must be between 3 and 30 characters"),
      link: z.string().url("certifactaion link must be an actual URL").optional()
    })).optional().default([])
  })
}