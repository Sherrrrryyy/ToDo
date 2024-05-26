function addText() {

    var parentInput = document.getElementById("parentInput")

    if (parentInput.value.length < 3) {
        alert("Enter your task")
        return
    }

    var li = document.createElement("li")
    li.innerHTML = parentInput.value
    listOfTask.append(li)
    parentInput.value = ""



    var editBtn = document.createElement("button")
    editBtn.innerHTML = "Edit"
    li.append(editBtn)
    var delBtn = document.createElement("button")
    delBtn.innerHTML = "Delete"
    delBtn.setAttribute("onclick", "delOnlyOne(this)")
    li.append(delBtn)

    

}

function delAllText() {
    var listOfTask = document.getElementById("listOfTask")
    console.log("listOfTask ", listOfTask)
    listOfTask.innerHTML = ""

}


function delOnlyOne(elem) {
    console.log("elem", elem.parentNode)
    elem.parentNode.remove()
}