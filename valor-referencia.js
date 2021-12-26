let a=10;
let b=a;

a=30;
b=40;

console.log({a,b});

//pasar por referencia

let felipe={nombre:"felipe"};

let luis={...felipe};

luis.nombre="Navarro";

console.log(felipe,luis);



//Parámetro rest

 const frutas=["Mango", "Banano","Papaya"];

 const otrasFrutas=[...frutas];

 otrasFrutas.push("Manzana");

 console.table({frutas,otrasFrutas});
