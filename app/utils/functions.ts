// export function handleInitialNodes() {

//     //* FIRST LEVEL; Render the current nodes
//     for (let i = 0; i < dramaticElements.length; i++) {

//         y += 100
//         initialNodes.push({ id: `id-${i}`, type: 'CustomNode', position: { x, y }, data: { label: dramaticElements[i].label, pos: i } })

//         //* Amount of children in the first level
//         const firstLevelChildren = dramaticElements[i].children.length
//         let secondLevelChildren = 0

//         if (firstLevelChildren > 0 && firstLevelChildren % 2 !== 0) {

//             //! SECOND LEVEL: Create the nodes and edges for the children of current node.
//             for (let r = 0; r < dramaticElements[i].children.length; r++) {

//                 initialEdges.push({
//                     id: `e${i}-${r + 1}`, source: `id-${i}`, targetHandle: 'b', target: `id-${r + 1}`
//                 })

//                 const padding = 60
//                 const halfNode = 30

//                 //* Calculate the xPosition of the first node by substracting half node to the middle position, then substracting half of the nodes minus one (the one that goes in the middle) to the resulting value of the first operation, and finally substracting the space between the nodes (60px * the amount of nodes before the middle minus one).
//                 const initialX = (x - halfNode) - (nodeWidth * (firstLevelChildren - 1) / 2) - (padding * (firstLevelChildren - 2) / 2) + ((nodeWidth + padding) * r)
//                 const hasChildren = dramaticElements[i].children[r].children.length > 0

//                 if (hasChildren) {
//                     initialNodes.push({ id: `id-${r + 1}`, type: 'CustomNode', position: { x: initialX, y: y + 200 }, data: { label: dramaticElements[i].children[r].label, pos: r + 1, orientation: 'horizontal', hasChildren: true } })
//                 } else {
//                     initialNodes.push({ id: `id-${r + 1}`, type: 'CustomNode', position: { x: initialX, y: y + 200 }, data: { label: dramaticElements[i].children[r].label, pos: r + 1, orientation: 'horizontal', hasChildren: false } })
//                 }

//                 if (r !== dramaticElements[i].children.length - 1) {
//                     initialEdges.push({
//                         id: `e${r + 1}-${r + 2}`, source: `id-${r + 1}`, target: `id-${r + 2}`
//                     })
//                 }

//                 const secondGridCols = dramaticElements[i].children[r].children.length
//                 secondLevelChildren += secondGridCols

//                 //* THIRD LEVEL; If current children of current node has children, create children nodes and edges
//                 if (secondGridCols > 0) {

//                     //console.log(secondLevelChildren)

//                     for (let j = 0; j < secondGridCols; j++) {

//                         initialNodes.push({ id: `id-${firstLevelChildren + r + 1}`, type: 'CustomNode', position: { x: initialX, y: y + 400 }, data: { label: dramaticElements[i].children[r].children[j].label, pos: firstLevelChildren + r + 1, orientation: 'horizontal' } })

//                         initialEdges.push({
//                             id: `e${r + 1}-${firstLevelChildren + r + 1}`, source: `id-${r + 1}`, sourceHandle: 'd', target: `id-${firstLevelChildren + r + 1}`, targetHandle: 'b'
//                         })

//                     }

//                 }

//             }
//         }

//     }
// }