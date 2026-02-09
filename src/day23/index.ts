/**
将两个类型合并成一个类型，第二个类型的键会覆盖第一个类型的键。

例如

type foo = {
  name: string;
  age: string;
}

type coo = {
  age: number;
  sex: string
}

type Result = Merge<foo,coo>; // expected to be {name: string, age: number, sex: string}
 */

type Merge<T extends Record<keyof any, any>, U extends Record<keyof any, any>> = {
  [K in keyof T | keyof U]: K extends keyof U ? U[K] : T[K];
};

type foo = {
  name: string;
  age: string;
};

type coo = {
  age: number;
  sex: string;
};

type Result2 = Merge<foo, coo>; // expected to be {name: string, age: number, sex: string}
