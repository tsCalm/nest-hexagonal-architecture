export type FindAllUserOutboundPortInputDto = void;

export type FindAllUserOutboundPortOutputDto = Array<{
  name: string;
  email: string;
  phone: string;
}>;

export const FINDALL_USER_OUTBOUND_PORT = 'FINDALL_USER_OUTBOUND_PORT' as const;

export interface FindAllUserOutboundPort {
  execute(
    params: FindAllUserOutboundPortInputDto,
  ): Promise<FindAllUserOutboundPortOutputDto>;
}
