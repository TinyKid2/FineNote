
let participantList = [];

var username = document.querySelector("#username");
var resultArea = document.querySelector("#result");
var nameListDiv = document.querySelector("#nameList")
function newRegister(){
    if(username.value.trim() !== "")
    {
        participantList.push(username.value)
        

        
        var newP = document.createElement("p");
        var newText = document.createTextNode(`${username.value}님이 신청되었습니다.`);
        newP.appendChild(newText);
        nameListDiv.appendChild(newP);
        username.value = "";
    // 입력 필드 초기화
    }
    else{
        alert("이름을 입력해주세요.");
    }
}



function lengthNameList(){
    return participantList.length
}


function getNameList(){
    return this.participantList
}

function searchName(name){
    
    resultArea.innerHTML = "";
    if(participantList.includes(name)){
        var result = `${name}은 참가자 목록에 존재합니다.`
        
    }
    else{
        var result = `${name}은 참가자 목록에 존재하지 않습니다.`
        
    }
    var newP = document.createElement("p");
    var newText = document.createTextNode(result);
    newP.appendChild(newText);
    resultArea.appendChild(newP);

    username.value = "";
}

function checkNameList(){
    nameListDiv.innerHTML = "";
    
    participantList.foreach(function(name){
        
        var newP = document.createElement("p");
        var newText = document.createTextNode(name);
        newP.appendChild(newText);
        nameListDiv.appendChild(newP);
    });
    
}


