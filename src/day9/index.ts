/**
 * 实现一个泛型`MyReadonly2<T, K>`，它带有两种类型的参数`T`和`K`。
 *
 * 类型 `K` 指定 `T` 中要被设置为只读 (readonly) 的属性。如果未提供`K`，则应使所有属性都变为只读，就像普通的`Readonly<T>`一样。
 */

import { User } from "../consts";

// 思路：先全部变为readonly，然后再将不在K中的属性重新变回去
type MyReadOnly<T, K extends keyof T = keyof T> = {
  readonly [P in K]: T[P];
} & {
  [P in keyof T as P extends K ? never : P]: T[P];
};

type A = MyReadOnly<User, "age">;
type B = MyReadOnly<User>;
