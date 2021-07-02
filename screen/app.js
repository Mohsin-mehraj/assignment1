const mainPart = document.getElementById('main-part');
const faceBg = document.getElementById('fb-backg');
const paraFirst = document.getElementById('fb-paraone');
const qrCode = document.getElementById('fb-qrcode');
const paraSecond = document.getElementById('fb-paratwo');


const fbTab = document.getElementById('fb-tab')
const twitterTab = document.getElementById('twitter-tab')
const youtubeTab = document.getElementById('youtube-tab')
const instaTab = document.getElementById('instagram-tab')

//twitter
const img = document.createElement('img');
const imgL = document.createElement('img');
//youtube
const img1 = document.createElement('img');
const imgY = document.createElement('img');

//instagram
const img2 = document.createElement('img');
const imgI = document.createElement('img');


//fb
const img3 = document.createElement('img');
const imgF = document.createElement('img');



// twitter handler


twitterTab.addEventListener('click', twitterhandle)


function twitterhandle() {

  img1.remove()
  imgY.remove()
  img2.remove()
  imgI.remove()
  img3.remove()
  imgF.remove()

  img.src = "twitter-bg.jpg"
  document.getElementById('main-part').appendChild(img);
  faceBg.remove();
  img.setAttribute("id", "fb-backg")


  imgL.src = "twitter-logo.png";
  document.getElementById('main-part').appendChild(imgL);
  document.getElementById('fb-log-main').remove();
  imgL.setAttribute("id", "insta-log-main");
 



}


youtubeTab.addEventListener('click', youtubehandle)

function youtubehandle() {
  img.remove()
  imgL.remove()
  img2.remove()
  imgI.remove()
  img3.remove()
  imgF.remove()

  img1.src = "youtube-bg.jpg"
  document.getElementById('main-part').appendChild(img1);
  faceBg.remove();
  img1.setAttribute("id", "fb-backg")

  imgY.src = "yt-logo.png";
  document.getElementById('main-part').appendChild(imgY);


  imgY.setAttribute("id", "yt-log-main");


}


instaTab.addEventListener('click', instahandle)

function instahandle() {
  img.remove()
  imgL.remove()
  img1.remove()
  imgY.remove()
  img3.remove()
  imgF.remove()

  img2.src = "instagram-bg.png"
  document.getElementById('main-part').appendChild(img2);
  faceBg.remove();
  img2.setAttribute("id", "fb-backg")

  imgI.src = "insta.png";
  document.getElementById('main-part').appendChild(imgI);


  imgI.setAttribute("id", "insta-log-main");
 

}



fbTab.addEventListener('click', fbhandle)

function fbhandle() {
  img.remove()
  imgL.remove()
  img1.remove()
  imgY.remove()
  img2.remove()
  imgI.remove()


  img3.src = "fb-bg.png"
  document.getElementById('main-part').appendChild(img3);
  faceBg.remove();
  img3.setAttribute("id", "fb-backg")

  imgF.src = "fb-logo.png";
  document.getElementById('main-part').appendChild(imgF);


  imgF.setAttribute("id", "fb-log-main");
  

}