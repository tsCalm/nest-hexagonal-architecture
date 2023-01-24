import { Inject } from '@nestjs/common';
import {
  CreateUserInboundPort,
  CreateUserInboundPortInputDto,
  CreateUserInboundPortOutputDto,
} from '../inbound-port/create-user.inbound-port';

import {
  CreateUserOutboundPort,
  CREATE_USER_OUTBOUND_PORT,
} from '../outbound-port/create-user.outbound-port';

export class CreateUsersService implements CreateUserInboundPort {
  constructor(
    @Inject(CREATE_USER_OUTBOUND_PORT)
    private readonly createUserOutboudPort: CreateUserOutboundPort,
  ) {}

  async execute(
    params: CreateUserInboundPortInputDto,
  ): Promise<CreateUserInboundPortOutputDto> {
    return this.createUserOutboudPort.execute(params);
  }
}
