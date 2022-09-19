
let i = 0;
const wholeServer = async () => {
    const community = await fetch("https://www.randomuser.me/api/?results=50");
    const roblox = await community.json();
    console.log(roblox);
    let results = roblox.results;
    i++;
    const para = document.createElement("p");
    para.innerText = `email: ${roblox.results[i].email}`
    document.getElementById("user").appendChild(para);


}
console.log(wholeServer());