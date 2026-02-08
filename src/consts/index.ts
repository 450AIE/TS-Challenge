export type User = {
  name: string;
  age: number;
};

function add(a: number, b: number): number {
  return a + b;
}

export type FuncType = typeof add;
