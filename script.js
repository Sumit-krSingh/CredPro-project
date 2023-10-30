// logic for print data in table
let tb = document.querySelector(".tab1")
let data = localStorage.getItem("credentials")

if(data == null){
    tb.innerHTML= "no data to be show"
}
else{
    let arr = JSON.parse(data);
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
str =`<tr>
    <td>${element.website}</td>
    <td>${element.username}</td>
    <td>${element.password}</td>
    <td>${"Delete"}</td>

</tr>`
    }
    tb.innerHTML = tb.innerHTML + str
}
console.log("Hello sumit");
// logic for store data in local storage with submit click

document.querySelector(".btn").addEventListener("click", (e) => {
    e.preventDefault()
    console.log("clicked")
    console.log(website.value, username.value, password.value)

    let credentials = localStorage.getItem("credentials")
    console.log(credentials)
    if (credentials == null) {
        let json = []
        json.push({ website: website.value, username: username.value, password: password.value })
        alert("credentials saved");
        localStorage.setItem("credentials", JSON.stringify(json))
    }
    else {
        let json = JSON.parse(localStorage.getItem("credentials"))
        json.push({ website: website.value, username: username.value, password: password.value })
        alert("credentials saved");
        localStorage.setItem("credentials", JSON.stringify(json))
    }
})