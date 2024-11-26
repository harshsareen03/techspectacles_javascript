// 1)global scope
let global="hello"

function func(){
    
    console.log(global)
}
func()


// 2)function scope
function localscope(){
    let ls='local scope'
    console.log(ls)
}
localscope()



// 3)block scope

{
    let bs='block scope'
    console.log(bs)
}

console.log(bs)