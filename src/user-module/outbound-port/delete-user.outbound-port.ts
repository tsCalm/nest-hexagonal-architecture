export type DeleteUserOutboundPortInputDto = number;

export type DeleteUserOutboundPortOutputDto = boolean;

export const DELETE_USER_OUTBOUND_PORT = 'DELETE_USER_OUTBOUND_PORT' as const;

export interface DeleteUserOutboundPort {
  execute(
    params: DeleteUserOutboundPortInputDto,
  ): Promise<DeleteUserOutboundPortOutputDto>;
}
