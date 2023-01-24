export type FindOneUserInboundPortInputDto = number;

export type FindOneUserInboundPortOutputDto = {
  name: string;
  email: string;
  phone: string;
};

export const FINDONE_USER_INBOUND_PORT = 'FINDONE_USER_INBOUND_PORT' as const;

export interface FindOneUserInboundPort {
  execute(
    params: FindOneUserInboundPortInputDto,
  ): Promise<FindOneUserInboundPortOutputDto>;
}
