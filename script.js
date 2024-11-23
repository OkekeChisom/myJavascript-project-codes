document.addEventListener('DOMContentLoaded', function(){ // first create an event listener with an empty function
    let curt = document.getElementById('current'); // inside the function get the id of where the time will display
    let curtdate = document.getElementById('date');
    function updateTime(){ // next create a function 
        let time = new Date(); // inside create the date
        let hour = time.getHours(), // the hours
        ampm = ' AM'
        let minutes = time.getMinutes(); // the minutes
        if( hour > 12){ // and give it the condition that if the hour is greater than 12 
            hour -= 12, ampm = ' PM'; // let it minus or equal to twelve
        } else if( hour === 0){
            hour = 12;
        }
        if(minutes < 10){
            minutes = '0' + minutes
        }

        let sep = ':';
        let seconds = time.getSeconds();
        if( seconds % 2 === 1){
            sep = ' '
        }
       
        curt.innerHTML = hour + sep + minutes + ampm ; // next call the id where the time will display and add the hour and minutes
    }
    setInterval(updateTime, 1000); // this makes the time to update after every 60 seconds
}) 



































































