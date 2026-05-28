export interface User {
  id: number;
  full_name: string;
  email: string;
  avatar_url: string | null;
  password_hash?: string | null;
  language: string;
  created_at: number | string;
  updated_at: number | string;
}

export interface UserInfo {
  id: number;
  full_name: string;
  email: string;
  avatar_url: string | null;
  language: string;
  created_at: number;
  updated_at: number;
}
