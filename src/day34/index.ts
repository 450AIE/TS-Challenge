/**
实现类型版本的 ```Array.lastIndexOf```, ```LastIndexOf<T, U>```  接受数组 ```T```, any 类型 ```U```, 如果 ```U``` 存在于 ```T``` 中, 返回 ```U``` 在数组 ```T``` 中最后一个位置的索引, 不存在则返回 ```-1```

For example:


type Res1 = LastIndexOf<[1, 2, 3, 2, 1], 2> // 3
type Res2 = LastIndexOf<[0, 0, 0], 2> // -1
 */

type LastIndexOf<T extends number[], U extends number, Count extends any[] = []> = T["length"] extends Count["length"]
  ? -1
  : T[Count["length"]] extends U
    ? Count["length"]
    : LastIndexOf<T, U, [...Count, unknown]>;

type Res1 = LastIndexOf<[1, 2, 3, 2, 11], 11>; // 3
type Res2 = LastIndexOf<[0, 0, 0], 2>; // -1
