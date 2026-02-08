import { FuncType } from "../consts";

type MyParameters<T extends (...args: any) => any> = T extends (...args: infer P) => any ? P : never;

type A = MyParameters<FuncType>;
