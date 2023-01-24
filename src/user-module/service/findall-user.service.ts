import { Inject } from '@nestjs/common';
import {
  FindAllUserInboundPort,
  FindUserInboundPortOutputDto,
  FindUserInboundPortInputDto,
} from '../inbound-port/findall-user.inbount-port';
import {
  FindAllUserOutboundPort,
  FINDALL_USER_OUTBOUND_PORT,
} from '../outbound-port/findall-user.outbound-port';

export class FindAllUsersService implements FindAllUserInboundPort {
  constructor(
    @Inject(FINDALL_USER_OUTBOUND_PORT)
    private readonly findAllUserOutboudPort: FindAllUserOutboundPort,
  ) {}

  async execute(
    params: FindUserInboundPortInputDto,
  ): Promise<FindUserInboundPortOutputDto> {
    return this.findAllUserOutboudPort.execute();
  }
}
