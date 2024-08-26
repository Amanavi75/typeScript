const score1:Array<number> = []

const names:Array<string> = []



function identity1 (val:boolean| number):number|boolean{
    return val
}

function identity2 (val:any):any{
    return val
}

function identity3<t> (val:t):t{
    return val
}

function identityr<Type> (val:Type):Type{
    return val
}
