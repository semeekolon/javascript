let a = [1, 2, 5, 2, 1, 8];

// one way
let b =[];

let len = a.length;

for(let i = 0; i <len; i++){
  if(b.indexOf(a[i]) === -1){
    b.push(a[i]);
  }

}
console.log(b);

// 2nd way
obj = {};

for(let i of a){
  obj[i] = true; 
}

let c = Object.keys(obj);
console.log(c);