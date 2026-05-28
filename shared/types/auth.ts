export interface AuthenticatedPayload {
  user_id: number;
}

export interface AuthenticatedRequest {
  user?: AuthenticatedPayload;
}
