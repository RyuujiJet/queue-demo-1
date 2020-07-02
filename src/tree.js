const createTree = (value) => {
  return {
    data: value,
    children: null,
    parent: null
  }
}
const addChild = (node, value) => {
  const newNode = {
    data: value,
    children: null,
    parent: node
  }
  node.children = node.children || [] // 如果node.children(要插入节点的子节点)不为空，就等于自己；若为空，则给一个空数组
  node.children.push(newNode)
  return newNode
}
const travel = (tree, fn) => {
  fn(tree)
  if(!tree.children){
    return
  }
  for(let i = 0; i < tree.children.length; i++){
    travel(tree.children[i], fn)
  }
}

const find = (tree, node) => {
  if(tree === node) {
    return tree
  } else if(tree.children){
    for(let i = 0; i < tree.children.length; i++){
      const result = find(tree.children[i], node)
      if(result) {return result}
    }
    return undefined
  }else {
    return undefined
  }
}

const removeNode = (tree, node) => {
  const siblings = node.parent.children
  let index = 0
  for(let i = 0; i < siblings.length; i++){
    if(siblings[i] === node){
      index = i
    }
  }
  siblings.splice(index, 1)
}

const tree = createTree(10)
const node2 = addChild(tree,101)
const node3 = addChild(tree,102)
addChild(tree,103)
const node5 = addChild(tree,104)
addChild(node2, 1011)
addChild(node2, 1012)
addChild(node2, 1013)
addChild(node2, 1014)
console.log(tree)

const fn = node => {
  console.log(node.data)
}
travel(tree, fn)

removeNode(tree, node5)
console.log(tree)