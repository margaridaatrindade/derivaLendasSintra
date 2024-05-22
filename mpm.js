

function initMap() {
    
    document.getElementById('marker1').addEventListener('click', function() {
        window.location.href = 'paragem1.html'; 
    });
      
    document.getElementById('marker2').addEventListener('click', function() {
        window.location.href = 'paragem2.html'; 
    });
    
    document.getElementById('marker3').addEventListener('click', function() {
        window.location.href = 'paragem3.html'; 
    });
      
    document.getElementById('marker4').addEventListener('click', function() {
        window.location.href = 'paragem4.html'; 
    });

    document.getElementById('marker5').addEventListener('click', function() {
        window.location.href = 'paragem5.html'; 
    });
      
    document.getElementById('marker6').addEventListener('click', function() {
        window.location.href = 'paragem6.html'; 
    });

    document.getElementById('marker7').addEventListener('click', function() {
        window.location.href = 'paragem7.html'; 
    });
      
    document.getElementById('marker8').addEventListener('click', function() {
        window.location.href = 'paragem8.html'; 
    });

    document.getElementById('marker9').addEventListener('click', function() {
        window.location.href = 'paragem9.html'; 
    });
      
    document.getElementById('marker10').addEventListener('click', function() {
        window.location.href = 'paragem10.html'; 
    });

    document.getElementById('marker11').addEventListener('click', function() {
        window.location.href = 'paragem11.html'; 
    });
      
    document.getElementById('marker12').addEventListener('click', function() {
        window.location.href = 'paragem12.html'; 
    });

    document.getElementById('marker13').addEventListener('click', function() {
        window.location.href = 'paragem13.html'; 
    });
      
    document.getElementById('marker14').addEventListener('click', function() {
        window.location.href = 'paragem14.html'; 
    });



    
    var verCaminhoBtn = document.getElementById('ver-caminho');

    var caminhoVisivel = false;

    verCaminhoBtn.addEventListener('click', function() {
        var mapa = document.getElementById('map');

        if (!caminhoVisivel) {
            mapa.style.backgroundImage = "url('img/caminho.png')";

            verCaminhoBtn.textContent = "Ocultar Caminho";

            caminhoVisivel = true;
        } else {
            mapa.style.backgroundImage = "url('img/mapa.png')";
  
            verCaminhoBtn.textContent = "Ver Caminho";
     
            caminhoVisivel = false;
        }
    });

}


function openPopup1() {
    document.getElementById("popup1").style.display = "block";
}

function openPopup2() {
    document.getElementById("popup2").style.display = "block";
}

function openPopup3() {
    document.getElementById("popup3").style.display = "block";
}

function openPopup4() {
    document.getElementById("popup4").style.display = "block";
}

function openPopup5() {
    document.getElementById("popup5").style.display = "block";
}




function closePopup1() {
    document.getElementById("popup1").style.display = "none";
}

function closePopup2() {
    document.getElementById("popup2").style.display = "none";
}

function closePopup3() {
    document.getElementById("popup3").style.display = "none";
}

function closePopup4() {
    document.getElementById("popup4").style.display = "none";
}

function closePopup5() {
    document.getElementById("popup5").style.display = "none";
}

 