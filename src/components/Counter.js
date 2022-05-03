import { useState } from '../core/useState';

// export function Counter() {
//   const [count, setCount] = useState(1);

//   window.increment = () => setCount(count + 1);

//   return `
//     <div>
//       <strong>count: 카운트: ${count} </strong>
//       <button onclick="increment()">증가</button>
//     </div>
//     `;
// }

export function Counter () {
  const [count, setCount] = useState(1);

  window.increment = () => setCount(count + 1);

  return `
    <div>
      <strong>count: ${count} </strong>
      <button onclick="increment()">증가</button>
    </div>
  `;
}