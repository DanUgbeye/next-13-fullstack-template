import { NextRequest, NextResponse } from "next/server";
import AuthMiddleware from "@/server/modules/auth/auth.middleware";
import AuthHelpers from "./server/modules/auth/auth.helpers";
import ServerResponse from "./server/utils/response";
import { AuthenticationException, BaseException } from "./server/exceptions";

export default async function middleware(req: NextRequest) {
  // API routes middleware
  if (req.nextUrl.pathname.startsWith("/api")) {
    await AuthMiddleware.authenticateUser(req);
    const response = NextResponse.next();
    return response;
  }
}
