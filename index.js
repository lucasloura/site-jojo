function verifEmail(id){
    var email=document.getElementById(id);

	if(email=='' || typeof email === 'undefined'){
		alert("Insira um email!");
	}

	alert('Obrigado por se inscrever! ');
}