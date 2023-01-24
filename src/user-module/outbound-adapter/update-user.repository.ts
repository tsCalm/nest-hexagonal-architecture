import { MemoryDatabase } from '../../db';
import {
  CreateUserOutboundPort,
  CreateUserOutboundPortInputDto,
  CreateUserOutboundPortOutputDto,
} from '../outbound-port/create-user.outbound-port';
import {
  UpdateUserOutboundPort,
  UpdateUserOutboundPortInputDto,
  UpdateUserOutboundPortOutputDto,
} from '../outbound-port/update-user.outbound-port';

export class UpdateUserRepository implements UpdateUserOutboundPort {
  async execute(
    id: number,
    params: UpdateUserOutboundPortInputDto,
  ): Promise<UpdateUserOutboundPortOutputDto> {
    const user = await MemoryDatabase.update(id, params);
    delete user.id;
    return user;
  }
}
