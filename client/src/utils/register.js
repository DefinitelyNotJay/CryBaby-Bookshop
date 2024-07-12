import axios from "axios";
import { z } from "zod";

export const registerSchema = z.object({
  username: z.string().max(1),
  email: z.string().email(),
  password: z.string(),
  role: z.string(),
});

export const registerHandler = async (formData) => {
  // send this to rest API
  await axios
    .post("http://localhost:3000/api/auth/register", formData)
    .catch(err=>console.log(err))
    .then(e=>console.log(e))
};
