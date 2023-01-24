export type FindOneUserOutboundPortInputDto = number;

export type FindOneUserOutboundPortOutputDto = {
  name: string;
  email: string;
  phone: string;
};

export const FINDONE_USER_OUTBOUND_PORT = 'FINDONE_USER_OUTBOUND_PORT' as const;

export interface FindOneUserOutboundPort {
  execute(
    params: FindOneUserOutboundPortInputDto,
  ): Promise<FindOneUserOutboundPortOutputDto>;
}
