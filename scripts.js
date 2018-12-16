

alert("asalamualaikum kawan");

function toggleImage(){
	var image = 
	document.getElementById("gambar");
	
	 if (image.src.match("Android1")) {
		 image.src = " Gambar/Android2.png";
	 }else{
		 image.src = "Gambar/Android1.png";
	 }
}

(function (){
	
	var timeEl=
	document.getElementById("time");
	timeEl.innerHTML=new Date();
	
})();
