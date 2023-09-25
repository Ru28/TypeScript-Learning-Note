// let sales: number =123_456_789;
// let course: string = 'TypeScript';
// let is_published: boolean =true;
// let level;
// level =1;
// level='a';

// function render(document: any){
//     console.log(document)
// }

// let numbers:number[]=[];

// numbers.forEach(n=>n.toFixed(2))
// let user: [number,string,number]=[1,'Rupesh',2]
// user.push(1);

// const small = 1;
// const medium = 2;
// const large = 3; 

// const enum Size {small=1,Medium,Large}
// let mySize: Size = Size.Medium;
// console.log(mySize);

// function calculateTax(income: number,taxYear:number=2022){
//     if( taxYear< 2022)
//        return income*1.2;

//     return income*1.3;
// }

// calculateTax(10000);

// type Employee ={
//     readonly id: number,
//     name:string,
//     retire: (date:Date)=>void;
// }

// let employee: Employee ={
//     id:1,
//     name:'Rupesh',
//     retire: (date:Date)=>{
//         console.log(date)
//     }
// };

// employee.name='Rupesh';

// function kgToLbs(weight: number | string):number{
//     if(typeof weight==='number'){
//         return weight * 2.2;
//     }
//     else{
//         return parseInt(weight)*2.2;
//     }
// }

// kgToLbs(10);
// kgToLbs('10kg');

// type Draggable={
//     drag:()=>void
// };

// type Resizable={
//     resize:()=>void
// };

// type UIWidget = Draggable & Resizable;

// let textBox: UIWidget={
//     drag:()=>{},
//     resize:()=>{}
// }

// Literal (exact. specific) //commet
// type Quantity=50 | 100;
// let quantity:50|100=100;

// type Metric = 'cm' | 'inch';

// function greet(name: string | null | undefined){
//     if(name)
//     console.log(name.toUpperCase());
//     else
//     console.log('Hola!');
// }

// greet(null)


type Customer={
    birthday:Date
}
function getCustomer(id: number): Customer | null | undefined{
    return id===0 ? null:{birthday: new Date()};
}

let customer=getCustomer(1);
// Optional property access operator
console.log(customer?.birthday?.getFullYear());


// Optional element access operator
// customers?.[0]

// Optional call
let log: any=null;
log?.('a');

