import { FindAllUsersService } from './findall-user.service';
import {
  FindAllUserOutboundPort,
  FindAllUserOutboundPortInputDto,
  FindAllUserOutboundPortOutputDto,
} from '../outbound-port/findall-user.outbound-port';
import {
  FindOneUserOutboundPort,
  FindOneUserOutboundPortInputDto,
  FindOneUserOutboundPortOutputDto,
} from '../outbound-port/findone-user.outbound-port';
import { FindOneUsersService } from './findone-user.service';
import { CreateUsersService } from './create-user.service';
import {
  CreateUserOutboundPort,
  CreateUserOutboundPortInputDto,
  CreateUserOutboundPortOutputDto,
} from '../outbound-port/create-user.outbound-port';

class MockFindAllUsersOutboundPort implements FindAllUserOutboundPort {
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

class MockFindOneUsersOutboundPort implements FindOneUserOutboundPort {
  private readonly result: FindOneUserOutboundPortOutputDto;

  constructor(result: FindOneUserOutboundPortOutputDto) {
    this.result = result;
  }

  async execute(
    params: FindOneUserOutboundPortInputDto,
  ): Promise<FindOneUserOutboundPortOutputDto> {
    if (!this.result) throw new Error('User not found');
    return this.result;
  }
}

class MockCreateUsersOutboundPort implements CreateUserOutboundPort {
  private readonly result: CreateUserOutboundPortOutputDto;

  constructor(result: CreateUserOutboundPortOutputDto) {
    this.result = result;
  }

  async execute(
    params: CreateUserOutboundPortInputDto,
  ): Promise<CreateUserOutboundPortOutputDto> {
    return this.result;
  }
}

describe('FindAllUserSerivce Spec', () => {
  test('유저 리스트를 반환한다.', async () => {
    const member = [
      {
        name: 'limsm',
        email: 'test@gmail.com',
        phone: '01012341234',
      },
    ];

    const findMemberService = new FindAllUsersService(
      new MockFindAllUsersOutboundPort(member),
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

describe('FindOneUserSerivce Spec', () => {
  test('유저를 반환한다.', async () => {
    const member = {
      name: 'limsm',
      email: 'test@gmail.com',
      phone: '01012341234',
    };
    const findMemberService = new FindOneUsersService(
      new MockFindOneUsersOutboundPort(member),
    );

    const res = await findMemberService.execute(1);

    expect(res).toStrictEqual({
      name: 'limsm',
      email: 'test@gmail.com',
      phone: '01012341234',
    });
  });
});

describe('FindOneUserSerivce Spec', () => {
  test('유저를 반환한다.', async () => {
    const member = {
      name: 'limsm',
      email: 'test@gmail.com',
      phone: '01012341234',
    };
    const createMemberService = new CreateUsersService(
      new MockCreateUsersOutboundPort(member),
    );

    const res = await createMemberService.execute(member);

    expect(res).toStrictEqual({
      name: 'limsm',
      email: 'test@gmail.com',
      phone: '01012341234',
    });
  });
});
