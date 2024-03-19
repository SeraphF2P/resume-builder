import ZOD from './../lib/ZOD'
import { z } from 'zod'
export declare global {
  type ResumeFormType = z.infer<typeof ZOD.resume>;
}