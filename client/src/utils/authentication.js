import axios from "axios";
import { z } from "zod";
export const registerSchema = z.object({
  username: z.string().max(12),
  email: z.string().email(),
  password: z.string(),
  role: z.string(),
});

export const registerHandler = async (formData) => {
  // send this to rest API
  await axios
    .post("http://localhost:3000/api/auth/register", formData)
    .catch((err) => console.log(err))
    .then((e) => console.log(e));
};

export const loginSchema = z.object({
  username: z.string(),
  password: z.string(),
});

export const loginHandler = async (formData) => {
  // await axios.post("http://localhost:3000/api/auth/login", formData, {
  //   withCredentials: true,
  // });

  await fetch("http://localhost:3000/api/auth/login", {
    mode: "cors",
    method: "POST",
    body: JSON.stringify(formData),
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  });
};
