// 写一个StringLen<T>获取传递的字符串长度
type StringLen<T extends string, Count extends any[] = []> = T extends `${infer F}${infer R}`
  ? StringLen<R, [...Count, unknown]>
  : Count["length"];

type AX_ = StringLen<"123456789">;
