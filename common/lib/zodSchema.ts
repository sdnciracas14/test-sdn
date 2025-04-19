import { z } from "zod";

export const uploadSchema = z.object({
  judul: z.string().min(8),
  image: z
    .instanceof(File)
    .refine((file) => file.size > 0, { message: "Image is required" })
    .refine((file) => file.size === 0 || file.type.startsWith("image/"), {
      message: "Only images are allowed",
    })
    .refine((file) => file.size < 4000000, {
      message: "Image must less than 4mb",
    }),
  author: z.string().min(4),
  content: z.string().min(20),
});

export const editSchema = z.object({
  judul: z.string().min(8),
  image: z
    .instanceof(File)
    .refine((file) => file.size === 0 || file.type.startsWith("image/"), {
      message: "Only images are allowed",
    })
    .refine((file) => file.size < 4000000, {
      message: "Image must less than 4mb",
    })
    .optional(),
  author: z.string().min(4),
  content: z.string().min(20),
});

export const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
});

export type LoginInput = z.infer<typeof loginSchema>;
