function checkdivisiblebytwo(data:number):boolean{
    if ( data % 2  == 0 ) {
        return true;  
    } 
    else {
        return false;
    }
}      
function checkdivisiblebyoneone(data:number):boolean{
    if ( data % 11  == 0 ) {
        return true;
    } 
    else {
        return false;
    } 
}
function myTest(receivednumber: number):string {
if (receivednumber <=0 ) 
{
    return "number should be a positive integer number"
}
else 
{
    if (checkdivisiblebytwo(receivednumber) && checkdivisiblebyoneone(receivednumber)) {
        return 'candybar';
    }
    else if (!checkdivisiblebytwo(receivednumber) && checkdivisiblebyoneone(receivednumber)) {
        return 'bar';
    }
    else if (checkdivisiblebytwo(receivednumber) && !checkdivisiblebyoneone(receivednumber)) {
        return 'candy';
    }
    else if (!checkdivisiblebytwo(receivednumber) && !checkdivisiblebyoneone(receivednumber)) {
        const vanuenumber: string = receivednumber.toString();
        return vanuenumber;
    }
    return ""
}
}
const ll:string = myTest(23)
console.log(ll);
