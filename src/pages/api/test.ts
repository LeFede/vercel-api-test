import { PrismaClient } from "@prisma/client";
import type { APIRoute } from "astro";

const prisma = new PrismaClient();

export const GET: APIRoute = async () => {
  const tal = await prisma.day.findMany({});
  return new Response(JSON.stringify(tal), {
    status: 200,
  });
};
