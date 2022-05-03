import { render } from './render';

let hookState = undefined;
export function useState (initState) {
  if (hookState === undefined) hookState = initState;
  const setState = (nextState) => {
    hookState = nextState;
    render();
  }
  return [ hookState, setState ];
 }

