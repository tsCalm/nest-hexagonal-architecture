import { Controller, Get, Inject } from '@nestjs/common';
import {
  FindALLUserInboundPort,
  FINDALL_USER_INBOUND_PORT,
} from '../inbound-port/findall-user.inbount-port';

@Controller('users')
export class UserController {
  constructor(
    @Inject(FINDALL_USER_INBOUND_PORT)
    private readonly findAllInboundPort: FindALLUserInboundPort,
  ) {}

  @Get()
  async handle() {
    return this.findAllInboundPort.execute();
  }
}
