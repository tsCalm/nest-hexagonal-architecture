export interface CreateUserInboundPortInputDto {
  name: string;
  email: string;
  phone: string;
}

export type CreateUserInboundPortOutputDto = {
  name: string;
  email: string;
  phone: string;
};

export const CREATE_USER_INBOUND_PORT = 'CREATE_USER_INBOUND_PORT' as const;

export interface CreateUserInboundPort {
  execute(
    params: CreateUserInboundPortInputDto,
  ): Promise<CreateUserInboundPortOutputDto>;
}
