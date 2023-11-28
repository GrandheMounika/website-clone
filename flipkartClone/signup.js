
let getUsersdata=JSON.parse(localStorage.getItem("userdata"))||[];
console.log(getUsersdata);
function Signup(){
    let username= document.getElementById("name").value;
    // console.log(username)
    let mobile= document.getElementById("mobile").value;
    // console.log(mobile)
    let password= document.getElementById("pass").value;
    // console.log(password)

    if(mobile.length !== 10){
        alert("mobile number should have 10 digits only")
    }
   else{ let userData={
        username:username,
        mobile:mobile,
        password:password
        }
        let users=[...getUsersdata,userData];
        users.push(userData);
         localStorage.setItem("userdata",JSON.stringify(users));
         alert("Signin successfull");
         window.location.href="signin.html"
    }
}
