export type DeleteUserInboundPortInputDto = number;

export type DeleteUserInboundPortOutputDto = boolean;

export const DELETE_USER_INBOUND_PORT = 'DELETE_USER_INBOUND_PORT' as const;

export interface DeleteUserInboundPort {
  execute(
    params: DeleteUserInboundPortInputDto,
  ): Promise<DeleteUserInboundPortOutputDto>;
}
