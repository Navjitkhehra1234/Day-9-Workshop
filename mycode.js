// function myFunction() {
//      var date1 = new Date('December 17, 1995 03:24:00');
//      console.log("Date " + date1);
// }
 function myFunction() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!
    
    var yyyy = today.getFullYear();
    if(dd<10){
        dd='0'+dd;
    } 
    if(mm<10){
        mm='0'+mm;
    } 
    var today =" " + mm  +"  " + dd +"  " + yyyy;
    console.log("date" + today);
    var date = document.getElementById("date-para");
    
    date.innerHTML = today;

}
setInterval(myFunction,1000);

