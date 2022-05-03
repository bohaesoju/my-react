// import { render } from './core/render.js';
// import { useState } from './core/render.js';

// render();

let currentStateKey = 0; // useState가 실행 된 횟수
const hookStates = []; // state를 보관할 배열
function useState(initState) {
  // initState로 초기값 설정
  const key = currentStateKey;
  if (hookStates.length === key) {
    hookStates.push(initState);
  }

  // state 할당
  const state = hookStates[key];
  const setState = (newState) => {
    // state를 직접 수정하는 것이 아닌, states 내부의 값을 수정
    hookStates[key] = newState;
    render();
  }
  currentStateKey += 1;
  return [ state, setState ];
}

function Espresso () {
  const [espresso, setEspresso] = useState(2000);

  window.addEspresso = () => setEspresso(espresso + 2000);

  return `
    <div>
      <button onclick="addEspresso()">에스프레소 추가</button>
      <strong>금액: ${espresso} </strong>
    </div>
  `;
}

function Americano () {
  const [americano, setAmericano] = useState(3000);

  window.addAmericano = () => setAmericano(americano + 3000);

  return `
    <div>
      <button onclick="addAmericano()">아메리카노 추가</button>
      <strong>금액: ${americano}</strong>
    </div>
  `;
}

const render = () => {
  const $root = document.querySelector('#root');
  $root.innerHTML = `
    <div>
      ${Espresso()}
      ${Americano()}
    </div>
  `;
  currentStateKey = 0;
}

render();