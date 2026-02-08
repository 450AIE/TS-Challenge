import { FuncType } from "../consts";

// 实现TS的ReturnType
type MyReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer U ? U : any;

type A = MyReturnType<FuncType>;
