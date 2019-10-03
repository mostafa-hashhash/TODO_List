let num = 0 ;

if( !localStorage.getItem("list")){
	var list = ["a"];
	localStorage.setItem("list",JSON.stringify(list))
}

document.addEventListener("DOMContentLoaded",() => {
	var t = localStorage.getItem("list");
	t = t ? JSON.parse(t) : {} ;

	t.forEach(x => {
		document.querySelector("#data").innerHTML += 
		`<div id="task">
			<input type="checkbox" id="box" > <li > ${x} </li>
		</div>`
	});

	// Initially Disabled {{ No Input Yet }}
	document.querySelector("#submit").disabled = true ;

	// If Focused In The Input Field at any Time
	document.querySelector("#input").onkeyup = () => {
		if(document.querySelector("#input").value.length > 0 )
			document.querySelector("#submit").disabled = false ;
		else
			document.querySelector("#submit").disabled = true ;
	}

	// We Will Come Here Only If {{ Valid Length }}
	document.querySelector("form").onsubmit = () => { 
		
		document.querySelector("#input").focus() 
		// Add The New Element
		document.querySelector("#data").innerHTML +=
		`<div id="task"> 
			<input type="checkbox" id="box" > <li > ${document.querySelector("#input").value} </li>
		</div>`
		
		t.push(document.querySelector("#input").value);

		localStorage.setItem("list",JSON.stringify(t))
		// Reset EveryThing To The Initial Conditions
		document.querySelector("#input").value =  '';
		document.querySelector("#submit").disabled = true ;

		return false;
	};

	document.querySelector("#erase_all").onclick = ()=> { 	localStorage.removeItem("list") 	}

	document.querySelectorAll("#box").forEach( x => { x.onclick = ()=> {x.parentNode.style.display = ' none '}  })

});

/*localStorage.clear()
const list_item = document.createElement('li');
list_item.innerHTML =  document.querySelector("#input").value; 
document.querySelector("ul").append(list_item);
*/