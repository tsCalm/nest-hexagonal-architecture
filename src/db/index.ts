export type User = {
  id: number;
  name: string;
  email: string;
  phone: string;
};

export const MemoryDatabase = (() => {
  const members = [
    {
      id: 1,
      name: 'limsm',
      email: 'test@gmail.com',
      phone: '010-1234-1234',
    },
  ] as User[];

  return {
    findAll: () => Promise.resolve(members),
  };
})();
