/**
实现类型版本的数组反转 ```Array.reverse```

例如：

type a = Reverse<['a', 'b']> // ['b', 'a']
type b = Reverse<['a', 'b', 'c']> // ['c', 'b', 'a']
 */
type Reverse<T extends any[]> = T extends [...infer F, infer L] ? [L, ...Reverse<F>] : T;

type a = Reverse<["a", "b"]>; // ['b', 'a']
type b = Reverse<["a", "b", "c"]>; // ['c', 'b', 'a']
