export type CreateUserOutboundPortInputDto = {
  name: string;
  email: string;
  phone: string;
};

export type CreateUserOutboundPortOutputDto = {
  name: string;
  email: string;
  phone: string;
};

export const CREATE_USER_OUTBOUND_PORT = 'CREATE_USER_OUTBOUND_PORT' as const;

export interface CreateUserOutboundPort {
  execute(
    params: CreateUserOutboundPortInputDto,
  ): Promise<CreateUserOutboundPortOutputDto>;
}
