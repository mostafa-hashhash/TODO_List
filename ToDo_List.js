document.addEventListener("DOMContentLoaded",() => {
	
	document.querySelector("#submit").disabled = true ;

	document.querySelector("#input").onkeyup = () => 
	{
		if(document.querySelector("#input").value.length > 0 )
			document.querySelector("#submit").disabled = false ;
		else
			document.querySelector("#submit").disabled = true ;
	}
	document.querySelector("form").onsubmit = () => {

		// const list_item = document.createElement('li');
		// list_item.innerHTML =  
		//document.querySelector("#input").value; 
		//document.querySelector("ul").append(list_item);

		document.querySelector("ul").innerHTML +=
		 `<li> ${document.querySelector("#input").value} </li>` ;

		document.querySelector("#input").value =  '';
		document.querySelector("#submit").disabled = true ;

		return false;

	};

});
