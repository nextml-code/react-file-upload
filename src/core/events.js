import { START_DRAG, STOP_DRAG } from "../store/actionTypes";

export const handleOnDragEnter = ({ dispatch }) => {
  dispatch({ type: START_DRAG });
};

export const handleOnDragExit = ({ dispatch }) => {
  dispatch({ type: STOP_DRAG });
};

export const preventEventDefault = (event) => event.preventDefault();

export const triggerOnEvent = (func, param) => (_) => func(param);
