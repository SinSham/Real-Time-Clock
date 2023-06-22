let element = document.getElementById('time');

setInterval(updateTime, 1000);
    
function updateTime(){
    let dt = new Date();
    let hours = dt.getHours();
    let minutes = dt.getMinutes();
    let seconds = dt.getSeconds();
    let current_time = `${hours}:${minutes}:${seconds}`;
    console.log(current_time);
    element.innerHTML = current_time;
}


//other method:


// let element = document.getElementById('time');

// function updateTime(){
//     let date = new Date();
//     element.innerHTML = date.toLocaleTimeString();
// }


// setInterval(updateTime, 1000);