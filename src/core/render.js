import { Counter } from '../components/Counter';
import { Option } from '../components/Option';

export function render () {
  const $root = document.querySelector('#root');
  $root.innerHTML = `
    ${Counter()}
    ${Option()}
  `;
}
