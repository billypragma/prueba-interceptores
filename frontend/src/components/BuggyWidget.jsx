// src/components/BuggyWidget.jsx
import { useState } from "react";

function BuggyWidget() {
  const [explode, setExplode] = useState(false);

  if (explode) {
    throw new Error("Boom: fallo simulado en render");
  }

  return <button onClick={() => setExplode(true)}>Romper este widget</button>;
}

export default BuggyWidget;