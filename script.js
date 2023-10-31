function copyCred(txt) {
navigator.clipboard.writeText(txt).then(
    ()=>{
        alert("Text copied to clipboard: " + txt);
    },
    ()=>{
        alert("Text copied to clipboard failed");

    },
);
  
    // Provide user feedback (e.g., an alert)
  }
  
// logic for delete data
const deleteCredentials = (website) => {
    let data = localStorage.getItem("credentials")
    let arr = JSON.parse(data);
    arrUpdate = arr.filter((e) => {
        return e.website != website
    })
    localStorage.setItem("credentials", JSON.stringify(arrUpdate))
    alert(`successfully delete ${website}'s password`)
    showcredentials()

}
// logic for print data in table
let showcredentials = () => {
    let tb = document.querySelector(".tab1")
    let data = localStorage.getItem("credentials")

    if (data == null) {
        tb.innerHTML = "no data to be show"
    }
    else {
        tb.innerHTML = ` <tr>
    <th>Website</th>
    <th>UserName</th>
    <th>Password</th>
    <th>Delete</th>

  </tr>`
        let arr = JSON.parse(data);
        let str = ""
        for (let index = 0; index < arr.length; index++) {
            const element = arr[index];
            str += `<tr>
    <td>${element.website} <img onclick ="copyCred(${element.website})" src ="copyText.svg" alt ="copy button" width ="15" height ="10"></td>
    <td>${element.username}<img onclick ="copyCred(${element.username})" src ="copyText.svg" alt ="copy button" width ="15" height ="10"></td>
    <td>${element.password}<img onclick ="copyCred(${element.password})" src ="copyText.svg" alt ="copy button" width ="15" height ="10"></td>
    <td><button class ="btnsm" onclick="deleteCredentials('${element.website}')">Delete</button></td>

</tr>`
        }
        tb.innerHTML = tb.innerHTML + str
    }
    website.value = "";
    username.value = "";
    password.value = "";
}
console.log("Hello sumit");
showcredentials()
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
    showcredentials()

})