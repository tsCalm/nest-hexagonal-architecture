export type FindUserInboundPortInputDto = void;

export type FindUserInboundPortOutputDto = Array<{
  name: string;
  email: string;
  phone: string;
}>;

export const FINDALL_USER_INBOUND_PORT = 'FINDALL_USER_INBOUND_PORT' as const;

export interface FindALLUserInboundPort {
  execute(
    params: FindUserInboundPortInputDto,
  ): Promise<FindUserInboundPortOutputDto>;
}
