/**
实现一个为对象添加一个新字段的类型。该类型接收三个参数，返回带有新字段的对象类型。

例如:

type Test = { id: '1' }
type Result = AppendToObject<Test, 'value', 4> // expected to be { id: '1', value: 4 }
 */

type AppendToObject<T extends Record<keyof any, any>, K extends string, V> = {
  [P in keyof T | K]: P extends keyof T ? T[P] : V;
};

type Test = { id: "1" };

type X = AppendToObject<Test, "value", 4>;
