let arr=[8,3,5,6,7,80]
// push (pichhese add hoga )
           arr.push(10);           
           console.log(arr);
// pop (pichhese remu hoga / jiti bar pop kikhe ge utani bar index me se remu hoga)
           arr.pop()
           arr.pop()
           console.log(arr);
// shif (aagese remu hoga)
           arr.shift()
           console.log(arr);
// ...................................................................................
// sort (step:1)
arr.sort()
console.log(arr);
// sort (step:1.1)
arr.sort((a,b)=>a-b);
console.log(arr);
// sort (step:1.2)
arr.sort((a,b)=>b-a);
console.log(arr);
// reverse
arr.reverse()
console.log(arr);
// splice (bichme se remu hoga)
// (1 index me se 1 remu hoga)
arr.splice(1,1)
console.log(arr);