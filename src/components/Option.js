import { useState } from '../core/useState';

// export function Option() {
//   const [option, setOption] = useState(1000);

//   window.additional = () => setOption(option + 1000);

//   return `
//     <div>
//       <strong>option: 금액: ${option} </strong>
//       <button onclick="additional()">옵션 추가</button>
//     </div>
//     `;
// }

export function Option () {
  const [cat, setCat] = useState('고양이');

  window.meow = () => setCat(cat + ' 야옹!');

  return `
    <div>
      <strong>${cat}</strong>
      <button onclick="meow()">고양이의 울음소리</button>
    </div>
  `;
}