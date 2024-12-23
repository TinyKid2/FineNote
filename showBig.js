var bigPics = document.querySelector("#cup"); // 큰 이미지 가지고 오기
var smallPics = document.querySelector(".small"); //작은 이미지 가지고 오기


for(var i=0;i<smallPics.length;i++){
    smallPics[i].onclick = showBig;
}



function showBig(){
    var newPic=this.src;
    bigPics.setAttribute("src",newPic)
}