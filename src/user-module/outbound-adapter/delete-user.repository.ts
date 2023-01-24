import { MemoryDatabase } from '../../db';
import {
  DeleteUserOutboundPort,
  DeleteUserOutboundPortInputDto,
  DeleteUserOutboundPortOutputDto,
} from '../outbound-port/delete-user.outbound-port';

export class DeleteUserRepository implements DeleteUserOutboundPort {
  async execute(
    params: DeleteUserOutboundPortInputDto,
  ): Promise<DeleteUserOutboundPortOutputDto> {
    const result = await MemoryDatabase.delete(params);
    return result;
  }
}
