// Variables
	/*Liste des mots proposés*/
var mots = ["exemple", "pendu", "internet"];	
	// Mot choisi masqué lettre par lettre
var findingWord = [];
	// Mot choisi en un mot
var findingWord2 = []
	// Mot choisi non masqué
var choosenWord;
	/*Position du mot choisi*/
var numberOfWord;		
	//Nombre d'erreurs
var fails = 0; 
	// Mot non masqué n°2
var tempChoosenWord;
	// Erreurs html
// var failsHtml = document.getElementById("fails");

	// Canvas
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");


function chooseWord(){
		// Choix de la position du mot (aléatoire)
	numberOfWord = Math.round(Math.random()*(mots.length-1));
		//Decouper le mot en lettres
	choosenWord = mots[numberOfWord].split("");
	tempChoosenWord = mots[numberOfWord].split("");

	console.log("Le mot choisi est donc: ", tempChoosenWord);
		// Lister le mot qu'avec la première lettre
	findingWord = [choosenWord.splice(0, 1)];
	findingWord.push("_");


		// Ajouter des "_" à la place des lettres masqués
	for (var i = 0; i < choosenWord.length-1; i++) {
		findingWord.push("_");

	}
	document.getElementById("motMasque").innerHTML = findingWord.join("   ");
}
function verifier(){

		// Variables
		// Boolean si la lettre est contenue
	var contain = new Boolean(false);
		/* Valeur de la Lettre choisie (entrée)*/
	var lettreChoisie = document.getElementById('lettreChoisie').value;	

	console.log("exemple:"+lettreChoisie)

		// Boucle pour parcourir toutes les lettres des mots
	for (var i = 0; i < mots[numberOfWord].length; i++){
		// Recherche de la lettre dans le mot
		if(lettreChoisie.toLowerCase().indexOf(mots[numberOfWord][i]) != -1){
		contain = true;
		// Ajouter la lettre trouvée au mot masqué
		findingWord.splice(i, 1, lettreChoisie.toLowerCase());
		document.getElementById("motMasque").innerHTML = findingWord.join("   ");
		
	}
		
}

		// Vérification si la lettre est contenue ou pas
	if(contain == true){}
	else{ 
		fails = fails +1;
		draw(fails);
		console.log("Nombre d'erreurs: " + fails);
		document.getElementById("fails").innerHTML = "Nombre d'erreurs: " + fails;
		// Reinitialisation quand la partie est perdue
		if(fails == 10){
				alert("Perdu ! un nouveau mot va être choisi.");
				ctx.clearRect(0, 0, 500, 500);
				fails = 0;
				chooseWord();
				document.getElementById("fails").innerHTML = "";
				
			}
		}
	contain = false;
		// Verification si la partie est gagnée
	winVerif();
		// Reset de l'input
	document.getElementById("lettreChoisie").value = "";
	draw();
	
	
}
	// Boolean victoire
var win = new Boolean(true);

function winVerif(){
	

		// Mettre un false quand la liste contient _
	findingWord.forEach(function(element, index){
		if(element == "_"){
			win = false;
		}
	})
		// Vérifier si il n'y a plus de _ pour que la partie soit gagnée.
	if(win == true){
		alert("La partie est gagnée !");
		chooseWord();
		fails = 0;
		document.getElementById("fails").innerHTML = "";
		ctx.clearRect(0, 0, 500, 500);
	}
		// Reset de la variable
	win = true;
}

	// Canvas pour le dessin
function draw(etape){
	if(etape == 1){
		ctx.fillStyle = "#40A497";
	// 1
	ctx.fillRect(120, 470, 250, 15);
	}

	if(etape == 2){
		// 2
	ctx.fillRect(180, 170, 15, 300);
	}

	if(etape == 3){
		// 3
	ctx.fillRect(180, 170, 250, 15);
	}

	if(etape == 4){
		// 4
	ctx.fillRect(370, 170, 15, 90);
	}

	if(etape == 5){
		// 5
	ctx.fillStyle = "#173834";
	ctx.beginPath();
	ctx.arc(377, 280, 25, 0, Math.PI*2, false);
	ctx.fill();
	ctx.stroke();
	}

	if(etape == 6){
		// 6
	ctx.fillRect(370, 275, 15, 105);
	}

	if(etape == 7){
	// 7
	ctx.beginPath(); 
	ctx.moveTo(375,325);
	ctx.lineTo(425,300); 
	ctx.stroke();
	}

	if(etape == 8){
	// 8
	ctx.beginPath(); 
	ctx.moveTo(375,325);
	ctx.lineTo(325,300); 
	ctx.stroke();
	}

	if(etape == 9){
	// 9
	ctx.beginPath(); 
	ctx.moveTo(377,380);
	ctx.lineTo(425,400); 
	ctx.stroke();
	}

	if(etape == 10){
		// 10
	ctx.beginPath(); 
	ctx.moveTo(377,380);
	ctx.lineTo(335,400); 
	ctx.stroke();
	}

}