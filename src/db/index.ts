export type User = {
  id: number;
  name: string;
  email: string;
  phone: string;
};

export type UserInput = Omit<User, 'id'>;

export const MemoryDatabase = (() => {
  const users = [
    {
      id: 1,
      name: 'limsm',
      email: 'test@gmail.com',
      phone: '010-1234-1234',
    },
  ] as User[];

  return {
    findAll: () => Promise.resolve(users),
    findOne: (id: number) =>
      Promise.resolve(users.find((user) => user.id === id)),
    create: (user: UserInput) => {
      const ids = users.map((user) => user.id);
      const lastIndex = Math.max(...ids);
      const newUser = { ...user, id: lastIndex + 1 };
      users.push(newUser);
      return Promise.resolve(newUser);
    },
  };
})();
