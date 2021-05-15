export interface AuthInfo {
    userId: string;
    authToken: string;
    userType: number;
}


export interface GoogleAuthInfo{
    name?: string;
    email?: string;
    profileImage?: string;
}
