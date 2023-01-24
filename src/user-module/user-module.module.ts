import { Module } from '@nestjs/common';
import { UserController } from './controller/user.controller';
import { CREATE_USER_INBOUND_PORT } from './inbound-port/create-user.inbound-port';
import { FINDALL_USER_INBOUND_PORT } from './inbound-port/findall-user.inbount-port';
import { FINDONE_USER_INBOUND_PORT } from './inbound-port/findone-user-inbound-port';
import { UPDATE_USER_INBOUND_PORT } from './inbound-port/update-user.inbound-port';
import { CreateUserRepository } from './outbound-adapter/create-user.repository';
import { FindAllUserRepository } from './outbound-adapter/findall-user.repository';
import { FindOneUserRepository } from './outbound-adapter/findone-user.repository';
import { UpdateUserRepository } from './outbound-adapter/update-user.repository';
import { CREATE_USER_OUTBOUND_PORT } from './outbound-port/create-user.outbound-port';
import { FINDALL_USER_OUTBOUND_PORT } from './outbound-port/findall-user.outbound-port';
import { FINDONE_USER_OUTBOUND_PORT } from './outbound-port/findone-user.outbound-port';
import { UPDATE_USER_OUTBOUND_PORT } from './outbound-port/update-user.outbound-port';
import { CreateUsersService } from './service/create-user.service';
import { FindAllUsersService } from './service/findall-user.service';
import { FindOneUsersService } from './service/findone-user.service';
import { UpdateUsersService } from './service/update-user.service';

@Module({
  controllers: [UserController],
  providers: [
    {
      provide: FINDALL_USER_INBOUND_PORT,
      useClass: FindAllUsersService,
    },
    {
      provide: FINDALL_USER_OUTBOUND_PORT,
      useClass: FindAllUserRepository,
    },
    {
      provide: FINDONE_USER_INBOUND_PORT,
      useClass: FindOneUsersService,
    },
    {
      provide: FINDONE_USER_OUTBOUND_PORT,
      useClass: FindOneUserRepository,
    },
    {
      provide: CREATE_USER_INBOUND_PORT,
      useClass: CreateUsersService,
    },
    {
      provide: CREATE_USER_OUTBOUND_PORT,
      useClass: CreateUserRepository,
    },
    {
      provide: UPDATE_USER_INBOUND_PORT,
      useClass: UpdateUsersService,
    },
    {
      provide: UPDATE_USER_OUTBOUND_PORT,
      useClass: UpdateUserRepository,
    },
  ],
})
export class UserModuleModule {}
