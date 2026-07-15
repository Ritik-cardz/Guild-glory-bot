// ===== Loader =====

window.addEventListener("load", () => {

setTimeout(() => {

document.getElementById("loader").style.display = "none";

}, 1500);

});

// ===== Buttons =====

const startBtn = document.getElementById("startBtn");
const statsBtn = document.getElementById("statsBtn");

const landing = document.querySelector(".landing");
const panelPage = document.getElementById("panelPage");
const stats = document.getElementById("stats");

startBtn.onclick = () => {

landing.style.display = "none";
panelPage.style.display = "flex";

};

statsBtn.onclick = () => {

stats.scrollIntoView({
behavior: "smooth"
});

};
// ===== Bot Packages =====

const botSelect = document.getElementById("botSelect");

const botName = document.getElementById("botName");
const botGlory = document.getElementById("botGlory");

const price = document.getElementById("price");
const details = document.getElementById("details");

const payBot = document.getElementById("payBot");
const payGlory = document.getElementById("payGlory");
const payPrice = document.getElementById("payPrice");

const packages = {

4:{glory:"200K Glory",price:"₹199"},

10:{glory:"500K Glory",price:"₹299"},

20:{glory:"5L Glory",price:"₹399"},

40:{glory:"50L Glory",price:"₹499"},

50:{glory:"100L Glory",price:"₹699"}

};

botSelect.onchange = () => {

const value = botSelect.value;

botName.innerText = value + " Bots";

botGlory.innerText = packages[value].glory;

price.innerText = packages[value].price;

details.innerText =
value + " Bots • " + packages[value].glory;

payBot.innerText = value + " Bots";

payGlory.innerText = packages[value].glory;

payPrice.innerText = packages[value].price;

};
// ===== Continue To Payment =====

const paymentBtn = document.getElementById("paymentBtn");
const paymentPage = document.getElementById("paymentPage");

paymentBtn.onclick = () => {

panelPage.style.display = "none";
paymentPage.style.display = "flex";

};

// ===== Copy UPI =====

const copyBtn = document.getElementById("copyBtn");

copyBtn.onclick = () => {

const upi = document.getElementById("upiId").innerText;

navigator.clipboard.writeText(upi);

copyBtn.innerText = "Copied ✓";

setTimeout(() => {

copyBtn.innerText = "Copy UPI";

},2000);

};

// ===== Submit Order =====

const submitOrder = document.getElementById("submitOrder");

submitOrder.onclick = () => {

const guildId = document.getElementById("guildId").value;

const screenshot =
document.getElementById("paymentProof").files.length;

if(guildId.length != 10){

alert("Enter a valid 10 digit Guild ID");

return;

}

if(screenshot == 0){

alert("Please upload payment screenshot");

return;

}

submitOrder.innerText = "Verifying...";

submitOrder.disabled = true;

setTimeout(()=>{

document.getElementById("successPopup").style.display="flex";

submitOrder.innerText="Submit Order";

submitOrder.disabled=false;

},3000);

};

// ===== Close Success Popup =====

document.getElementById("closeSuccess").onclick=()=>{

document.getElementById("successPopup").style.display="none";

location.reload();

};
