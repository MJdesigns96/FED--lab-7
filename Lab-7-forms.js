/* LAB 7 - SHIPPING FORM */
//Order Shipping object (for extra EXTRA challenge, otherwise, ignore it)
var shipInfo = {
	cid: 0,
	name: "",
	pc: "",
	speed: "",
	cost: 0
};

window.onload = pageReady;

function pageReady() {
	//variables
	let form = document.getElementById("shippingForm");
	let thankYouMessage = document.getElementById("thanks_msg");
	let formName = document.getElementById("in_Name");
	let formPostal = document.getElementById("in_pc");
	let changeName = document.getElementById("thanksCustomer");
	let changePostal = document.getElementById("thanksPC");
	let shipOption = document.getElementById("in_Speed");
	let changeCost = document.getElementById("thanksCost");
	let changeShip = document.getElementById("thanksSpeed");

	function onSubmit (event) {
		//change shipInfo
			shipInfo.name = formName.value;
			shipInfo.pc = formPostal.value;
			shipInfo.speed = shipOption.options[shipOption.selectedIndex].text;
			shipInfo.cost = shipOption.value;

		//get input data from user for name and postal
		let name = shipInfo.name;
		let postal = shipInfo.pc;
		let speed = shipInfo.speed;

		let validForm = true;

		if (postal === "") {
			formPostal.style.backgroundColor = "red";
			formPostal.focus();

			validForm = false;
		}

		if (name === "") {
			formName.style.backgroundColor = "red";
			formName.focus();

			validForm = false;
		}

		if (speed === "===SELECT===") {
			shipOption.style.backgroundColor = "red";
			shipOption.focus();

			validForm = false;
		}

		if (validForm) {
			//change visibility of form and thank you message
			form.style.display = "none";
			thankYouMessage.style.display = "block";

			//change thank you message
			
			changeName.innerHTML = `${name}`;
			changePostal.innerHTML = `${postal}`;

			//ship method
			changeShip.innerHTML = `${shipInfo.speed}`;
			changeCost.innerHTML = `${shipInfo.cost}`;
		}
		console.log(shipInfo);
		
		event.preventDefault();
	}

	form.onsubmit = onSubmit;
}





