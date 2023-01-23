import { Module } from '@nestjs/common';
import { UserController } from './controller/user.controller';
import { FINDALL_USER_INBOUND_PORT } from './inbound-port/findall-user.inbount-port';
import { FindAllUserRepository } from './outbound-adapter/findall-user.repository';
import { FINDAll_USER_OUTBOUND_PORT } from './outbound-port/findall-user.outbound-port';
import { FindAllUsersService } from './service/user.service';

@Module({
  controllers: [UserController],
  providers: [
    {
      provide: FINDALL_USER_INBOUND_PORT,
      useClass: FindAllUsersService,
    },
    {
      provide: FINDAll_USER_OUTBOUND_PORT,
      useClass: FindAllUserRepository,
    },
  ],
})
export class UserModuleModule {}
