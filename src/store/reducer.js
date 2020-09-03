import actionSwitch from "./actionSwitch";
import stateLogger from "@codewell/state-logger";

export default (state, action) => {
  const nextState = actionSwitch(state, action);
  stateLogger(state, action, nextState);
  return nextState;
};
