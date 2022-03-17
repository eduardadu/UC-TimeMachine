//--------------------------------------------------------------------------------------------------menu
var menuon=1;
var burg=document.getElementById('burg');
var menu=document.getElementById('menu');
burg.addEventListener("click", function(){
if(menuon==1){
  menu.style.display="block";
}else{
  menu.style.display="none";
}
menuon=menuon*-1;
});


document.getElementById("closeEdi2").addEventListener("click", function(){
//  document.getElementById("pagEdi").style.display="none";
$(this).parent().css("display","none");
});

document.getElementById("closeEdi3").addEventListener("click", function(){
//  document.getElementById("pagEdi").style.display="none";
$(this).parent().css("display","none");
});


document.getElementById("closeEdi4").addEventListener("click", function(){
//  document.getElementById("pagEdi").style.display="none";
$(this).parent().css("display","none");
});

drag.addEventListener("click",function(){menu.style.display="none";});


//----------------------------Credits
var credits= document.getElementById('credits');
var creditBox= document.getElementById('creditBox');

credits.addEventListener("click", function(){
  menu.style.display="none";
    sobreBox.style.display="none";
    monBox.style.display="none";
  creditBox.style.display="block";});


//---------------------------------------Sobre

var sobre= document.getElementById('about');
var sobreBox= document.getElementById('aboutBox');

about.addEventListener("click", function(){
  menu.style.display="none";
  creditBox.style.display="none";
  monBox.style.display="none";
  sobreBox.style.display="block";});



  //---------------------------------------MapaBye

  var mapaBye= document.getElementById('mapaBye');
  var sobreBox= document.getElementById('aboutBox');

  mapaBye.addEventListener("click", function(){
    menu.style.display="none";
    aboutBox.style.display="none";
    creditBox.style.display="none";
    });

  //------------------------------------MOnumentos
  var monu= document.getElementById('monumentos');
  var edi= document.getElementById('edi');
      var monBox= document.getElementById('monBox');

      monu.addEventListener("click", function(){
        menu.style.display="none";
        sobreBox.style.display="none";
        creditBox.style.display="none";
        monBox.style.display="block";

        });

        //-------------------DIANMIC Monumentos

var ediList= document.getElementById("edi");
getMon();
function getMon(){
  for(var i=0;i<32;i++){
    var dataList;
    var nomeList;
    var imagemList;
    var groupList;
    var groupTiny;

    nomeList= document.createElement("div");
    nomeList.innerHTML=edificios[i].name;
    nomeList.classList.add("listanome");

    dataList= document.createElement("div");
    dataList.classList.add("listadata");
    dataList.innerHTML= edificios[i].date;

    groupTiny= document.createElement('div');
    groupTiny.classList.add('groupTiny');
    groupTiny.appendChild(dataList);
    groupTiny.appendChild(nomeList);

    imagemList= document.createElement("img");
    imagemList.classList.add('listaimagem');
    imagemList.src=refImagens[i][1];

    groupList= document.createElement("div");
    groupList.classList.add('groupList');
    groupList.appendChild(imagemList);
    groupList.appendChild(groupTiny);

    edi.appendChild(groupList);
  }
}




//------------------------------------------------------TITULO

var titulohover= document.getElementById("navbar2");
titulohover.addEventListener("mouseover", function(){
  titulohover.style.height="10em";
});

titulohover.addEventListener("mouseleave", function(){
  titulohover.style.height="4em";
});
