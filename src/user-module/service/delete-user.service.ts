import { Inject } from '@nestjs/common';
import {
  DeleteUserInboundPort,
  DeleteUserInboundPortInputDto,
  DeleteUserInboundPortOutputDto,
} from '../inbound-port/delete-user.inbound-port';

import {
  FindOneUserInboundPort,
  FindOneUserInboundPortInputDto,
  FindOneUserInboundPortOutputDto,
} from '../inbound-port/findone-user-inbound-port';
import {
  DeleteUserOutboundPort,
  DELETE_USER_OUTBOUND_PORT,
} from '../outbound-port/delete-user.outbound-port';
import {
  FindOneUserOutboundPort,
  FINDONE_USER_OUTBOUND_PORT,
} from '../outbound-port/findone-user.outbound-port';

export class DeleteUsersService implements DeleteUserInboundPort {
  constructor(
    @Inject(DELETE_USER_OUTBOUND_PORT)
    private readonly deleteUserOutboudPort: DeleteUserOutboundPort,
  ) {}

  async execute(
    params: DeleteUserInboundPortInputDto,
  ): Promise<DeleteUserInboundPortOutputDto> {
    return this.deleteUserOutboudPort.execute(params);
  }
}
