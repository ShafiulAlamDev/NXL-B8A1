# Understanding TypeScript's Type Hierarchy: `any`, `unknown`, and `never`

## Introduction

TypeScript's type system helps catch mistakes before code runs. Three
special types `any`, `unknown`, and `never` sit at important points
in its type hierarchy. Understanding their differences helps to write
safer, more predictable code.

## How They Work

`any` effectively opts out of type checking. It assign any value to
it and perform almost any operation without an error:

``` ts
let value: any = "hello";
value.toFixed(); // Compiles, but fails at runtime
```

`unknown` can also hold a value of any type, but TypeScript requires 
to check or narrow that value before using it:

``` ts
let input: unknown = "hello";

if (typeof input === "string") {
  console.log(input.toUpperCase());
}
```

This makes `unknown` a safer choice for untrusted data, such as API
responses or parsed JSON. It forces to establish what a value is
before relying on its properties.

`never` represents a value that cannot exist. It is useful for functions
that never return and for exhaustive checks:

``` ts
function fail(message: string): never {
  throw new Error(message);
}
```

Conceptually, `unknown` is the top type: every value can be assigned to
it. `never` is the bottom type: it can be assigned to every type,
because no value of type `never` exists. `any` bypasses these safety
rules and behaves exceptionally in assignments.

## Conclusion

Prefer `unknown` over `any` when the type is not yet known. It preserves
type safety and encourages validation. Use `any` only when 
intentionally need to disable checking, and use `never` to represent
impossible states or unreachable code.
