/*const h2 = document.createElement("h2");
h2.textContent = "This content added by JavaScript";
document.querySelector("body").appendChild(h2);*/

function snowButton() {
    document.getElementById("body").style.backgroundImage = "url(./images/shuksan.jpg)";
 }

 function desertButton() {
    document.getElementById("body").style.backgroundImage = "url(./images/desert3.jpg)";
 }


const lightbox = document.createElement('div')
lightbox.id = 'lightbox'
document.body.appendChild(lightbox)


const images = document.querySelectorAll('img')
images.forEach(image => {
   image.addEventListener('click', e => {
      lightbox.classList.add('active')
      const img = document.createElement('img')
      img.src = image.src
      while (lightbox.firstChild) {
         lightbox.removeChild(lightbox.firstChild)
      }
      lightbox.appendChild(img)
   })
})

lightbox.addEventListener('click', e => {
   if (e.target !== e.currentTarget) return
   lightbox.classList.remove('active')
})