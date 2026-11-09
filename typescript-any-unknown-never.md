# Understanding TypeScript’s Type Hierarchy: `any`, `unknown`, and `never`

## Introduction

TypeScript’s type system catches many mistakes before code runs. Three special types `any`, `unknown`, and `never` serve different purposes. Knowing when to use each helps keep code reliable.

## How They Work

`any` disables type checking for a value. We can access properties or call methods without compiler warnings, even when they do not exist:

```ts
let value: any = "hello";
value.toFixed(); // Compiles, but fails at runtime
```

`unknown` can hold any value, but must check its type before using it:

```ts
let input: unknown = "hello";

if (typeof input === "string") {
  console.log(input.toUpperCase());
}
```

`never` represents a value that cannot occur. It commonly describes functions that always throw an error or never finish:

```ts
function fail(message: string): never {
  throw new Error(message);
}
```

In the type hierarchy, `unknown` is the top type because every value can be assigned to it. `never` is the bottom type because it can be assigned to every type, but no ordinary value can be assigned to it.

## Why Prefer `unknown` Over `any`?

Prefer `unknown` when data has not yet been validated, such as API responses, user input, or parsed JSON. Unlike `any`, it prevents unchecked property access, function calls, and assignments. This forces to validate or narrow the value first, catching mistakes during development instead of at runtime. For example, check `typeof input === "string"` before using string methods. `any` still has limited uses, such as gradual migration from JavaScript or integrating poorly typed libraries, but keep it deliberate and narrowly scoped. The TypeScript Handbook describes `unknown` as the type-safe counterpart of `any`.

## Conclusion

Use `unknown` for values whose types are not yet known, `never` for impossible values, and `any` only when opting out of type checking is intentional. `unknown` is not always mandatory, but it is usually the safer default.
