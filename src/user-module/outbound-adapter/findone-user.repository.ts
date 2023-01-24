import { MemoryDatabase } from '../../db';
import {
  FindOneUserOutboundPort,
  FindOneUserOutboundPortInputDto,
  FindOneUserOutboundPortOutputDto,
} from '../outbound-port/findone-user.outbound-port';

export class FindOneUserRepository implements FindOneUserOutboundPort {
  async execute(
    params: FindOneUserOutboundPortInputDto,
  ): Promise<FindOneUserOutboundPortOutputDto> {
    const user = await MemoryDatabase.findOne(params);
    if (!user) throw new Error('User not found');
    delete user.id;
    return user;
  }
}
