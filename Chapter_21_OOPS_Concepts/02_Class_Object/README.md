# Static Members in JavaScript Classes

## Overview
This document explains **static members** in JavaScript classes — properties and methods that belong to the class itself, not to individual objects.

## Code Structure

### Instance Properties (Constructor)
- `name_student`, `age`, `phoneNo` are instance properties
- Created individually for each object: `s1` and `s2` have their own values

### Static Members
- `static name = "Playwright2x"` — Shared by all instances and the class
- `static mentor_name = "PrrammodDutta"` — Shared by all instances and the class
- `static display()` — A method that belongs to the class, not instances

## Object Creation
- `s1` and `s2` are two separate Student objects with different names, ages, and phone numbers

## Access Patterns
- ✅ `s1.name_student` and `s2.name_student` — Access instance properties (different values)
- ✅ `Student.name` and `Student.mentor_name` — Access static members using the class name

## Key Differences

| Aspect | Instance Properties | Static Members |
|--------|-------------------|-----------------|
| Scope | Unique for each object | Shared across all objects and the class |
| Access | `object.property` | `ClassName.property` |
| Definition | In constructor | With `static` keyword |
| Shared Data | No | Yes |

## Use Cases
Static members are useful for:
- **Shared data**: Configuration, class-level information
- **Utility methods**: Methods that don't depend on specific instance data
- **Counters**: Track class-level statistics
- **Constants**: Define values shared across all instances

In this example, `name` and `mentor_name` are shared course information that all students have in common.
