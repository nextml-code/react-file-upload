import { START_DRAG, STOP_DRAG } from "../store/actionTypes";

export const preventEventDefault = (event) => event.preventDefault();

export const handleOnDragEnter = ({ dispatch }) => {
  dispatch({ type: START_DRAG });
};

export const handleOnDragExit = ({ dispatch }) => {
  dispatch({ type: STOP_DRAG });
};

export const triggerOnEvent = (fn, param) => (_) => fn(param);
