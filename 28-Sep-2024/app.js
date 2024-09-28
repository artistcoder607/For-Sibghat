// 1. by Refrence or by Value   
// 2. Aik object banaya hai neeche person1 ke naam se


// var person1 = {
//     name: "Shahzaib",
//     age: 17,
//     course: "Web Development",
//     batch: "Batch 12",
//     languages: ["html", "CSS", "JavaScript", "React", "Nodejs"]
// }


// 3. aik person1 naam ka object banaya hia jis mai os ki details likh di
// 4. ab yehi property aik person2 naam ka variable banake os ko person1 dede ge
// like this 


// var person2 = person1;
// console.log (person2) // ab only person2 ka naam or age change karni hai tu kaise karenge
// person2.name = "sibghat";
// person2.age = 16;


// 5. ab dekh jab apanne person2 ko tera naam or age di tu person1 ko bhi wohi milgya hoga na ab agar sirf person2 ka change karna ho tu wo kaise karenge


// 6. os ke liye aik "spread" operator hota hai 
// 7. jis ko aise likhte hai -->> ...person2 neeche dekh samajh aajaye ga


// (Note) jab bhi spraed operator lagate hai tu agar array ke liye lagaye tu [] square bracket lagate hai or agar object ke lagaye tu {} curly bracket lagate hai


// var person1 = {
//     name: "Shahzaib",
//     age: 17,
//     course: "Web Development",
//     batch: "Batch 12",
//     languages: ["html", "CSS", "JavaScript", "React", "Nodejs"]
// }


// 8. ab agar hum change karange na tu sirf person2 change hoga 
// var person2 = { ...person1 };
// person2.name = "sibghat";
// person2.age = 16;


// console.log(person1);
// console.log(person2);

// spread operator samajh aa gya 



// IF AND ELSE
// 1. ab aik condition likhte hai 

// var broAsk = prompt("Bhai kya khayega");
// if (broAsk == "biryani") {
// alert ("ok bhai biryani le ke aao ga")
// } else {
//     alert (`bhai ${broAsk} nhi mil rha mai aise hi aarha hoo`)
// }


// 2. if else aise likhte hai na ab is ka short method hai jise "Ternary Operator" kehte hai

// var broAsk = prompt("Bhai kya khayega");
// 3. ternary operator mai pehle 
// condition likhte hai phir 
// ? question mark lagate hai phir
// pehli execution likhte hai phir
// : colon lagate hai phir
// doosri execution likhte hai 
// like this


// Condition ? Execution1 : Execution2 ;

// broAsk == "biryani" ? alert ("ok bhai biryani le ke aao ga") : alert (`bhai ${broAsk} nhi mil rha mai aise hi aarha hoo`) ;


// Ok bhai samajh aagya 