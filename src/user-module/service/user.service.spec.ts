import { FindAllUsersService } from './user.service';
import {
  FindAllUserOutboundPort,
  FindAllUserOutboundPortInputDto,
  FindAllUserOutboundPortOutputDto,
} from '../outbound-port/findall-user.outbound-port';

class MockFindMembersOutboundPort implements FindAllUserOutboundPort {
  private readonly result: FindAllUserOutboundPortOutputDto;

  constructor(result: FindAllUserOutboundPortOutputDto) {
    this.result = result;
  }

  async execute(
    params: FindAllUserOutboundPortInputDto,
  ): Promise<FindAllUserOutboundPortOutputDto> {
    return this.result;
  }
}

describe('FindUserSerivce Spec', () => {
  test('유저 리스트를 반환한다.', async () => {
    const member = [
      {
        name: 'limsm',
        email: 'test@gmail.com',
        phone: '01012341234',
      },
    ];

    const findMemberService = new FindAllUsersService(
      new MockFindMembersOutboundPort(member),
    );

    const res = await findMemberService.execute();

    expect(res).toStrictEqual([
      {
        name: 'limsm',
        email: 'test@gmail.com',
        phone: '01012341234',
      },
    ]);
  });
});
