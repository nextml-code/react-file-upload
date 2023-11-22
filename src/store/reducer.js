import actionSwitch from "./actionSwitch.js";

export default () => (state, action) => {
  const nextState = actionSwitch(state, action);

  return nextState;
};
