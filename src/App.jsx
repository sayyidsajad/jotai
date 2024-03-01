import { atom, useAtom } from "jotai";
const countAtom = atom(0);
const count2Atom = countAtom;

const Counter1 = () => {
  const [count, setCount] = useAtom(countAtom);
  return (
    <div>
      {count}
      <button onClick={() => setCount((c) => c + 1)}>+1</button>
    </div>
  );
};
const Counter2 = () => {
  const [count, setCount] = useAtom(count2Atom);
  return (
    <div>
      {count}
      <button onClick={() => setCount((c) => c + 1)}>+1</button>
    </div>
  );
};

const App = () => (
  <>
    <Counter1 />
    <Counter2 />
  </>
);

export default App;
