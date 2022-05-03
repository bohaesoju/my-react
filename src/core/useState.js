import { Counter } from '../components/Counter';
import { Option } from '../components/Option';

// let currentStateKey = 0;
// let hookState = [];
// // let hookState = undefined;
// export function useState (initState) {
//   const key = currentStateKey;
//   // initState 초기값 설정
//   if (hookState.length === key) {
//     hookState.push(initState);
//   }

//   // state 할당
//   console.log('hookState[key]', hookState[key]);
//   const state = hookState[key];
//   // console.log('state', state);
//   const setState = (nextState) => {
//     // 해당하는 hookState 의 배열에 변경상태를 할당
//     hookState[key] = nextState;
//     render();
//   }
//   // useState 가 실행될때마다 currentStateKey 값을 추가해준다.
//   currentStateKey += 1;
//   // const setState = (nextState) => {
//   //   hookState = nextState;
//   //   render();
//   // }
//   return [ state, setState ];
//   // return [ hookState, setState ];
//  }

//  function render () {
//   const $root = document.querySelector('#root');
//   $root.innerHTML = `
//     ${Counter()}
//     ${Option()}
//   `;
//   currentStateKey = 0;
// }

let currentStateKey = 0; // useState가 실행 된 횟수
const states = []; // state를 보관할 배열
export function useState(initState) {
  // initState로 초기값 설정
  const key = currentStateKey;
  if (states.length === key) {
    states.push(initState);
  }

  // state 할당
  const state = states[key];
  const setState = (newState) => {
    // state를 직접 수정하는 것이 아닌, states 내부의 값을 수정
    states[key] = newState;
    render();
  }
  currentStateKey += 1;
  return [ state, setState ];
}

const render = () => {
  const $app = document.querySelector('#root');
  $app.innerHTML = `
    <div>
      ${Counter()}
      ${Option()}
    </div>
  `;
  currentStateKey = 0;
}

//  export function render () {
//   const $root = document.querySelector('#root');
//   $root.innerHTML = `
//     ${Counter()}
//     ${Option()}
//   `;
//   currentStateKey = 0;
// }