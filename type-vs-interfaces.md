# Type vs Interface in TypeScript

## Introduction

In TypeScript, both `type` and `interface` describe the shape of data. They look alike and often work the same way, so it is easy to wonder which one to use. This post explains the main differences in simple terms.

## Key Differences

### 1. Declaration Merging (Open vs. Closed)
*   **Interface:** Open for automatic extension. Declaring the same interface multiple times merges all properties.
*   **Type Alias:** Strictly closed. Redeclaring the same type name throws a compile-time error.

```typescript
// Interfaces auto-merge
interface User { name: string; }
interface User { age: number; } // Merged!

// Type Aliases are closed
type Player = { name: string; };
type Player = { age: number; }; // Error: Duplicate identifier!
```
---
### 2. Union and Primitive Capabilities
*   **Interface:** Restricted to defining object structures, functions, or classes.
*   **Type Alias:** Universal capability. Can directly represent raw primitives, unions, and tuples.
```typescript
// Valid Type Aliases
type Status = "success" | "error";
type ID = string;
type Coord = [number, number];

// Invalid Interface
interface CustomStatus = "success" | "error"; // Syntax Error!
```
---
### 3. Extension Syntax (`extends` vs. Intersection)
*   **Interface:** Uses `extends`. TypeScript validates property conflicts immediately at compile time.
*   **Type Alias:** Uses intersections (`&`). Combines shapes recursively but can silently crash properties to `never` on conflicts.
```typescript
// Interface Extension
interface Admin extends User { role: string; }
// Type Intersection
type SuperUser = Player & { role: string; };
```

---
### 4. Advanced and Meta-Programming Logic
*   **Interface:** Static structural contracts. They cannot transform data shapes.
*   **Type Alias:** Dynamic. Natively supports conditional types, template literals, and mapped types.
```typescript
// Mapped Type (Only possible with type aliases)
type ReadOnly<T> = { readonly [P in keyof T]: T[P] };
```

---
### 5. Implementation in Classes (`implements`)
*   **Interface:** Act as native blueprints for classes.
*   **Type Alias:** Classes can only implement them if the shape resolves strictly to a static object structure without unions.

```typescript
// Works flawlessly
class Account implements User {
  name = "John";
  age = 30;
}

// Fails
class Session implements Status {} // Error: Cannot implement a union type Status
```

## When to Choose One Over the Other

**Choose Interface when:**
- Building a public API, a library, or a third-party plugin where consumers might need to expand types using declaration merging.
- Defining a contract for a standard object model, component props, or classes that rely heavily on traditional object-oriented `extends` hierarchies.

**Choose Type Alias when:**
- Need to declare unions (e.g., `type Status = 'success' | 'failure'`) or tuples.
- Aliasing primitive types for semantic readability (e.g., `type Email = string;`).
- Leveraging advanced TypeScript capabilities like mapped types, conditional types, or complex function signatures.

## Conclusion

Default to `interface` for object shapes and public APIs, and use `type` for unions, tuples, primitives, and mapped types. For simple objects, either works, so stay consistent.