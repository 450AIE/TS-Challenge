/**
给定一个正整数作为类型的参数，要求返回的类型是该数字减 1。

例如:

type Zero = MinusOne<1> // 0
type FiftyFour = MinusOne<55> // 54
 */

type MinusOne<T extends number, Count extends any[] = []> = [...Count, unknown]["length"] extends T
  ? Count["length"]
  : MinusOne<T, [...Count, unknown]>;

type Zero = MinusOne<1>;
type FiftyFour = MinusOne<55>;
