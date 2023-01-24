import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import {
  CreateUserInboundPort,
  CreateUserInboundPortInputDto,
  CREATE_USER_INBOUND_PORT,
} from '../inbound-port/create-user.inbound-port';
import {
  DeleteUserInboundPort,
  DELETE_USER_INBOUND_PORT,
} from '../inbound-port/delete-user.inbound-port';
import {
  FindAllUserInboundPort,
  FINDALL_USER_INBOUND_PORT,
} from '../inbound-port/findall-user.inbount-port';
import {
  FindOneUserInboundPort,
  FINDONE_USER_INBOUND_PORT,
} from '../inbound-port/findone-user-inbound-port';
import {
  UpdateUserInboundPort,
  UPDATE_USER_INBOUND_PORT,
} from '../inbound-port/update-user.inbound-port';

@Controller('users')
export class UserController {
  constructor(
    @Inject(FINDALL_USER_INBOUND_PORT)
    private readonly findAllInboundPort: FindAllUserInboundPort,
    @Inject(FINDONE_USER_INBOUND_PORT)
    private readonly findOneInboundPort: FindOneUserInboundPort,
    @Inject(CREATE_USER_INBOUND_PORT)
    private readonly createInboundPort: CreateUserInboundPort,
    @Inject(UPDATE_USER_INBOUND_PORT)
    private readonly updateInboundPort: UpdateUserInboundPort,
    @Inject(DELETE_USER_INBOUND_PORT)
    private readonly deleteInboundPort: DeleteUserInboundPort,
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

  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() createDto: CreateUserInboundPortInputDto,
  ) {
    return await this.updateInboundPort.execute(id, createDto);
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    return await this.deleteInboundPort.execute(id);
  }
}
