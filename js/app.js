var wrapper =document.getElementById("signature-pad");
var clearButton =wrapper.querySelector("[data-action=clear]");
// var changeColorButton = wrapper.querySelector("[data-action=change-color]");
var changeColorButtonRed = wrapper.querySelector("[data-action=change-red]");
var changeColorButtonBlue = wrapper.querySelector("[data-action=change-blue]");
var changeColorButtonYellow = wrapper.querySelector("[data-action=change-yellow]");
// var undoButton = wrapper.querySelector("[data-action=undo]");
 var savePNGButton = wrapper.querySelector("[data-action=save-png]");
// var saveJPGButton = wrapper.querySelector("[data-action=save-jpg]");
// var saveSVGButton = wrapper.querySelector("[data-action=save-svg]");
 var canvas = $("canvas")[0];
var signaturePad = new SignaturePad(canvas, {
  // It's Necessary to use an opaque color when saving image as JPEG;
  // this option can be omitted if only saving as PNG or SVG
  backgroundColor: 'transparent'
});

// Adjust canvas coordinate space taking into account pixel ratio,
// to make it look crisp on mobile devices.
// This also causes canvas to be cleared.
function resizeCanvas() {
  // When zoomed out to less than 100%, for some very strange reason,
  // some browsers report devicePixelRatio as less than 1
  // and only part of the canvas is cleared then.
  var ratio =  Math.max(window.devicePixelRatio || 1, 1);
  // This part causes the canvas to be cleared
  canvas.width = canvas.offsetWidth * ratio;
  canvas.height = canvas.offsetHeight * ratio;
  canvas.getContext("2d").scale(ratio, ratio);

  // This library does not listen for canvas changes, so after the canvas is automatically
  // cleared by the browser, SignaturePad#isEmpty might still return false, even though the
  // canvas looks empty, because the internal data of this library wasn't cleared. To make sure
  // that the state of this library is consistent with visual state of the canvas, you
  // have to clear it manually.
  signaturePad.clear();
}
// On mobile devices it might make more sense to listen to orientation change,
// rather than window resize events.
 window.onresize = resizeCanvas;
 resizeCanvas();
   
function download(dataURL, filename) {
  var blob = dataURLToBlob(dataURL);
  var url = window.URL.createObjectURL(blob);

  var a = document.createElement("a");
  a.style = "display: none";
  a.href = url;
  a.download = filename;

  document.body.appendChild(a);
  a.click();

  window.URL.revokeObjectURL(url);
}

// One could simply use Canvas#toBlob method instead, but it's just to show
// that it can be done using result of SignaturePad#toDataURL.
function dataURLToBlob(dataURL) {
  // Code taken from https://github.com/ebidel/filer.js
  var parts = dataURL.split(';base64,');
  var contentType = parts[0].split(":")[1];
  var raw = window.atob(parts[1]);
  var rawLength = raw.length;
  var uInt8Array = new Uint8Array(rawLength);

  for (var i = 0; i < rawLength; ++i) {
    uInt8Array[i] = raw.charCodeAt(i);
  }

  return new Blob([uInt8Array], { type: contentType });
}

clearButton.addEventListener("click", function (event) {
  signaturePad.clear();
});

/*undoButton.addEventListener("click", function (event) {
  var data = signaturePad.toData();

  if (data) {
    data.pop(); // remove the last dot or line
    signaturePad.fromData(data);
  }
});*/

/*changeColorButton.addEventListener("click", function (event) {
  var r = Math.round(Math.random() * 255);
  var g = Math.round(Math.random() * 255);
  var b = Math.round(Math.random() * 255);
  var color = "rgb(" + r + "," + g + "," + b +")";

  signaturePad.penColor = color;
});*/
changeColorButtonRed.addEventListener("click", function (event) {
  signaturePad.penColor = '#EFC062';
  $('.canvas').removeClass('canvas_cricle')
  $('.canvas').removeClass('canvas_cricle2');
   signaturePad.clear();
});
changeColorButtonYellow.addEventListener("click", function (event) {
  signaturePad.penColor = 'yellow';
  $('.canvas').removeClass('canvas_cricle');
   $('.canvas').addClass('canvas_cricle2')
   signaturePad.clear();
});
changeColorButtonBlue.addEventListener("click", function (event) {
  signaturePad.penColor = 'blue';
  $('.canvas').addClass('canvas_cricle');
  $('.canvas').removeClass('canvas_cricle2');
   signaturePad.clear();
});
savePNGButton.addEventListener("tap", function (event) {
  if (signaturePad.isEmpty()) {
    alert("请书写福字");
  } else {
    var dataURL = signaturePad.toDataURL();
    console.log(dataURL)
    download(dataURL, "signature.png");
    var writename=$('<div class="secound_page">');
    var writename_box='<div class="writename_box"><p>请输入您的名字</p><input type="text" data="name"></div>';
    var confirm_btm='<button class="confirm_btm"></button>'
   $('.signature-pad').append(writename_box)
    $('.signature-pad').append(writename);
    $('.signature-pad').append(confirm_btm);
    touch.on($('.confirm_btm'),'tap',function(){
      var people=$('.writename_box input').val();
      if(people==''){
        alert('请输入您的名字');
        return false;
      }
      $('.writename_box').css('display','none');
      $('.confirm_btm').css('display','none');
      var bigPic=$('<div class="bigPic"><img src="images/write_FU_back1.jpg" alt=""><div>');
      var react_zuo=$('<div class="fin_button"><button class="react_zuo"></button><button class="fin_zuo"></button></div>')
      $('.signature-pad').append(bigPic);
      $('.signature-pad').append(react_zuo);
       touch.on($('.react_zuo'),'tap',function(){
        $('.secound_page').css('display','none');
        $('.fin_button').css('display','none');
        $('.bigPic').css('display','none');
       })
       touch.on($('.fin_zuo'),'tap',function(){
        $('.secound_page').css('display','none');
        $('.fin_button').css('display','none');
        $('.bigPic').css('display','none');
       })
    })



  }
});
 slider.onchange = function(){
  if (signaturePad.isEmpty()) {
   slider.value='2';
  } else {
      var rat=slider.value;
      var canvas=$('canvas')[0];
      var width=canvas.getAttribute("width")
      var height=canvas.getAttribute("height")
      var content=canvas.getContext("2d");
      var data=content.getImageData(0,0,width,height);
      canvas.width = canvas.offsetWidth * rat;
      canvas.height = canvas.offsetHeight * rat;
      content.putImageData(data,0,0);
    }

   }

/*saveJPGButton.addEventListener("click", function (event) {
  if (signaturePad.isEmpty()) {
    alert("Please provide a signature first.");
  } else {
    var dataURL = signaturePad.toDataURL("image/jpeg");
    download(dataURL, "signature.jpg");
  }
});

saveSVGButton.addEventListener("click", function (event) {
  if (signaturePad.isEmpty()) {
    alert("Please provide a signature first.");
  } else {
    var dataURL = signaturePad.toDataURL('image/svg+xml');
    download(dataURL, "signature.svg");
  }*/
// });
