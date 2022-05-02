
// const hooks = [];
// let currentComponent = 0;

// export class Component {
//   constructor(props) {
//     //인스턴스 객체에 Props 주입을 해주어야 하므로 this
//     this.props = props;
//   }
// }

// export function createDOM(node) {
//   if (typeof node === 'string') {
//     return document.createTextNode(node);
//   }

//   const element = document.createElement(node.tag);

//   Object.entries(node.props)
//     .forEach(([name, value]) => element.setAttribute(name, value));

//   node.children
//     .map(createDOM)
//     .forEach(element.appendChild.bind(element));

//   return element;
// }

// function makeProps(props, children) {
//   return {
//     ...props,
//         children: children.length === 1 ? children[0] : children,
//   }
// }

// function useState(initValue) {
//   //값을 저장해야 하지만 저장은 이 안에다가 하면 안된다. 휘발성
//   let position = currentComponent - 1;
//   if (!hooks[currentComponent]) {
//     hooks[currentComponent] = initValue;
//   }
//   const modifier = nextValue => {
//     hooks[currentComponent] = nextValue;
//   };
//   return [ hooks[currentComponent], modifier]
// }

// export function createElement(tag, props, ...children) {
//   props = props || {};
  
//   if(typeof tag === 'function') {
//     //실제 react 는 고유의 symbol 로 확인한다
//     if (tag.prototype instanceof Component) {
//       const instance = new tag(makeProps(props, children))
//       return instance.render();
//     }

//     hooks[currentComponent] = null;
//     currentComponent++;

//     if (children.length > 0) {
//       return tag(makeProps(props, children));
//     } else {
//       return tag(props);
//     }
//   } else {
//     return { tag, props, children }
//   }
// }

// export function render(vdom, container) {
//   container.appendChild(createDOM(vdom));  
// }

// //즉시 실행 함수로 내부함수를 렌더로 넣어주면 prevDom 이 바깥쪽에선 참조할수 없다.
// export const render = (function() {
//   let prevDom = null;
//   return function(vdom, container) {
//     if (prevDom === null) {
//       prevDom = vdom;
//     }
//     // diff 객체 수준 비교
//     container.appendChild(createDOM(vdom)); 
//   }
// })();