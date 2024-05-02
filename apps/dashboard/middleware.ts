// import type { NextRequest } from "next/server";
// import { NextResponse } from "next/server";
//
// export async function middleware(request: NextRequest) {
//   const session = request.cookies.get("session")?.value;
//   if (!session) {
//     return NextResponse.redirect(new URL("/login", request.url));
//   }
//   return NextResponse.next();
// }
//

export { auth as middleware } from "./auth";

// export const config = {
//   matcher: ["/admin/:path*", "/api/:path*"],
// };
