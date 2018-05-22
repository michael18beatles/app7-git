// JavaScript Document
$(document).ready(function(e){
	document.addEventListener("deviceready",function(){
		$('#izquierda').on("swipeleft",function(){
			navigator.notification.alert("Delizó a la izquierda",function(){"aplicación7","Aceptar"});
		});	//cierre de la izquierda
		$('#derecha').on("swiperight",function(){	
		navigator.notification.confirm("¿Qué quieres hacer?",function(opt){
			switch(opt)
			{
			  case 1:
			  navigator.notification.beep(2);
			  break;
			    
			  case 2:
			  navigator.notification.vibrate(1000);
			  break;
			}
		},"Aplication7","Beepear,Vibrar,Cancelar");
	});//cierre del deslizar derecha
	},false);//Cierre del deviceready
});//cierre del document principal