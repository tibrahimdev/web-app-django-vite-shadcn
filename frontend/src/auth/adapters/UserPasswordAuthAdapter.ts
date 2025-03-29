import { AuthAdapter, LoginCredentials, LoginResponse } from "./AuthAdapter";

export class UserPasswordAuthAdapter implements AuthAdapter {
  async login(credentials: LoginCredentials): Promise<LoginResponse> {
    return { token: "dummytoken" };
  };

  logout() { };

  async getUser(): Promise<any> { };

  async refreshToken(): Promise<any> { };
}
