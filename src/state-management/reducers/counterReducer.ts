interface Action {
  type: "INCREMENT" | "RESET" | "DECREMENT";
}
// Reducer: is a function that allows us to centralize state updates in a component
// Reducer Functions have two paramenters:
//  - state: the current state
// - action: is an object that describes what the consumers try to do
const counterReducer = (state: number, action: Action): number => {
  if (action.type === "INCREMENT") return state + 1;
  if (action.type === "DECREMENT") return state - 1;
  if (action.type === "RESET") return 0;
  return state;
};

export default counterReducer;
