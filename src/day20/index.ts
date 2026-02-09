/**
获取两个接口类型中的差值属性。
‍
type Foo = {
  a: string;
  b: number;
};
type Bar = {
  a: string;
  c: boolean;
};

type Result1 = Diff<Foo,Bar> // { b: number, c: boolean }
type Result2 = Diff<Bar,Foo> // { b: number, c: boolean }
 * 
 */
type Foo = {
  a: string;
  b: number;
};
type Bar = {
  a: string;
  c: boolean;
};

// 思路：先找A有B无，再找B有A无的
type Diff<T extends Record<keyof any, any>, U extends Record<keyof any, any>> = {
  [K in keyof T as K extends keyof U ? never : K]: T[K];
} & {
  [K in keyof U as K extends keyof T ? never : K]: U[K];
};

type M = Diff<Foo, Bar>;
