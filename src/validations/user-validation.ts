import {z, ZodType} from 'zod';

export class UserValidation {

  static readonly REGISTER: ZodType = z.object({
    name: z.string().min(1).max(100),
    email: z.string().email(),
    phone: z.string().min(10).max(15),
    password: z.string().min(8),
  });

}