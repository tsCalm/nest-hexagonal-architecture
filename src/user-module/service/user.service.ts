import { Inject } from '@nestjs/common';
import {
  FindALLUserInboundPort,
  FindUserInboundPortOutputDto,
  FindUserInboundPortInputDto,
} from '../inbound-port/findall-user.inbount-port';
import {
  FindAllUserOutboundPort,
  FINDAll_USER_OUTBOUND_PORT,
} from '../outbound-port/findall-user.outbound-port';
// import { Inject } from '@nestjs/common';
// import {
//   FIND_MEMBERS_OUTBOUND_PORT,
//   FindMembersOutboundPort,
// } from '../outbound-port/find-members.outbound-port';

export class FindAllUsersService implements FindALLUserInboundPort {
  constructor(
    @Inject(FINDAll_USER_OUTBOUND_PORT)
    private readonly findAllUserOutboudPort: FindAllUserOutboundPort,
  ) {}

  async execute(
    params: FindUserInboundPortInputDto,
  ): Promise<FindUserInboundPortOutputDto> {
    return this.findAllUserOutboudPort.execute();
    // return this.findMembersOutboundPort.execute();
  }
}
