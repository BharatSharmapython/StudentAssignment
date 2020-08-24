arr =["rohit","raj"]
alert("Welcome to student data program!!")
var res = prompt("Would you like to add, remove, display or quit?")
while(res!="quit"){
    if(res=="add"){
        var name=prompt("enter name to add")
        arr.push(name)
        alert("name added successfully")
    }
    else if(res=="remove"){
        var el =prompt("enter the name you want to delete")
        ind = arr.indexOf(el)
        arr.splice(ind,1)
    }
    else if(res=="display"){
        alert("The name of students are "+arr)
    }
    else{
        alert("wrong input")
    }
    res = prompt("Would you like to add, remove, display or quit?")
}
alert("Thank You For Visiting!! Bye")