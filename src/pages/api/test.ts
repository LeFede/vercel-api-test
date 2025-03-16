import type { APIRoute } from "astro";

export const GET: APIRoute = () => {
  return new Response("Dale pa", {
    status: 200,
  });
};
