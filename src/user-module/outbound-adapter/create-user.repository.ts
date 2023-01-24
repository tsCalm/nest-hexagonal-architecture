import { MemoryDatabase } from '../../db';
import {
  CreateUserOutboundPort,
  CreateUserOutboundPortInputDto,
  CreateUserOutboundPortOutputDto,
} from '../outbound-port/create-user.outbound-port';

export class CreateUserRepository implements CreateUserOutboundPort {
  async execute(
    params: CreateUserOutboundPortInputDto,
  ): Promise<CreateUserOutboundPortOutputDto> {
    const user = await MemoryDatabase.create(params);
    delete user.id;
    return user;
  }
}
