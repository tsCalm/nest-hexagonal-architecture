import {
  Body,
  Controller,
  Get,
  Inject,
  Param,
  ParseIntPipe,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import {
  CreateUserInboundPort,
  CreateUserInboundPortInputDto,
  CREATE_USER_INBOUND_PORT,
} from '../inbound-port/create-user.inbound-port';
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
    @Inject(CREATE_USER_INBOUND_PORT)
    private readonly createInboundPort: CreateUserInboundPort,
  ) {}

  @Get()
  async findAll() {
    return this.findAllInboundPort.execute();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return this.findOneInboundPort.execute(id);
  }

  @Post()
  async create(@Body() createDto: CreateUserInboundPortInputDto) {
    return await this.createInboundPort.execute(createDto);
  }
}
