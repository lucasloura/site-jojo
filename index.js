function verifEmail(email){

	if(!email){
		alert("Insira um email!");
		return false;
	}

	let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

	if(email.match(regex)){
		alert("Obrigado por se inscrever!");
		return true;
	}

	alert('Insira um email válido!');
}