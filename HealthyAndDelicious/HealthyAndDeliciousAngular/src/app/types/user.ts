export interface IUser {
  id: number;
  accessToken: string,
  username: string;
  email: string;
  first_name: string;
  last_name: string;
  description: string;
  profile_picture: string;
  is_active: boolean;
  is_staff: boolean;
}