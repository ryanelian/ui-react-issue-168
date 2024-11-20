'use client';

import { Chip } from "@hennge/ui-react";

export default function Home() {
  return (
    <main style={{
      padding: "4rem",
    }}>
      <Chip onClose={() => console.log("close")}>Hello, world!</Chip>
    </main>
  );
}
