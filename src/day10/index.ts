/**
 * 
 * 
实现一个泛型 `DeepReadonly<T>`，它将对象的每个参数及其子对象递归地设为只读。

您可以假设在此挑战中我们仅处理对象。不考虑数组、函数、类等。但是，您仍然可以通过覆盖尽可能多的不同案例来挑战自己。
 * 
 */

import { DeepUser } from "../consts";

// Record<keyof any, any>表示对象
type DeepReadonly<T> = {
  readonly [K in keyof T]: T[K] extends Record<keyof any, any> ? DeepReadonly<T[K]> : T[K];
};

type A = DeepReadonly<DeepUser>;
