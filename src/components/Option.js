import { useState } from '../core/useState';

export function Option() {
  const [option, setOption] = useState(1000);

  window.additional = () => setOption(option + 1000);

  return `
    <div>
      <strong>option: 금액: ${option} </strong>
      <button onclick="additional()">옵션 추가</button>
    </div>
    `;
}