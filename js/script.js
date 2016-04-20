$(function(){
	var mouvement = false;
	var saut = false;
	$(document).keydown(function(e){
    	// Droite - quand on appuye sur la touche d
		if(e.keyCode == 68) {			
			avancer();			
		}
		//Gauche - touche q
	    if(e.keyCode == 81) {
	    	reculer();
	    }
	    // sauter - touche z
	    if(e.keyCode == 90) {
	    	sauter();
	    }
	    //touche espace  
	    if(e.keyCode == 32) {
	    	soin();
	    }
	});
	$(document).keyup(function(r){
		//quand on arrête d'appuyer sur une touche du clavier 
		if(r.keyCode == 68) {			
			arreté();			
		}
	    if(r.keyCode == 81) {
	    	arreté();
	    }
	});
	//Mouvement avancer
	function avancer(){
		var position_lara = $('#lara').position();
		if(position_lara.left < 450)
		{
			$('#lara').animate({left:"+=10"},20);
		}
		else
		{
			$('#map').animate({backgroundPositionX: "-=10"},20);
		}
			$('#lara img').addClass("rotationdroite");
			$('#lara img').removeClass("rotationgauche");
			if(mouvement != true)
			{
					$('#lara img').attr('src','images/Gif-Tomb-Raider.gif');
					mouvement = true;
			}

	}
	//Mouvement reculer
	function reculer(){
		var position_lara = $('#lara').position();
		if(position_lara.left > -10)
		{
			$('#lara').animate({left:"-=10"},20); 
			$('#lara img').addClass("rotationgauche");
			$('#lara img').removeClass("rotationdroite");
			if(mouvement != true)
			{
					$('#lara img').attr('src','images/Gif-Tomb-Raider.gif');
					mouvement = true;
			}
		}

	}
	//Personnage fixe
	function arreté(){
			if(mouvement != false)
		{
				$('#lara img').attr('src','images/lara_fixe.png');
				mouvement = false;
		}
	}
	//Mouvement sauter
	function sauter(){
		//Gestion de la stamina
		function diminuerstamina(){
			$('#stamina').css({width:"+=5px"});
		}
		if(saut != true)
		{
			$('#lara').animate({bottom: "+=300px"},400);
	        $('#lara').animate({bottom: "-=300px"},400);
	        $('#lara img').attr('src','images/lara_saut.png');
	        $('#stamina').css({width:"0px"});
	        saut = true;
	        //Bruitage du saut
	        $('#saut').trigger('play');
	        setTimeout(function(){
	        	intervalSaut = setInterval(diminuerstamina, 50);
	        },800);
 		}
 		setTimeout(function(){
			 saut = false;
			 $('#lara img').attr('src','images/lara_fixe.png');
			 $('#stamina').css({width:"100px"});
			 clearInterval(intervalSaut);
		}, 1600);
	}
	//Bruitage lors de l'appui sur la touche espace
	function soin(){
		$('#troussedesoin').trigger('play');
	}
});