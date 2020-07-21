// varaibles
let changeIpButton = document.querySelectorAll(".clientIp button")[0],
    resetIpButton = document.querySelectorAll(".clientIp button")[1],
    resetStatue = localStorage.getItem("reset") || "true",
    currentIp = document.querySelector(".clientIp p"),
    loadding = document.querySelector(".loading"),
    alert = document.querySelector(".alert"),
    ips = "32.209.164.2 32.2.46.39 198.56.200.74 46.119.41.142 177.57.216.208 76.26.206.115 69.84.78.143 115.96.64.107 52.81.82.88 162.171.30.18 119.36.90.21 45.131.70.206 238.121.60.130 16.161.178.70 64.127.185.235 144.158.54.129 187.124.79.57 227.199.22.33 25.67.226.30 0.201.16.127 37.208.178.231 60.156.181.36 0.22.125.92 30.66.115.98 204.32.131.21 46.128.109.109 192.1.60.252 159.203.239.201 138.110.180.150 21.239.200.171 30.34.244.203 47.209.150.106 153.153.128.47 212.160.226.250 12.34.2.223 130.112.52.44 37.28.243.29 210.58.172.36 88.242.231.90 209.154.41.203 35.50.49.142 230.96.62.56",
    ipsList = ips.split(" ");

// change ip button event click
changeIpButton.addEventListener("click", changeIp);

// reset ip button event click
resetIpButton.addEventListener("click", resetIp);
// change ip function
function changeIp(){
    // lodding change
    loadding.style.display = "flex";
    loadding.children[0].innerHTML = `ip is changed`;

    // hiiden alert
    alert.style.display = "none";

    // change reset statue
    resetStatue = false;
    localStorage.setItem("reset", resetStatue);

    setTimeout(_ =>{
        let randomId = Math.floor(Math.random() * (ipsList.length - 1));
        localStorage.setItem("ip", ipsList[randomId]);
        currentIp.children[0].innerHTML = `your new ip is: `;

        currentIp.children[1].innerHTML = ipsList[randomId];
        loadding.style.display = "none";
        alert.style.display = "block";
        alert.innerHTML = `you are safty now`;

    }, 4000);

}

// reset ip function
function resetIp(){
        if(resetStatue == "true" || localStorage.getItem("reset") == "true"){
            alert.innerHTML = `this already reseted`;
            alert.style.display = "block";
            
        } else {
            loadding.style.display = "flex";   
            loadding.children[0].innerHTML = `ip is reseted`;
        
        
            setTimeout(_ => {
                currentIp.children[0].innerHTML = `your ip is: `;
        
                currentIp.children[1].innerHTML = "192.168.1.1";
                alert.style.display = "none";
                loadding.style.display = "none";
                localStorage.removeItem("ip");
            }, 4000);
            resetStatue = "true";
            localStorage.setItem("reset", resetStatue);
        }




}

// local storage check
if(localStorage.getItem("ip")) {
    currentIp.children[0].innerHTML = `your new ip is: `;

    currentIp.children[1].innerHTML = localStorage.getItem("ip");
    alert.style.display = "block";

} else {
    currentIp.children[0].innerHTML = `your ip is: `;

    currentIp.children[1].innerHTML = "192.168.1.1";
    alert.style.display = "none";
}

