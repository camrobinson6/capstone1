const enterButton = document.getElementById("enter");
const input = document.getElementById("userInput");
const ul = document.querySelector("ul");
const item = document.getElementsByTagName("li");
const getHelp = document.getElementById('getHelp')
const baseURL =  `http://localhost:4000/api/honey`

const getQuerySubmit = document.getElementById('getQuerySubmit')


function inputLength(){
	return input.value.length;
} 

function listLength(){
	return item.length;
}

function createListElement() {
	let li = document.createElement("li"); // creates an element "li"
	li.appendChild(document.createTextNode(input.value)); //makes text from input field the li text
	ul.appendChild(li); //adds li to ul
	input.value = ""; //Reset text input field


	
	function crossOut() {
		li.classList.toggle("done");
	}

	li.addEventListener("click",crossOut);
	//END STRIKETHROUGH


	// START ADD DELETE BUTTON
	let dBtn = document.createElement("button");
	dBtn.appendChild(document.createTextNode("X"));
	li.appendChild(dBtn);
	dBtn.addEventListener("click", deleteListItem);
	// END ADD DELETE BUTTON


	//ADD CLASS DELETE (DISPLAY: NONE)
	function deleteListItem(){
		li.classList.add("delete")
	}
	//END ADD CLASS DELETE
}


function addListAfterClick(){
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.which ===13) { 
		createListElement();
	} 
}




enterButton.addEventListener("click",addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);




getParamSubmit.addEventListener('click', () => {
 
    let paramInput2 = window.prompt('Write good honey do suggestion for others to think about.')
    console.log(paramInput2)
    axios
    .get(`http://localhost:4000/api/honey/`)
    .then(res => displayRes([res.data]))
});  




getQuerySubmit.addEventListener('click', () => {
    axios
   .delete(`http://localhost:4000/api/honey`)
   .then(res => displayRes([res.data]))
   
});