# Type Aliases vs Interfaces in TypeScript: Which Should You Use?

## Introduction

TypeScript gives us two main ways to describe the shape of data: `type` aliases and `interface` declarations. They look similar and often work interchangeably, which makes beginners wonder why both exist. Understanding their differences helps you write cleaner, more predictable code.

## Core Differences

Interfaces describe object shapes and can be extended or merged. A unique feature is declaration merging, where two interfaces with the same name combine automatically.

```typescript
interface User {
  name: string;
}
interface User {
  age: number;
}
// User now has both name and age
```

Type aliases are more flexible. They can name any type, including unions, tuples, and primitives, which interfaces cannot do.

```typescript
type ID = string | number;
type Point = [number, number];
type Status = "active" | "inactive";
```

Both support extension, but with different syntax. Interfaces use `extends`, while types use intersections.

```typescript
interface Animal { name: string }
interface Dog extends Animal { breed: string }

type Cat = Animal & { lives: number };
```

## When to Choose Which

Use `interface` for object shapes, especially public APIs, class contracts, and library code where merging may help. Use `type` when you need unions, tuples, mapped types, or conditional types. For everyday React or Next.js props, either works well, so pick one convention and stay consistent across your team.

## Conclusion

Interfaces excel at describing extensible object structures, while type aliases handle everything else. Neither is universally better. Default to `interface` for objects, reach for `type` when you need its extra power, and prioritize consistency in your codebase.
