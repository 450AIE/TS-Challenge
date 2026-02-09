/**
在这个挑战中，你需要写一个接受数组的类型，并且返回扁平化的数组类型。

例如:

type flatten = Flatten<[1, 2, [3, 4], [[[5]]]]> // [1, 2, 3, 4, 5]
 */

import { DeepArr } from "../consts";

type Flatten<T extends any[]> = T extends [infer F, ...infer R]
  ? F extends any[]
    ? [...Flatten<F>, ...Flatten<R>]
    : [F, ...Flatten<R>]
  : T;

type A = Flatten<DeepArr>;
