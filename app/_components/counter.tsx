"use client";

import { useState } from "react";

// Note: JS number semantics are used for very large counts (Number.MAX_SAFE_INTEGER
// is ~9 quadrillion). Beyond that precision is lost, which is acceptable for a smoke test.

export default function Counter(): React.JSX.Element {
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <h1 className="text-6xl font-bold">{count}</h1>
      <button
        type="button"
        onClick={() => setCount((prev) => prev + 1)}
      >
        Increment
      </button>
    </div>
  );
}
