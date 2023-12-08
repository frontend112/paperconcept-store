import { getCsrfToken } from "next-auth/react";
export const route = async () => {
  const token = await getCsrfToken();
  console.log(token);
};
