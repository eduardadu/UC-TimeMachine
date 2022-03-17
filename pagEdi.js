var paths = document.querySelectorAll("#mapaEdi path, #mapaEdi polygon");
var atualEdi;
var numEdi;
for(var i=0; i<paths.length; i++){
  var now= paths[i];
  paths[i].addEventListener("click", function(){pagEdiShow(this)});

}



/*------------------------------------------- INCLUIR NO HTML TUDO*/

function pagEdiShow(element){
  menu.style.display="none";
  sobreBox.style.display="none";
  creditBox.style.display="none";
  monBox.style.display="none";

  document.getElementById("pagEdi").style.display="block";
  atualEdi=element; //é o path do coiso clicado

  for(var i=0; i<ligacao.length; i++){ //precisamos de buscar o edificio correspondente
    if(ligacao[i]==atualEdi.id){
      numEdi=i-1;
      break;
    }
  };

  document.getElementById("nomeEdi").innerHTML = edificios[numEdi].name;
  document.getElementById("dataEdi").innerHTML = edificios[numEdi].date;
  document.getElementById("secEdi").innerHTML = edificios[numEdi].atualidade;
  document.getElementById("maisEdi").href = edificios[numEdi].linkmais;
    document.getElementById("googleEdi").href = edificios[numEdi].linkGoogle;
  document.getElementById("historia").innerHTML="";

  for(var j=0;j <edificios[numEdi].historia.length; j++){
    var hs= edificios[numEdi].historia[j];
    var newest = document.createElement("div");
    newest.innerHTML= hs;
    newest.classList.add("paragraph");
    document.getElementById("historia").appendChild(newest);

  }

  document.getElementById("imgEdi").innerHTML="";
  for(var g=0;g<4;g++){
    var addNew= document.createElement("img");
    addNew.classList.add("folderimages");
    addNew.style.zIndex=30+g;
    addNew.style.top=2*g +"em";
    addNew.style.left=2*g +"em";
    addNew.src  =  refImagens[numEdi][g] ;
    document.getElementById("imgEdi").appendChild(addNew);
  }

  mufanca = document.getElementsByClassName("folderimages");
  for(var j=0;j<4; j++){
    mufanca[j].addEventListener("mouseover",function(){
      this.style.zIndex="50";
    });
    mufanca[j].addEventListener("mouseleave",function(){
      this.style.zIndex="0";
    });
  }
}


var mufanca=[];



/* ----------------------------CLOSE*/
document.getElementById("closeEdi").addEventListener("click", function(){
//  document.getElementById("pagEdi").style.display="none";
$(this).parent().css("display","none");
});
