
//CALENDAR IN JAVASCRIPT BY ADENUGA EBUNIFEOLUWA AYOMIKUN 19CJ025761 


const daysTag = document.querySelector(".days"),
currentDate = document.querySelector(".current-date"),
prevNextIcon = document.querySelectorAll(".icons span");


let date = new Date(),
current_year = date.getFullYear(),
current_month = date.getMonth();

const months = ["January", "February", "March", "April", "May", "June", "July",
              "August", "September", "October", "November", "December"];

const renderCalendar = () => {
    let first_day_of_month = new Date(current_year, current_month, 1).getDay(),
    lastDateofMonth = new Date(current_year, current_month + 1, 0).getDate(),
    lastDayofMonth = new Date(current_year, current_month, lastDateofMonth).getDay(), 
    lastDateofLastMonth = new Date(current_year, current_month, 0).getDate();
    let liTag = "";

    for (let i = first_day_of_month; i > 0; i--) { 
        liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
    }

    for (let i = 1; i <= lastDateofMonth; i++) {
        let isToday = i === date.getDate() && current_month === new Date().getMonth() 
                     && current_year === new Date().getFullYear() ? "active" : "";
        liTag += `<li name="day"  class="${isToday}">${i} </li>`;
    }

    for (let i = lastDayofMonth; i < 6; i++) {
        liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`
    }
    currentDate.innerText = `${months[current_month]} ${current_year}`; 
    daysTag.innerHTML = liTag;
}

renderCalendar();

prevNextIcon.forEach(icon => { 
    icon.addEventListener("click", () => { 
        current_month = icon.id === "back" ? current_month - 1 : current_month + 1;

        if(current_month < 0 || current_month > 11) { 
            date = new Date(current_year, current_month);
            current_year = date.getFullYear(); 
            current_month = date.getMonth(); 
        } else {
            date = new Date(); 
        }
        renderCalendar(); 
    });
});
function highlight(){
var selector;
	var blob = document.getElementsByTagName("li");
for(selector in blob){
	var locator = currentDate.innerText;
	
	if(blob[selector].innerHTML==8 && locator.indexOf("February")!= -1 ){
		blob[selector].style.backgroundColor="red";
	}
	if(blob[selector].innerHTML==11 && locator.indexOf("September")!= -1){
		blob[selector].style.backgroundColor="pink";
	}
	if(blob[selector].innerHTML==20 && locator.indexOf("November")!= -1){
		blob[selector].style.backgroundColor="green";
	}
	
}
}