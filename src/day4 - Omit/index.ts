import { User } from "../consts";

type MyOmit<T, U extends keyof T> = {
  [K in keyof T as K extends U ? never : K]: T[K];
};

type A = MyOmit<User, "age">;
