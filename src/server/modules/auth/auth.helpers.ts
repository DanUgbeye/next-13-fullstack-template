import { ServerException } from "@/server/exceptions";
import { NextRequest } from "next/server";

export default class AuthHelpers {
  /**
   * checks if auth token and user are present in request
   * @param {NextRequest} req Next Request Object
   */
  static isAuthenticated(req: NextRequest) {
    const token = AuthHelpers.extractAuthToken(req);
    const user = AuthHelpers.extractUser(req);
    if (!token || !user) {
      return false;
    }
    return true;
  }

  /**
   * checks if user has a specific role for the request
   * @param {NextRequest} req Next Request Object
   * @param {string} role required role
   */
  static hasRole(req: NextRequest, role: string) {
    throw new ServerException("not implemented");
    return true;
  }

  /**
   * checks if user has specifieds permission to be present for the request
   * @param {NextRequest} req Next Request Object
   * @param {any[]} permissions required permissions
   */
  static async hasPermission(req: NextRequest, permissions: any[]) {
    throw new ServerException("not implemented");
    return true;
  }

  /**
   * sets user cookie in a request
   * @param {NextRequest} req Next Request Object
   * @param {TUser} userData the user data to set
   */
  static setUser<TUser>(req: NextRequest, userData: TUser) {
    req.cookies.set("user", JSON.stringify(userData));
  }

  /**
   * extracts user from request
   * @param {NextRequest} req Next Request Object
   */
  static extractUser<TUser>(req: NextRequest) {
    let userCookie = req.cookies.get("user");
    const user = userCookie ? (JSON.parse(userCookie.value) as TUser) : null;
    return user;
  }

  /**
   * extracts auth token from request
   * @param {NextRequest} req Next Request Object
   */
  static extractAuthToken(req: NextRequest) {
    let authHeader = req.headers.get("Authorization");
    if (!authHeader) {
      return null;
    }

    let token = authHeader.split(" ")[1];
    return token || null;
  }
}
