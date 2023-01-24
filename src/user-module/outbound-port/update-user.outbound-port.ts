export type UpdateUserOutboundPortInputDto = {
  name?: string;
  email?: string;
  phone?: string;
};

export type UpdateUserOutboundPortOutputDto = {
  name: string;
  email: string;
  phone: string;
};

export const UPDATE_USER_OUTBOUND_PORT = 'UPDATE_USER_OUTBOUND_PORT' as const;

export interface UpdateUserOutboundPort {
  execute(
    id: number,
    params: UpdateUserOutboundPortInputDto,
  ): Promise<UpdateUserOutboundPortOutputDto>;
}
