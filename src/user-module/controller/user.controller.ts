import { Controller, Get, Inject, Param, ParseIntPipe } from '@nestjs/common';
import {
  FindAllUserInboundPort,
  FINDALL_USER_INBOUND_PORT,
} from '../inbound-port/findall-user.inbount-port';
import {
  FindOneUserInboundPort,
  FINDONE_USER_INBOUND_PORT,
} from '../inbound-port/findone-user-inbound-port';

@Controller('users')
export class UserController {
  constructor(
    @Inject(FINDALL_USER_INBOUND_PORT)
    private readonly findAllInboundPort: FindAllUserInboundPort,
    @Inject(FINDONE_USER_INBOUND_PORT)
    private readonly findOneInboundPort: FindOneUserInboundPort,
  ) {}

  @Get()
  async findAll() {
    return this.findAllInboundPort.execute();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return this.findOneInboundPort.execute(id);
  }
}
