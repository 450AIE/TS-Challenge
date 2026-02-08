/**
 *
 * type T1 = Awaited<Promise<string>>;        // T1 的类型为 string
 * type T2 = Awaited<Promise<Promise<number>>>; // T2 的类型为 number
 * type T3 = Awaited<string>;                // T3 的类型为 string（非 Promise 直接返回原类型）
 */

type MyAwaited<T> = T extends Promise<infer U> ? MyAwaited<U> : T;
