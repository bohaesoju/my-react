/* @jsx createElement */

import { createElement, renderRealDOM, diffingUpdate } from './react';

const previousState = [
  { title: '첫번째 제목 입니다' },
  { title: '두번째 제목 입니다' },
];

const nextState = [
  { title: '첫번째 제목 입니다' },
  { title: '두번째 제목 입니다 update' },
];

const render = (state) => (
  <ul>
    { state.map(({ title }) => (
      <li>{ title }</li>
    )) }
    </ul>
)

const previousNode = render(previousState);
const nextNode = render(nextState);

const $root = document.createElement('div');

document.body.appendChild($root);

$root.appendChild(renderRealDOM(previousNode));

setTimeout(() => 
  diffingUpdate($root, nextNode, previousNode),
  2000
); 