const end_date="6 May 2023 11:00 AM";

document.getElementById("endDate").innerHTML=end_date;

const selector = document.querySelectorAll("input")

function clock(){
    const end= new Date(end_date);
    const now=new Date();

    console.log(end);

   const diff = (end-now)/1000;

   console.log("Days<<<", Math.floor(diff/3600/24));
    selector[0].value=(Math.floor(diff/3600/24));

    console.log("Hours<<<",Math.floor((diff/3600)%24));
    selector[1].value=(Math.floor((diff/3600)%24));

    console.log("Minutes<<<",Math.floor((diff/60)%60));
    selector[2].value=Math.floor((diff/60)%60);

    console.log("Seconds<<<",Math.floor(diff%60));
    selector[3].value=Math.floor(diff%60)

}

setInterval(clock,1000);
