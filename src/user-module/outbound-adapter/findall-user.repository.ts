import {
  FindAllUserOutboundPort,
  FindAllUserOutboundPortInputDto,
  FindAllUserOutboundPortOutputDto,
} from '../outbound-port/findall-user.outbound-port';
import { MemoryDatabase } from '../../db';

export class FindAllUserRepository implements FindAllUserOutboundPort {
  async execute(
    params: FindAllUserOutboundPortInputDto,
  ): Promise<FindAllUserOutboundPortOutputDto> {
    const users = await MemoryDatabase.findAll();

    return users.map((member) => {
      return {
        name: member.name,
        email: member.email,
        phone: member.phone,
      };
    });
  }
}
