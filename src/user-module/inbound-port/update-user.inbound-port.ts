export interface UpdateUserInboundPortInputDto {
  name?: string;
  email?: string;
  phone?: string;
}

export type UpdateUserInboundPortOutputDto = {
  name: string;
  email: string;
  phone: string;
};

export const UPDATE_USER_INBOUND_PORT = 'UPDATE_USER_INBOUND_PORT' as const;

export interface UpdateUserInboundPort {
  execute(
    id: number,
    params: UpdateUserInboundPortInputDto,
  ): Promise<UpdateUserInboundPortOutputDto>;
}
