var myicon = document.createElement("button");
myicon.style.display = "none";

document.addEventListener("scroll",function(event){


if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {

      myicon.classList.add("fa","fa-3x","fa-arrow-circle-o-up"); //pour l'icone fontawesome
      myicon.id = 'buttonScroll'; //pour le style et le placement
      document.body.appendChild(myicon); // l'ajouter au <body> du fichier HTML
      myicon.style.display = "block"; //si scroll de 20px affiche la div
  } else {

      myicon.style.display = "none"; // cache la div
  }
myicon.addEventListener("click", function(event){ //oui un eventlistener dans un eventlistener
document.body.scrollTop = 0; // event-ception par code-caprio xD
document.documentElement.scrollTop=0;
myicon.parentNode.removeChild(myicon);
}); // click reviens au top
});
