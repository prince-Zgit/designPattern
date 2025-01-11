class calculator{
    // overload signature
    add(a:number, b:number):number;
    add(a:string, b:string):string;

    // implement of the overload method
    add(a:any, b:any){
        if(typeof a === 'number' && typeof b === 'number'){
            return a+b;
        }else{
            return a + b;
        }
    }
}


const calc = new calculator();
console.log(calc.add(1,2));
console.log(calc.add('hello','2'));