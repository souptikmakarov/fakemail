window.onload=function(){

	var form=document.getElementById('fakemailer');
	var button=document.getElementById('submitbutton');
	button.addEventListener('click',function(){
		var to=form.elements.namedItem("mailto").value;
		var from=form.elements.namedItem("mailfrom").value;
		if(to=="souptikb7@gmail.com" || from=="souptikb7@gmail.com"){

			alert("You cannot use my email id");
		}else{
			
			form.submit();
		}
	});
}