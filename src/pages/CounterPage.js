import produce from "immer";
import { useReducer } from "react";
import Button from "../components/Button";
import Panel from "../components/Panel";

const INCREMENT = "increment";
const DECREMENT = "decrement";
const TO_ADD = "change-value-to-add";
const TO_COUNT = "add_value_to_count";

const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT:
      state.count = state.count + 1;
      return;
    case DECREMENT:
      state.count = state.count - 1;
      return;
    case TO_ADD:
      state.valueToAdd = action.payload;
      return;
    case TO_COUNT:
      state.count = state.count + state.valueToAdd;
      state.valueToAdd = 0;
      return;
    default:
      return;
  }
};

function CounterPage({ initialCount }) {
  const [state, dispatch] = useReducer(produce(reducer), {
    count: initialCount,
    valueToAdd: 0,
  });

  const increment = () => {
    dispatch({ type: INCREMENT });
  };

  const decrement = () => {
    dispatch({ type: DECREMENT });
  };

  const handleChange = (event) => {
    const value = +event.target.value || 0;

    dispatch({ type: TO_ADD, payload: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch({ type: TO_COUNT });
  };

  return (
    <Panel className="m-3">
      <h1 className="text-lg">Count is {state.count}</h1>
      <div className="flex flex-row">
        <Button onClick={increment}>Increment</Button>
        <Button onClick={decrement}>Decrement</Button>
      </div>

      <form onSubmit={handleSubmit}>
        <label>Add a lot!</label>
        <input
          value={state.valueToAdd || ""}
          onChange={handleChange}
          type="number"
          className="p-1 m-3 bg-gray-50 border border-gray-300"
        />
        <Button>Add it</Button>
      </form>
    </Panel>
  );
}

export default CounterPage;
