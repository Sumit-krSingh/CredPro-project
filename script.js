console.log("Hello sumit");

document.querySelector(".btn").addEventListener("click" ,(e)=>{
    e.preventDefault()
    console.log("clicked")
    console.log( website.value, username.value, password.value)

    let credentials = localStorage.getItem("credentials")
    console.log(credentials)
    if(credentials ==null){
        let json =[]
        json.push({website:website.value,username:username.value, password:password.value})
        alert("credentials saved");
        localStorage.setItem("credentials",JSON.stringify(json))
    }
    else{
        let json = JSON.parse(localStorage.getItem("credentials"))
        json.push({website:website.value,username:username.value, password:password.value})
        alert("credentials saved");
        localStorage.setItem("credentials",JSON.stringify(json))
    }
})