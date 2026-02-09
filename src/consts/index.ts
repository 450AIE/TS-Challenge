export type User = {
  name: string;
  age: number;
  money: number;
  gender: number;
};

export type DeepUser = {
  name: {
    prefix: string;
    suffix: string;
  };
  exprience: {
    teenager: {
      birth: number;
    };
  };
};

function add(a: number, b: number): number {
  return a + b;
}

export type DeepArr = [1, 2, [3, 4], [[[5]]]];

export type Arr = [User, DeepUser, number, string];

export type FuncType = typeof add;
