import { Inject } from '@nestjs/common';

import {
  UpdateUserInboundPort,
  UpdateUserInboundPortInputDto,
  UpdateUserInboundPortOutputDto,
} from '../inbound-port/update-user.inbound-port';
import {
  UpdateUserOutboundPort,
  UPDATE_USER_OUTBOUND_PORT,
} from '../outbound-port/update-user.outbound-port';

export class UpdateUsersService implements UpdateUserInboundPort {
  constructor(
    @Inject(UPDATE_USER_OUTBOUND_PORT)
    private readonly updateUserOutboudPort: UpdateUserOutboundPort,
  ) {}

  async execute(
    id: number,
    params: UpdateUserInboundPortInputDto,
  ): Promise<UpdateUserInboundPortOutputDto> {
    return this.updateUserOutboudPort.execute(id, params);
  }
}
