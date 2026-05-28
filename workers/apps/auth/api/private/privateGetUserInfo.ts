import { OpenAPIRoute } from 'chanfana';
import type { IRequest } from 'itty-router';
import { z } from 'zod';

import type { AuthenticatedRequest } from '@/shared/types/auth';
import type { UserInfo } from '@/shared/types/user';
import { getUserById } from '@/workers/apps/auth/services/user';
import { handleError } from '@/workers/apps/common/handleError';

import { UserNotFoundException } from '../../exceptions/user';

const RESPONSE_SCHEMA = z.object({
  id: z.number(),
  full_name: z.string(),
  email: z.string(),
  avatar_url: z.string().nullable(),
  language: z.string(),
  created_at: z.number(),
  updated_at: z.number(),
}) satisfies z.ZodType<UserInfo>;

export class PrivateGetUserInfoAPI extends OpenAPIRoute {
  override schema = {
    security: [{ BearerAuth: [] }],
    response: {
      content: {
        'application/json': { schema: RESPONSE_SCHEMA },
      },
    },
  };

  override async handle(request: IRequest, env: Env, _ctx: ExecutionContext) {
    try {
      const sessionUser = (request as unknown as AuthenticatedRequest).user;
      const userId = sessionUser?.user_id;

      if (userId === undefined || userId === null) {
        return new Response('User not authenticated', { status: 401 });
      }

      const foundUser = await getUserById(env, userId);

      if (!foundUser) {
        throw new UserNotFoundException();
      }

      const userInfo: UserInfo = {
        id: foundUser.id,
        full_name: foundUser.full_name,
        email: foundUser.email,
        avatar_url: foundUser.avatar_url,
        language: foundUser.language,
        created_at:
          typeof foundUser.created_at === 'number'
            ? foundUser.created_at
            : new Date(foundUser.created_at).getTime(),
        updated_at:
          typeof foundUser.updated_at === 'number'
            ? foundUser.updated_at
            : new Date(foundUser.updated_at).getTime(),
      };

      return Response.json(userInfo);
    } catch (error) {
      return handleError(error);
    }
  }
}
