import { ReactElement, useId, useState } from "react";
import "./App.css";
import Counter from "./src/components/counter";
import Name from "./src/types/e-name";

function App() {
  const [name, setName] = useState(Name.nath);
  const uniqueId = useId();
  const [solveProblem, setSolveProblem] = useState(false);

  function getCounterComponent(_name: Name): ReactElement {
    return solveProblem ? (
      <Counter name={_name} key={_name} />
    ) : (
      <Counter name={Name.sara} />
    );
  }
  const compNath = getCounterComponent(Name.nath);
  const compSara = getCounterComponent(Name.sara);
  const pElem = solveProblem ? (
    <p style={{ color: "green" }}>
      Now swaping component preserve the counter state which should be per
      component
    </p>
  ) : (
    <p style={{ color: "orange" }}>
      The problem is that swaping component preserve the counter state which
      should be per component
    </p>
  );

  return (
    <>
      {pElem}
      <label htmlFor={uniqueId}>solve the problem</label>
      <input
        type="checkbox"
        id={uniqueId}
        onChange={() => setSolveProblem(!solveProblem)}
      />
      <br /> <br />
      <button
        onClick={() => setName(name == Name.sara ? Name.nath : Name.sara)}
      >
        Swap
      </button>
      {name == Name.nath ? compSara : compNath}
    </>
  );
}

export default App;
