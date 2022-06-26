# BTreeSet

## Useful Functions

### [`range()`](https://doc.rust-lang.org/stable/std/collections/struct.BTreeSet.html#method.range)

Constructs a double-ended iterator over a sub-range of elements in the set.

```rust
use std::ops::Bound::*;
let mut set = BTreeSet::new();
set.insert(1);
set.insert(2);
set.insert(3);
assert_eq!(set.range(2..).next(), Some(&2));
assert_eq!(set.range((Excluded(2), Unbounded)).next(), Some(&3));
assert_eq!(set.range(..2).last(), Some(&1));
assert_eq!(set.range(..=2).last(), Some(&2));
```