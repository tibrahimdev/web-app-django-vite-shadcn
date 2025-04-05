export type UserPasswordLoginCredentials = {email: string, password: string};
export type LoginCredentials = UserPasswordLoginCredentials;

export type ErrorLoginResponse = {message: string};
export type SimpleLoginResponse = {token: string}
export type LoginResponse = SimpleLoginResponse | ErrorLoginResponse;

export interface AuthAdapter {
    login: (credentials: LoginCredentials) => Promise<LoginResponse>
    logout: () => void;
    getUser: () => Promise<any>;
    refreshToken?: () => Promise<string>;
}
