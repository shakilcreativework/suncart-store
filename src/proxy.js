import dns from "node:dns";
dns.setServers(['8.8.8.8', '8.8.4.4']);

import { NextResponse } from "next/server";
import { auth } from "./lib/auth";
import { headers } from "next/headers";

// This function can be marked `async` if using `await` inside.
export async function proxy(request) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  // If no session → redirect to login
  if (!session) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // Allow access
  return NextResponse.next();
}

export const config = {
  matcher: ["/products/:path", "/profile", "/update-profile"],
};
