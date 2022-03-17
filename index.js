window.scrollTo( 1500 - window.innerWidth/2, 0 );
var descobrir= document.getElementById("inicioin");
var x=0;
setInterval(function(){
  console.log("oop");
  if(x<10){
  inicioin.innerHTML= edificios[x].name;
  x++;
}else{
  inicioin.innerHTML= "+ UC";
}

},200);



var width = $('svg').width();                   //ScaleAtual
var divDrag = document.getElementById("drag");  //container
userHasScrolled = false;                        //cancelar scroll para nao ter valores astronomidos
var temp;                                       //funçao de intervalo
var scale=1;
var mapa=document.getElementById('mapa');
var mapaEdi=document.getElementById('mapaEdi');
var mapa2=document.getElementById('mapa2');

var dimAtual= $('#mapa').width();
var dimDepois;

var juntar="";

temp=setInterval(function(e){
      if(userHasScrolled){
          userHasScrolled=false;
                juntar="";
                dimAtual= $('#mapa').width();
                dimDepois= scale * dimAtual;
                juntar= "" + dimDepois + "px";
                 mapa.style.width= juntar;
                  mapaEdi.style.width= juntar;

                  mapa2.style.width= juntar;
      }
},500);

//------------------------------------------------------------------SCROLL DOWN VS SCROLL UP VALUES
$('.dragscroll').on('mousewheel DOMMouseScroll', function (e) {
    var direction = (function () {
        var delta = (e.type === 'DOMMouseScroll' ?
                     e.originalEvent.detail * -40 :
                     e.originalEvent.wheelDelta);
        return delta > 0 ? 0 : 1;
    }());
    if(direction === 1) {
       //scrollingdown
      scale=1.1;
      temp;
      userHasScrolled=true;
    }
    if(direction === 0) {
      //scrollingup
      scale=0.9;
      temp;
      userHasScrolled=true;
    }
});


var inutil=  document.getElementById('drag');
var wit = inutil.scrollWidth;
var hei=   inutil.scrollHeight;

document.getElementById('drag').scroll(wit*0.6, hei*0.40);




/*----------------------------------------------------- ZOOM BUTTONS */
var zoomin= document.getElementById("zoomin");

var zoomout= document.getElementById("zoomout");

zoomin.addEventListener("click", function(){
  juntar="";
  dimAtual= $('#mapa').width();
  scale=1.1;
  dimDepois= scale * dimAtual;
  juntar= "" + dimDepois + "px";
  mapa.style.width= juntar;
    mapaEdi.style.width= juntar;
    mapa2.style.width= juntar;

});
zoomout.addEventListener("click", function(){
  juntar="";
  dimAtual= $('#mapa').width();
  scale=0.9;
  dimDepois= scale * dimAtual;
  juntar= "" + dimDepois + "px";
  mapa.style.width= juntar;
    mapaEdi.style.width= juntar;

    mapa2.style.width= juntar;
});

//----------------------------------------------------------------------ARRAY DE REFERENCIAS DE FOTOS
var refImagens=[];

for(var i=1; i<edificios.length+1 ; i++){
    var folder=[];
  for(var j=0; j<10;j++){
    urlReal= nameURL(ligacao[i], j, document.getElementById("bloop"));
    folder.push(urlReal);
  }
  refImagens.push(folder);
}


function nameURL(name, number, div){
  var url="Images/" + name + "/" + number + ".jpeg";

  return url;
}





/*----------- -----------------------------------------------------------------------------------------NAVBAR TIMEBAR*/

var output = document.querySelector("#ageOutputId");
var input = document.querySelector("#ageInputId");
var b= input.offsetHeight;
var vol=2020;
output.value = vol;
vol=vol-1131;
output.style.bottom = b + 'px';

function outputUpdate(vol) {
  var output = document.querySelector("#ageOutputId");
  var input = document.querySelector("#ageInputId");
  var b= input.offsetHeight;
	output.value = vol;
  vol=vol-1131;
  output.style.bottom = b*vol/900 + 'px';

  if(output.value>=1774){
    document.getElementById("mapa2").style.zIndex="1";
  }else{
      document.getElementById("mapa2").style.zIndex="-1";
  }

}
  var output = document.querySelector("#ageOutputId");
outputUpdate(output.value);



var altura;
altura= input.offsetHeight;

