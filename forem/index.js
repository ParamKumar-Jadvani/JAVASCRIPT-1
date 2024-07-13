let users = []
const uiMaker = () => {
    document.getElementById("tbody").innerHTML = ""
    for (let i = 0; i < users.length; i++) {
       let tr =document.createElement("tr")
       let  td1 =document.createElement("td")
       td1.innerHTML=users[i].ક્રમ
       let td2 =document.createElement("td")
       td2.innerHTML=users[i].સભ્યનુંનામ(અખતપહેલાલખવું)
       let td3 =document.createElement("td")
       td3.innerHTML=users[i].કૌટુંબિકસંબંધ
       let td4 =document.createElement("td")
       td4.innerHTML=users[i].જન્મતારીખ
       let td5 =document.createElement("td")
       td5.innerHTML=users[i].ઉમર
       let td6 =document.createElement("td")
       td6.innerHTML=users[i].બ્લડગ્રુપ
       let td7 =document.createElement("td")
       td7.innerHTML=users[i].અભ્યાસ
       let td8 =document.createElement("td")
       td8.innerHTML=users[i].વૈવાહિકદરજજો
       let td9 =document.createElement("td")
       td9.innerHTML=users[i].વ્યવસાય
       let td10 =document.createElement("td")
       td10.innerHTML=users[i].મોબાઇલનં
       let td11 =document.createElement("td")
       td11.innerHTML=users[i].ઈ-મેલ
       tr.append(td1,td2,td3,td4,td5,td6,td7,td8,td9,td10,td11)
       document.getElementById("tbody").append(tr)
    }
}


const handleData = (e)=>{
    e.preventDefault(); 

    let ક્રમ = document.getElementById("ક્રમ").value;
    let સભ્યનુંનામ = document.getElementById("સભ્યનુંનામ").value;
    let કૌટુંબિકસંબંધ = document.getElementById("કૌટુંબિકસંબંધ").value;
    let ઉમર = document.getElementById("ઉમર").value;
    let બ્લડગ્રુપ = document.getElementById("બ્લડગ્રુપ").value;
    let અભ્યાસ = document.getElementById("અભ્યાસ").value;
    let વૈવાહિકદરજજો = document.getElementById("વૈવાહિકદરજજો").value;
    let વ્યવસાય = document.getElementById("વ્યવસાય").value;
    let મોબાઇલનં = document.getElementById("મોબાઇલનં.").value;
    let મેલ= document.getElementById("ઈમેલ").value;




    let user = {
        ક્રમ: ક્રમ,
        કૌટુંબિકસંબંધ:કૌટુંબિકસંબંધ,
        જન્મતારીખ: જન્મતારીખ,
        ઉમર: ઉમર,
        બ્લડગ્રુપ:બ્લડગ્રુપ,
        અભ્યાસ:અભ્યાસ,
        વૈવાહિકદરજજો:વૈવાહિકદરજજો,
        વ્યવસાય:વ્યવસાય,
        મોબાઇલનં:મોબાઇલનં,
        ઈમેલ:ઈમેલ
    }

    users.push(user);
    console.log(users);
    uiMaker()
}

document.getElementById("userData").addEventListener("submit", handleData);