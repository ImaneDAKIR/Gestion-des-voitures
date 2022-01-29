
document.getElementsByClassName("add")[0].children[0].addEventListener("click",ajouter);
afficher();
function ajouter(){
    var voiture=document.getElementsByClassName("divvide")[0].textContent;
window.localStorage.setItem(indicegenerate(),voiture);
window.location.href=""
}
function indicegenerate(){
    return window.localStorage.length+1;
}
function afficher(){

    for(var i=1;i<=localStorage.length;i++){
        
            document.getElementById("table").innerHTML+='<tr><td>'+i+'</td><td>'+localStorage.getItem(i)+'</td><td><i onclick="supprimer(this)" class="fas fa-trash-alt"></i></td></tr>'
            //document.getElementsByClassName("add")[0].children[0].textContent=""
        
    }
}
function supprimer(el){
    var y=el.parentElement.parentElement.children[0].textContent;
    if(confirm("Etes-vous sur de la suppression ?")){
        localStorage.removeItem(y);
        window.location.href="";
    }

}

