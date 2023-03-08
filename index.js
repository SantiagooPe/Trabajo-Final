  /* Cambio de imagen de Títulos al dar click sobre la imagen*/
function changeImage() {
    var image = document.getElementById("myImage");
    if (image.src.match("Titulo.JPG")) {
      image.src = "esta.JPG";
    } else {
      image.src = "Titulo.JPG";
    }
    
  }