import { Inject } from '@nestjs/common';

import {
  FindOneUserInboundPort,
  FindOneUserInboundPortInputDto,
  FindOneUserInboundPortOutputDto,
} from '../inbound-port/findone-user-inbound-port';
import {
  FindOneUserOutboundPort,
  FINDONE_USER_OUTBOUND_PORT,
} from '../outbound-port/findone-user.outbound-port';

export class FindOneUsersService implements FindOneUserInboundPort {
  constructor(
    @Inject(FINDONE_USER_OUTBOUND_PORT)
    private readonly findOneUserOutboudPort: FindOneUserOutboundPort,
  ) {}

  async execute(
    params: FindOneUserInboundPortInputDto,
  ): Promise<FindOneUserInboundPortOutputDto> {
    return this.findOneUserOutboudPort.execute(params);
  }
}
