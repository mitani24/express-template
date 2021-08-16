import { nanoid } from "nanoid";

export interface User {
  name: string;
  age: number;
}

interface UserData extends User {
  id: string;
}

const initialUsers: UserData[] = [
  {
    id: "HhPQfcDq7zLpVbtADLQae",
    name: "Alice",
    age: 24,
  },
  {
    id: "_W_jremtkp2uSG9L927PH",
    name: "Bob",
    age: 36,
  },
  {
    id: "_klZia8IbIB96fpBiDciP",
    name: "Carol",
    age: 17,
  },
];

class Store {
  private users = initialUsers;

  getUsers() {
    return this.users;
  }

  createUser(user: User) {
    const newUserData: UserData = {
      id: nanoid(),
      ...user,
    };
    this.users.push(newUserData);
    return newUserData;
  }

  getUser(id: string) {
    const user = this.users.find((user) => user.id === id);
    if (!user) {
      throw new Error("user not found");
    }
    return user;
  }

  updateUser(id: string, user: User) {
    const index = this.users.findIndex((user) => user.id === id);
    if (index < 0) {
      throw new Error("user not found");
    }

    const userData = this.users[index];
    const newUserData = {
      id: userData.id,
      ...user,
    };
    this.users[index] = newUserData;
    return newUserData;
  }

  deleteUser(id: string) {
    const index = this.users.findIndex((user) => user.id === id);
    if (index < 0) {
      throw new Error("user not found");
    }
    this.users.splice(index, 1);
  }
}

export default new Store();
