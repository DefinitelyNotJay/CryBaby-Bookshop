import axios from "axios";
import { z } from "zod";

export const registerSchema = z.object({
  username: z.string().max(12),
  email: z.string().email(),
  password: z.string(),
  role: z.string(),
});

export const registerHandler = async (formData) => {
  const validatedData = registerSchema.safeParse(formData);
  if (!validatedData.success) {
    return;
  }
  
  // send this to rest API
  await axios
    .post("http://localhost:3000/api/auth/register", validatedData.data)
    .then((qualifyData) => {
      return qualifyData;
    })
    .catch((err) => {
      return err;
    });
};
