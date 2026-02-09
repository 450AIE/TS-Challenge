/**
In This Challenge, You should implement a type `GreaterThan<T, U>` like `T > U`

只考虑正整数

For example

GreaterThan<2, 1> //should be true
GreaterThan<1, 1> //should be false
GreaterThan<10, 100> //should be false
 */

type GreaterThan<T extends number, U extends number, Count extends any[] = []> = T extends Count["length"]
  ? false
  : U extends Count["length"]
    ? true
    : GreaterThan<T, U, [...Count, T]>;

type BB1 = GreaterThan<2, 1>; //should be true
type BB11 = GreaterThan<1, 1>; //should be false
type BB111 = GreaterThan<10, 100>; //should be false
