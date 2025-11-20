let contador = 0;

const imagenes = [
  "https://preview.redd.it/heres-my-collection-of-personal-the-crew-2-screenshots-v0-f1gs5z20ahz81.jpg?width=1080&crop=smart&auto=webp&s=42ff9c67a30b3c895d3f51084928eeb88acdca29",  
  "https://wallpaper.forfun.com/fetch/08/08d4da43bd227912854291ed41f36169.jpeg",
  "https://w0.peakpx.com/wallpaper/262/727/HD-wallpaper-the-crew-2-ford-mustang-rear-lights-the-crew-2-the-crew-games-pc-games-xbox-games-ps-games-ford-mustang.jpg",
  "https://wallpaper.forfun.com/fetch/30/30d704fcd708d013c5a5007391eb9fff.jpeg",
  "https://wallpaper.forfun.com/fetch/87/874dce99d7e1e6a5c4d906670cc4a8bb.jpeg",
  "https://wallpaper.forfun.com/fetch/55/55109c19d0ad72dc68058e7f8d94632f.jpeg",
  "https://cdna.artstation.com/p/assets/images/images/065/006/630/large/lea-lescuyer-christmas-04.jpg?1689265894",
  "https://cdna.artstation.com/p/assets/images/images/013/365/026/large/julien-debono-pic-20180807-140543-3840x2160-copy.jpg?1539258141"
  
];

function cambiarImagen() {
  const imagen = document.getElementById("banner");
  imagen.style.opacity = 0;

  // Avanza al siguiente índice, reinicia si llega al final
  contador = (contador + 1) % imagenes.length;

  setTimeout(() => {
    imagen.src = imagenes[contador];
    imagen.style.opacity = 1;
  }, 300);
}