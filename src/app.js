/* @jsx createElement */

import { createElement, renderRealDOM } from './react';
// import { createElement, renderRealDOM, diffingUpdate } from './react';

const previousState = [
  { title: '에스프레소' },
  { title: '아메리카노' },
];

const CoffeeList = (state) => (
  <ul>
    { state.map(({ title }) => (
      <li>{ title }</li>
    )) }
    </ul>
)

const $root = document.querySelector('#root');
$root.appendChild(renderRealDOM(CoffeeList(previousState)));

// const nextState = [
//   { title: '에스프레소' },
//   { title: '아메리카노 샷추가' },
// ];


// const previousNode = CoffeeList(previousState);
// const nextNode = CoffeeList(nextState);

// const $root = document.querySelector('#root');
// $root.appendChild(renderRealDOM(CoffeeList(previousState)));
// $root.appendChild(renderRealDOM(previousNode));

// setTimeout(() => 
//   diffingUpdate($root, nextNode, previousNode),
//   2000
// );