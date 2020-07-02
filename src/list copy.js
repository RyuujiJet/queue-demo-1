const createList = value => {
  return createNode(value); // 如果只有一个节点，下一个节点为空
};
const appendList = (list, value) => {
  const node = createNode(value);
  let x = list;
  while(x.next){
    x = x.next
  }
  x.next = node;
  return node;
};

const removeFromList = (list, node) => {
  let x = list
  let p = null
  while(x !== node){
    p = x // 上一个节点
    x = x.next
  }
  // console.log(p === null || p === x的上一个节点) // 如果被删的节点是第一个，p为空；
  // console.log(x === node || x === null) // x的值有两种情况，一种等于被删节点，一种为null，即该节点不存在
  p.next = x.next
//   if(list === node) {
//     // 如果删除的是第一个节点
//     // list指向第2个节点
//     list = node.next;
//   } else{
//     // 如果删除的是第二个节点
//     // 第1个节点.next = 第3个节点
//     if(list.next === node){
//       list.next = node.next
//     } else{
//       // 如果删除的是第三个节点
//       // 第2个节点.next = 第4个节点
//       if(list.next.next === node){
//         list.next.next = node.next
//       } else{  
//         // 如果删除的是第四个节点
//         // 第3个节点.next = 第5个节点
//         if(list.next.next.next === node){
//           list.next.next.next = node.next
//         }
//       }
//     }
//   }
};

const createNode = value => {
  return {
    data: value,
    next: null
  };
};

const list = createList(10)
const node2 = appendList(list, 20)
const node3 = appendList(list, 30)
const node4 = appendList(list, 40)
console.log('list')
console.log(list)
removeFromList(list, node3)