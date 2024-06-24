export interface User {
  id: string;
  name: string;
  email: string;
  lastActivity: string;
  isPaying: boolean;
  isActive: boolean;
}

export interface ApiResponse {
  id: string;
  name: string;
  email: string;
  last_activity: number;
  role: string;
  status: string;
}
