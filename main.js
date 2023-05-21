let mainbtn = document.querySelector('p button')
let section = document.querySelector('.sec')
let nameInput = document.querySelector('.form-control')
let overlayPopup = document.querySelector(".overlay-popup")
let errorOverlayPopup = document.querySelector(".error-overlay-popup")
let welcoming = document.querySelector(".overlay-popup .popup h3")
let goAheadBtn = document.querySelector(".overlay-popup .popup button")
let toDoPage = document.querySelector(".to-do-page")
let tasksHeader = document.querySelector(".tasks h2")
let listIcon = document.querySelector(".tasks .title .iconn")
let sideBar = document.querySelector(".side-bar")
let newTaskBtn = document.querySelector(".new-task")
let writeNewDiv = document.querySelector(".write-new")
let newTaskBox = document.querySelector(".task-box")
let userSpan = document.querySelector(".user")
let select = document.querySelector("select")
let maleImg = document.querySelector(".male")
let addTask = document.querySelector(".add")
let favTask = document.querySelector(".fav")
let addingInput = document.querySelector(".task-box input")
let added = document.querySelector(".added")
let tasksNumber = document.querySelector(".info .name p")

console.log(added)
console.log(addingInput)
console.log(favTask)
console.log(listIcon)
console.log(sideBar)
let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
let Days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]




mainbtn.addEventListener("click" , function (){
    if (nameInput.value.length > 0){
     section.style.display = "none"
     userSpan.innerHTML = nameInput.value[0].toUpperCase() + nameInput.value.slice(1)
     overlayPopup.style.display = "block"
     if (select.value === "female"){
        maleImg.innerHTML = `<img src="css/female.png" width="100px" alt="">`
    }
} 
    else {
        errorOverlayPopup.style.display = "block"
}

errorOverlayPopup.addEventListener("click" , function(){
    errorOverlayPopup.style.display = "none"
})
})

goAheadBtn.addEventListener("click", function(){
    overlayPopup.style.display = "none"
    toDoPage.style.display = "flex"
    tasksHeader.innerHTML = `${nameInput.value[0].toUpperCase() + nameInput.value.slice(1)}'s TODO`
})


function active(){
    sideBar.classList.toggle("active")
}
listIcon.addEventListener("click" , active);

document.addEventListener('click', (e) => {
    let icon = e.target.closest('.iconn');
    // icon.classList.toggle('active');
    // console.log(icon)

    let nav = e.target.closest('.side-bar')

    if (!nav && !icon) sideBar.classList.remove("active")
    // if (e.target === sideBar && e.target !== icon) return;
    // sideBar.classList.remove("active")

})

function closingTaskBox(){
    writeNewDiv.style.width = "0%"
    writeNewDiv.style.height = "0%"
    writeNewDiv.style.opacity = "0"
    writeNewDiv.style.transform = "translateY(0px)"
    newTaskBox.style.padding = "0px"
}

newTaskBtn.addEventListener("click" , function(){
    writeNewDiv.style.width = "100%"
    writeNewDiv.style.height = "100%"
    writeNewDiv.style.opacity = "1"
    newTaskBox.style.padding = "80px"
})


document.addEventListener("click" , (e) => {
    let writeNew = e.target.closest(".wrtie-new")
    let newTask = e.target.closest(".new-task")
    let taskBox = e.target.closest(".task-box")
    if (!newTask && !taskBox) {
       closingTaskBox()
    }
})

