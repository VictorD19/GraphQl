module.exports = {
  Query: {
    users: async (_, __, { dataSources: { users } }) => {
      const listUser = await users.getAll();
      return listUser;
    },
    user: async (_, { id }, { dataSources: { users } }) =>
      await users.getUser(id),
  },

  Mutation: {
    createUser: async (_, { user }, { dataSources: { users } }) => {
      const [existUser] = await users.findByEmail(user.email);
      if (existUser) throw new Error("Usuario com email ja cadastrado");
      const userCreated = await users.create(user);
      return userCreated;
    },
    deleteUser: async (_, { userId }, { dataSources: { users } }) => {
      const findUser = await users.getUser(userId);

      if (!findUser) throw new Error("Usuario não encontrado");
      await users.delete(userId);

      return "Usuario deletado com sucesso";
    },
    updateUser: async (_, { userId, user }, { dataSources: { users } }) => {
      // console.log(userId,user );
      const findUser = await users.getUser(userId);
      if (!findUser) throw new Error("Usuario não encontrado");

      const userUpdated = await users.update(userId, user);

      return userUpdated;
    },
  },
};
