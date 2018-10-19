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
    var today ="October " + dd +" , " + yyyy;
    console.log("date" + today);
    var date = document.getElementById("date-para");
    
    date.innerHTML = today;

}
setInterval(myFunction,1000);
var agentName = ["Curtis", "Maria", "Amanda","Jainson"];
var agentNo = ["1-896 818 7340", "1-866 817 7009", "1-806 818 7679", "1-824 818 7431"];



// for(var i=0; i<agentName.length; i++) {
//     var agName =  document.getElementById("name2");
//     console.log(agName);
    
//     agName.innerHTML = agentName[i];
// }
var curtis = document.getElementById("name1");
var curtis1 = agentName[0];
curtis.innerHTML = curtis1;
var curtisPhone = document.getElementById("phone");
var curtis1Phone = agentNo[0];
curtisPhone.innerHTML = curtis1Phone;

var maria = document.getElementById("name2");
var maria1 = agentName[1];
maria.innerHTML = maria1;
var mariaPhone = document.getElementById("phone2");
var maria1Phone = agentNo[1];
mariaPhone.innerHTML = maria1Phone;

var amanda = document.getElementById("name3");
var amanda1 = agentName[2];
amanda.innerHTML = amanda1;
var amandaPhone = document.getElementById("phone3");
var amanda1Phone = agentNo[2];
amandaPhone.innerHTML = amanda1Phone;

var jainson = document.getElementById("name4");
var jainson1 = agentName[3];
jainson.innerHTML = jainson1;
var jainsonPhone = document.getElementById("phone4");
var jainson1Phone = agentNo[3];
jainsonPhone.innerHTML = jainson1Phone;


var walkForwards = true;
function catWalk() {
    var img = document.getElementById("cat");
    var currentLeft = parseInt(img.style.left);
    if (walkForwards && (currentLeft > (window.innerWidth-img.width))) {            
        walkForwards = false;        
    } if (!walkForwards && (currentLeft <= 0)) {            
        walkForwards = true;        
    }
        if (walkForwards) {            
            img.style.left = (currentLeft + 10) + 'px';        
        } else {            
            img.style.left = (currentLeft - 10) + 'px';        
        }   
    }    

setInterval(catWalk, 50);








function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
}






