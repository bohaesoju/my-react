import { Counter } from '../components/Counter';

export function render () {
  const $root = document.querySelector('#root');
  $root.innerHTML = Counter();
}
