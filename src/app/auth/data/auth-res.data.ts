export interface AuthResponse {
    kind: string;
    idToken: string;
    email: string;
    refreshToken: string;
    localId: string;
}