/**
interface User {
  id: number;
  name: string;
  email: string;
  age: number;
  createdAt: Date;
  updatedAt: Date;
}

type BasicUserInfo = Pick<User, 'id' | 'name' | 'email'>;

等价于：
{
  id: number;
  name: string;
  email: string;
}

 */

import { User } from "../consts";

type MyPick1<T, U extends keyof T> = {
  [P in U]: T[P];
};

type MyPick2<T, U extends keyof T> = {
  [K in keyof T as K extends U ? K : never]: T[K];
};

type A = MyPick1<User, "age">;
type B = MyPick2<User, "age">;
