export interface LoginResponse {
  user: {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
  };
  accessToken: string;
  refreshToken: string;
}
