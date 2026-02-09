/**
 * 
 * 
实现一个泛型`Pop<T>`，它接受一个数组`T`，并返回一个由数组`T`的前 N-1 项（N 为数组`T`的长度）以相同的顺序组成的数组。

例如

type arr1 = ['a', 'b', 'c', 'd']

type re1 = Pop<arr1> // expected to be ['a', 'b', 'c']
 * 
 */

import { Arr } from "../consts";

// 直接infer，分开前面的和最后一个
type Pop<T extends any[]> = T extends [...infer F, infer L] ? F : any;

type A = Pop<Arr>;
