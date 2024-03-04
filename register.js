console.log("Hello World.", 43, 408.33, true, false, ["saging", 44, true]);
console.log(typeof("Hello World."), typeof(34234), typeof(["saging"]))

//string = "asd", "KnnyWo", "234"
//NUmber = 12345, 40.2, 60.4
//boolean = true, false
// object = Array [], JSON {...}

let btnRegister = documents.querySelector("#btnRegister");
let txtUsername = documents.querySelector("#txtUsername");
let txtPassword = document.querySelector("#txtPassword");
let txtConfirmPassword = document.querySelector("#txtComfirmPassword");
let txtAge = document.querySelector("#txtAge");

btnRegister.onclick = function(){ 
    register(txtUsername.value);
}

function register (username, password, confirmPassword, age) {
    alert(username);
    //alert("Register button has been clicked.")

}