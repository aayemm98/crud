const $ = document.querySelector.bind(document)
const inputFirst = $(".input-top")
const inputSecond = $(".input-tops")
const btn = $(".com-btn")
const ul = $("ul")



function addTask() {
    const tasks = JSON.parse(localStorage.getItem("task")) || []
    ul.innerHTML = ""
    tasks.map((el) => {
        let newList = `<li class="list-group-item d-flex justify-content-between align-items-center">
       <span class="d-flex align-items-center jusify-content-between">
        <div class="radius">${el.name[0]}${el.surname[0]}
       </div>
       <span class="${el.isCompleted ? "bottom":""}">   name: ${el.name}  surname: ${el.surname}
       </span>
       ..
       </span> 
       <button class="add-btn btn btn-danger">delete</button>
       </li>`
        ul.innerHTML += newList

    })

    delTask()
    topTask()


}
addTask()

btn.addEventListener("click", () => {
    if (inputFirst.value !== "" && inputSecond.value !== "") {
        let tasks = JSON.parse(localStorage.getItem("task")) || []
        const newTask = {
            id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
            name: inputFirst.value,
            surname: inputSecond.value,
            isCompleted: false
        }
        tasks = [...tasks, newTask]
        localStorage.setItem("task", JSON.stringify(tasks))
        addTask()
    }


})

function delTask()  {
    let tasks = JSON.parse(localStorage.getItem("task")) || []
    const buttons = document.querySelectorAll(".add-btn")
    buttons.forEach((btn, index) => {
        btn.addEventListener("click", () => {
            tasks = tasks.filter((el  , idx) => {
                return index !== idx
            })
            localStorage.setItem("task", JSON.stringify(tasks))
            addTask()
        })
    })

}

delTask()

function topTask()  {
    let tasks = JSON.parse(localStorage.getItem("task")) || []
    const buttons = document.querySelectorAll(".add-btn")
    buttons.forEach((btn, index) => {
        btn.addEventListener("click", () => {
            tasks = tasks.filter((el  , idx) => {
                return index !== idx
            })
            localStorage.setItem("task", JSON.stringify(tasks))
            addTask()
        })
    })

}

inputFirst.addEventListener('keydown',(e)=>{
    if (e.key === 'Enter'){
        inputSecond.focus()
    }
})
inputSecond.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        btn.focus()
    }
})
