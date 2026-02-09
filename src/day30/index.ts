/**
从字符串中剔除指定字符。

例如：

type Butterfly = DropChar<' b u t t e r f l y ! ', ' '> // 'butterfly!'
 */

type DropChar<T extends string, U> = T extends `${infer F}${infer R}`
  ? F extends U
    ? `${DropChar<R, U>}`
    : `${F}${DropChar<R, U>}`
  : T;

type Butterfly = DropChar<" b u t t e r f l y ! ", " ">;
