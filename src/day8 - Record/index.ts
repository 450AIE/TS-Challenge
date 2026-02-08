type MyRecord<T extends keyof any, U> = {
  [K in T]: U;
};
