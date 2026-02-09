/**
 * 实现AllUppercase<T>，让T所有字符串变为大写
 */
type AllUppercase<T extends string> = T extends `${infer F}${infer R}` ? `${Uppercase<F>}${AllUppercase<R>}` : T;

type B = AllUppercase<"hccccc">;
