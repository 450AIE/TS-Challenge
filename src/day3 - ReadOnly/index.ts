import { User } from "../consts";

type MyReadOnly<T> = {
  readonly [K in keyof T]: T[K];
};

type A = MyReadOnly<User>;
