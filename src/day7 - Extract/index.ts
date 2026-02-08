/**
 * 1. 基本类型提取
 *
 * type Colors = 'red' | 'green' | 'blue' | 1 | 2 | 3;
 * type StringColors = Extract<Colors, string>;        // "red" | "green" | "blue"
 * type NumberColors = Extract<Colors, number>;       // 1 | 2 | 3
 *
 * // 实际应用
 * const validColors: StringColors = 'red';  // ✅ 正确
 * // const invalid: StringColors = 1;       // ❌ 错误，1 不是字符串
 *
 * -----------------------------------------------------------------------------------------------------
 *
 * 2. 从对象类型中提取
 *
 * interface User {
 *   id: number;
 *   name: string;
 *   email: string;
 *   age: number;
 *   isActive: boolean;
 * }
 *
 * // 提取字符串类型的属性
 * type StringProps = Extract<keyof User, string>;  // 所有键都是字符串，所以返回全部
 * // 等价于: "id" | "name" | "email" | "age" | "isActive"
 *
 * // 更实用的例子：提取特定类型的属性键
 * type StringKeys = {
 *   [K in keyof User]: User[K] extends string ? K : never
 * }[keyof User];  // "name" | "email"
 *
 */

type MyExtract<T, U> = T extends U ? T : never;
