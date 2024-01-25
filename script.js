

// remove duplicate values and put it in another array
var student=["sakthi","sakthi",1,2,5,5,4,3,3,2,4,1]

console.log(student)

function duplicateElements(data)
{
    return data.filter((ele,index)=>data.indexOf(ele)==index)
}

console.log(duplicateElements(student))


//  using set function
//  console.log([...new Set(student)])







































