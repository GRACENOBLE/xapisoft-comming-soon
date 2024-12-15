import { z } from "zod";

export const FormSchema = z.object({
  username: z.string().min(2).max(50),
  email: z.string().min(2).max(50),
  message: z.string().min(2).max(50),
});