var atual= document.getElementById('atual');
var demo= document.getElementById('demo');
var dita= document.getElementById('dita');
var civi= document.getElementById('civi');
var inva= document.getElementById('inva');
var desco= document.getElementById('desco');
var medi= document.getElementById('medi');
var uni= document.getElementById('uni');


window.onresize = function(event) {
  altura= input.offsetHeight;
  atual.style.bottom= ((2020-1131)* altura/900 )-12+ "px";
  demo.style.bottom= (altura* (1975-1131)/900)-14 + "px";
  dita.style.bottom= (altura* (1933-1131)/900)-16 + "px";
  civi.style.bottom= (altura* (1820-1131)/900)-16 + "px";
  dita.style.bottom= (altura* (1926-1131)/900)-16 + "px";
  uni.style.bottom= (altura* (1580-1131)/900)-16 + "px";
  inva.style.bottom= (altura* (1640-1131)/900)-8 + "px";
  desco.style.bottom= (altura* (1300-1131)/900)-8 + "px";
  medi.style.bottom= (altura* (1131-1131)/900) + "px";

};

atual.style.bottom= ((2020-1131)* altura/900 )-12+ "px";
demo.style.bottom= (altura* (1975-1131)/900)-14 + "px";
dita.style.bottom= (altura* (1933-1131)/900)-16 + "px";
civi.style.bottom= (altura* (1820-1131)/900)-16 + "px";
dita.style.bottom= (altura* (1926-1131)/900)-16 + "px";
uni.style.bottom= (altura* (1580-1131)/900)-16 + "px";
inva.style.bottom= (altura* (1640-1131)/900)-8 + "px";
desco.style.bottom= (altura* (1300-1131)/900)-8 + "px";
medi.style.bottom= (altura* (1131-1131)/900) + "px";


//---------------------------------------------------------------------------------------------------- POPUP viewBox


var paths = document.querySelectorAll("#mapaEdi path, #mapaEdi polygon");
  var out=true;;
var info;
for(var i=0; i<paths.length; i++){
  var now= paths[i];
  paths[i].addEventListener("mouseover", function(){popup(this); out=false;});
  paths[i].addEventListener("mouseleave", popupbye);
}

var i;
var mouX;
var mouY;
$("body").mousemove(function(e) {
  mouX= e.pageX;
  mouY= e.pageY;
});


function popup(f){
  for(var g=0; g< ligacao.length ;g++){
    if(ligacao[g]==f.id){
      i=g;
    }else{
    }
  }
  document.getElementById("popuptitle").innerHTML =  edificios[i-1].name ;

  for(var g=0;g<10;g++){
    var newimg= document.createElement('img');
    newimg.src= refImagens[i-1][g];
    newimg.classList.add('popupimg');
    var pop= document.getElementById('popupimg');
    pop.appendChild(newimg);
  }
  var arrayimages=document.getElementsByClassName('popupimg');


  var x=0;

  setInterval(function(){
    if(out==false){
    x=x+1;
    if(x==refImagens[i-1].length-1){x=0;};

    for(v=0; v<arrayimages.lenght;v++){
      arrayimages[v].style.zIndex="-3";
    }
    arrayimages[x].style.zIndex="10";
  }
  },1000);



  info = f.getBoundingClientRect();
  var show= document.getElementById("popup"); //----------------------POP TRANSITION
  show.style.opacity="1";
  show.style.left= (mouX+10) + "px";
  show.style.width= "15em";
  show.style.top=(mouY +10)+ "px";


}

function popupbye(){
  var show= document.getElementById("popup");
  show.style.opacity="0";
  show.style.width= "0px";
    var pop= document.getElementById('popupimg');
    pop.innerHTML="";
    out=true;

}

//-----------------------------------------------------------------------------------------------------TIMEBAR age
function updateedi(){
  ligacao.forEach(datar);};

for(var i=0; i<ligacao.length;i++){
  console.log(ligacao[i+1]);
  var work= document.getElementById(ligacao[i+1]);
  datar(ligacao[i+1], i, work);
}

function datar(item, index,work){
  var val = document.getElementById("ageInputId").value;
  var work;
       val = document.getElementById("ageInputId").value;
       work= document.getElementById(item);

       if(edificios[index-1].date<val){
         work.style.visibility="visible";
       }else{
         work.style.visibility="hidden";
       }
}




 //-----------------------------------------------------------------------------------------------------iniciou
