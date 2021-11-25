$(".m_nav_toggle").click(function(e){
    e.preventDefault();
    $(".m_right").toggleClass("is-open");
    $(".m_nav_toggle").toggleClass("is-open");
})

function afficheMenu(obj){
	
	var idMenu     = obj.id;
	var idSousMenu = 'sous' + idMenu;
	var sousMenu   = document.getElementById(idSousMenu);
	
	/*****************************************************/
	/**	on cache tous les sous-menus pour n'afficher    **/
	/** que celui dont le menu correspondant est cliqué **/
	/** où 4 correspond au nombre de sous-menus         **/
	/*****************************************************/
	for(var i = 1; i <= 4; i++){
		if(document.getElementById('esaison1' + i) && document.getElementById('sousmenu' + i) != sousMenu){
			document.getElementById('esaison1' + i).style.display = "none";
		}
	}
	
	if(sousMenu){
		//alert(sousMenu.style.display);
		if(sousMenu.style.display == "block"){
			sousMenu.style.display = "none";
		}
		else{
			sousMenu.style.display = "block";
		}
	}
	
}