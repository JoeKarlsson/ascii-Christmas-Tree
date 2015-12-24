// var treeDiv = document.getElementById('tree');

// // h=10,p=console.log,m='0',a=Array(h-1),s=a.join(' ');p(s+'*\n'+s+m);while(h-->2){m+='00';a.pop();p(a.join(' ')+m);}
// //

// /**
//  * Long Form Christmas Tree Function
//  * @param  {[num]} height of christmas tree.
//  */

// // function makeTree(height) {
// //   var i = 0;
// //   var h = height;
// //   var a = new Array(h);
// //   a[0] = a.join(' ');
// //   var b = a.join('000');
// //   a[0] += '*';
// //   while ( i <= h ) {
// //     var treeLine = document.createElement('p');
// //     var newLine = document.createElement('br');
// //     i++
// //     a[i] = b.substr(i, h + i);
// //     treeLine.innerHTML = a[i];
// //     treeLine.appendChild(newLine);
// //     treeDiv.appendChild(treeLine);
// //   }
// //   // a.push('| |');
// //   var tree = a.join('\n');
// //   // treeDiv.appendChild(treeLine);
// //   console.log(tree)
// // }

// // makeTree(9);
// function makeTree(height) {
//   var a = [];
//   var line = '0'
//   a.push('*');
//   a.push(line);
//   for (var i = 2; i < height; i++) {
//     line+='00';
//     a.push(line);
//   }
//   var tree = a.join('\n');
//   console.log(tree)
// }

// makeTree(9);