addTask.addEventListener("click" , function(){
    if (addingInput.value.length >= 1){
       closingTaskBox()
    let adddedContent = document.createElement("div")
    adddedContent.classList.add("added-content")
    adddedContent.classList.add('go-progress')
   let content = document.createElement("input")
   content.type = "checkbox"
   content.id = "content"
   content.className = "checkbox__input"
   let inner = document.createElement("span")
   inner.className = "checkbox__inner"
   let label = document.createElement("label")
   label.appendChild(document.createTextNode(addingInput.value))
   let empty = document.createElement("div")
   empty.classList.add('enable')
   adddedContent.appendChild(empty)
   checkAndLabel = document.createElement("label")
   checkAndLabel.className = "check-and-label"
   checkAndLabel.appendChild(content)
    checkAndLabel.appendChild(inner)
   checkAndLabel.appendChild(label)
    adddedContent.appendChild(checkAndLabel)
    added.appendChild(adddedContent)
    let rightDiv = document.createElement("div")
    rightDiv.className = 'right-div'
    let moreDiv = document.createElement("div")
    moreDiv.className = "more-div"
    let more = document.createElement('i')
    rightDiv.appendChild(moreDiv)
    moreDiv.appendChild(more)
    more.className = "fa-solid fa-ellipsis-vertical"
    more.classList.add("more-icon")
    adddedContent.appendChild(rightDiv)
    let breaker = document.createElement("div")
    breaker.style.flexBasis = "100%"
    breaker.style.height = "0%"
    adddedContent.appendChild(breaker)
    let spanTime = document.createElement("span")
    spanTime.className = "span-time"
    let Hours = new Date().getHours()
let min = new Date().getMinutes()
var suffix = "AM"; //cunverting 24Hours to 12Hours with AM & PM suffix
	if (Hours >= 12) {
		suffix = "PM";
		Hours = Hours - 12;
	}
	if (Hours === 0) {
		Hours = 12;
	}
    	if (Hours < 10) {
		Hours = "0" + Hours;
	}

    	if (min < 10) {
		min = "0" + min;
	}
    let theDate = `${Hours}:${min} ${suffix} - ${Days[new Date().getDay()]}  ${new Date().getDate()}-${months[new Date().getMonth()]}-${new Date().getFullYear()}`
    spanTime.appendChild(document.createTextNode(theDate))
    let favSpan = document.createElement('i')
    spanTime.appendChild(favSpan)
    adddedContent.appendChild(spanTime)
    addingInput.value = ""    
    if (added.children.length <= 1){
        tasksNumber.innerHTML =  `Today you have ${added.children.length} task`
    } else {
        tasksNumber.innerHTML =  `Today you have ${added.children.length} tasks`
    }
    inner.addEventListener("click" , function(){
        empty.classList.toggle('disable')
        empty.classList.toggle('enable')
        label.classList.toggle('decoration')
    // adddedContent.classList.toggle('go-progress')
    // adddedContent.classList.toggle('go-completed')
    if (empty.classList.contains("enable")){
        adddedContent.classList.add('go-progress')
        adddedContent.classList.remove('go-completed')
    }
    if (empty.classList.contains("disable")){
        adddedContent.classList.add('go-completed')
        adddedContent.classList.remove('go-progress')
    }
    counting()
})


    let moreList = document.createElement("ul")
    moreList.className = "more-list"
    let edit = document.createElement("li")
    edit.className = "edit"
    edit.innerHTML = "Edit"
    let favo = document.createElement("li")
    favo.className = "favo"
    favo.innerHTML = "Favourite"
    favSpan.className = 'fa-solid fa-star'
    favSpan.classList.add('not-exist')
    // favSpan.style.display = "none"
    favSpan.style.color = "#ffa42b"
    favSpan.style.marginLeft = "10px"
    

    let del = document.createElement("li")
    del.className= "del"
    del.innerHTML = "Delete"
    moreList.appendChild(edit)
    moreList.appendChild(favo)
    moreList.appendChild(del)
    moreDiv.appendChild(moreList)


moreDiv.addEventListener('click' , function(){
 moreList.classList.toggle("visiblee")
 document.addEventListener('click', function(e){
    let moore = e.target.closest('.more-list');
    let moree = e.target.closest('.more-div')
    let faa = e.target.closest('.favo')
    if (!moree ){
        moreList.classList.remove("visiblee")
    }

 })
}

)
let saveBtn = document.createElement('button')
rightDiv.appendChild(saveBtn)
saveBtn.style.display= "none"
edit.addEventListener('click', function(){
    console.log(this.parentElement.parentElement.parentElement.previousSibling.lastChild)
    this.parentElement.parentElement.parentElement.previousSibling.lastChild.contentEditable = "true"
    this.parentElement.parentElement.parentElement.previousSibling.lastChild.focus();
    saveBtn.className = "save-btn"
    saveBtn.innerHTML = "Save"
    saveBtn.style.display= "block"

    saveBtn.addEventListener('click', function(){
        console.log(this.parentElement.previousSibling.lastChild)
        this.parentElement.previousSibling.lastChild.contentEditable = "false"
        this.style.display= "none"
    })
})



//parent - previous sibling ele - previous sibling ele - first child -first child - next ele sibling -first child - next ele
//parent - parent - parent - next ele - next ele -first ele 

favSpan.style.visibility = "hidden"
// favSpan.style.display = "none"
favo.addEventListener('click', function(){
    
    let myFav = this.parentElement.parentElement.parentElement.nextElementSibling.nextElementSibling.firstChild.nextSibling
    this.parentElement.parentElement.parentElement.parentElement.classList.toggle('go-favourite')
        // favSpan2.style.display= "inline-block"

        myFav.classList.toggle('exist')
    if (myFav.classList.contains('exist')){
        favo.innerHTML = "Unfavourite"
    } else {favo.innerHTML = "Favourite"}
    console.log(favSpan)
    console.log(this)
    counting()
    // spanTime.innerHTML += `<i class="fa-solid fa-star" style="color: #ffa42b"></i>`
})

del.addEventListener('click', function(){
    this.parentElement.parentElement.parentElement.parentElement.style.display = "none"
    this.parentElement.parentElement.parentElement.parentElement.classList.add('go-trash')
    this.parentElement.parentElement.parentElement.parentElement.classList.remove('go-progress')
    counting()
})



let all = document.querySelector(".all")
all.addEventListener('click', function(){
    adddedContent.style.display = 'flex'
    if (adddedContent.classList.contains("go-trash")){
        adddedContent.style.display = "none"
    }
        del.innerHTML ='Delete'
        del.onclick = function(){
            adddedContent.classList.add("go-trash")
        }
    inner.onclick = function(){adddedContent.style.display = "flex"}

})



let inProgress = document.querySelector('.in-progress')

inProgress.addEventListener('click', function(){
   
    if (!adddedContent.classList.contains("go-progress") ){
        adddedContent.style.display = "none"
    }
    if (adddedContent.classList.contains("go-trash")){
        adddedContent.classList.remove("go-progress")
    }
    if (adddedContent.classList.contains("go-progress")){
        adddedContent.style.display = "flex"
    }
    del.innerHTML ='Delete'
        del.onclick = function(){
            adddedContent.classList.add("go-trash")
        }
    inner.onclick = function(){adddedContent.style.display = "none"}
})


let completed = document.querySelector(".completed")
completed.addEventListener('click', function(){

    if (!adddedContent.classList.contains("go-completed")){
        adddedContent.style.display = "none"
    }
    if (adddedContent.classList.contains("go-completed") && (!adddedContent.classList.contains("go-trash"))){
        adddedContent.style.display = "flex"
    }
    del.innerHTML ='Delete'
    del.onclick = function(){
        adddedContent.classList.add("go-trash")
    }
    inner.onclick = function(){adddedContent.style.display = "none"}
})


// let inProgressNum = document.querySelectorAll('.in-progress').length
// console.log(inProgressNum)



let favourite = document.querySelector('.favourite')
favourite.addEventListener('click', function(){
   
    if (!adddedContent.classList.contains("go-favourite") ){
        adddedContent.style.display = "none"
    }
    if (adddedContent.classList.contains("go-trash")){
        adddedContent.style.display = "none"
    }
    if (adddedContent.classList.contains("go-favourite") && (!adddedContent.classList.contains("go-trash"))){
        adddedContent.style.display = "flex"
    }
    del.innerHTML ='Delete'
    del.onclick = function(){
        adddedContent.classList.add("go-trash")
    }
    inner.onclick = function(){adddedContent.style.display = "flex"}
})


let trash = document.querySelector('.trash')

trash.addEventListener('click', function(){
    if (!adddedContent.classList.contains("go-trash")){
        adddedContent.style.display = "none"
    }

    if (adddedContent.classList.contains("go-trash")){
        adddedContent.style.display = "flex"
        if(del.innerHTML ='Restore'){
            del.onclick = function(){
                adddedContent.classList.remove("go-trash")
                if (empty.classList.contains("enable")){
                    adddedContent.classList.add('go-progress')
                    adddedContent.classList.remove('go-completed')
                }
                if (empty.classList.contains("disable")){
                    adddedContent.classList.add('go-completed')
                    adddedContent.classList.remove('go-progress')
                }
                
            }
        }
        
        
    } 
})





counting()



}
})
function counting(){
let allSpan = document.querySelector('.all-span')
let progSpan = document.querySelector('.progress-span')
let compSpan = document.querySelector('.completed-span')
let favouriteSpan = document.querySelector('.favourite-span')
let trashSpan = document.querySelector('.trash-span')

console.log(document.querySelectorAll('.go-progress').length)
allSpan.innerHTML =  document.getElementsByClassName('added-content').length - document.getElementsByClassName('go-trash').length
progSpan.innerHTML = document.getElementsByClassName('go-progress').length - document.getElementsByClassName('go-trash').length
compSpan.innerHTML = document.getElementsByClassName('go-completed').length - document.getElementsByClassName('go-trash').length
favouriteSpan.innerHTML = document.getElementsByClassName('go-favourite').length - document.getElementsByClassName('go-trash').length
trashSpan.innerHTML = document.getElementsByClassName('go-trash').length

// allSpan.innerHTML = Math.max(0, document.getElementsByClassName('added-content').length - document.getElementsByClassName('go-trash').length) 
// progSpan.innerHTML = Math.max(0, document.getElementsByClassName('go-progress').length - document.getElementsByClassName('go-trash').length) 
// compSpan.innerHTML = Math.max(0, document.getElementsByClassName('go-completed').length - document.getElementsByClassName('go-trash').length)
// favouriteSpan.innerHTML = Math.max(0, document.getElementsByClassName('go-favourite').length - document.getElementsByClassName('go-trash').length) 
// trashSpan.innerHTML = document.getElementsByClassName('go-trash').length



    // if(allSpan.innerHTML < 0|| progSpan.innerHTML < 0|| compSpan.innerHTML < 0|| favouriteSpan.innerHTML < 0 || trashSpan.innerHTML < 0){
    //     allSpan.innerHTML = 0 
    //     progSpan.innerHTML = 0
    //     compSpan.innerHTML = 0
    //     favouriteSpan.innerHTML = 0
    // }
}






