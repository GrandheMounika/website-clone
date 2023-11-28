
let getUsersdata=JSON.parse(localStorage.getItem("userdata"))||[];
function Signin(){
    let mobile =document.getElementById("mobile").value;
    let password=document.getElementById("pass").value;
    let count=0;

    if(mobile.length == 0){
        
        alert("enter mobile number")
    }   
    else if(mobile.length!==10){
        
        alert("mobile number should be of 10 digits");
    }
    else{
        for(let i=0;i<getUsersdata.length;i++){
            if(mobile==getUsersdata[i].mobile){
                if(password==getUsersdata[i].password){
                    alert("Sign in Successful");
                    window.location.href="index.html"
                }
                else{
                    alert("Invalid password");
                }
            }
            else{
                count++;
            }
        }
    }
    // console.log(count,"count");
    if(count==getUsersdata.length){
        alert("user is not registered,sign up to continue");
        window.location.href="signup.html"
    }
}