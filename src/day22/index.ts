/**
实现一个接收string,number或bigInt类型参数的`Absolute`类型,返回一个正数字符串。

例如

type Test = -100;
type Result = Absolute<Test>; // expected to be "100"
 */

type Absolute<T extends number | string | bigint> = `${T}` extends `-${infer Num}` ? `${Num}` : T;

type Test2 = -100;
type Result = Absolute<Test2>; // expected to be "100"
