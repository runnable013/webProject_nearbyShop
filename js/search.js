/*
1. 검색필터 구현
*/

function enterKey()
{ if(event.keyCode == 13) { search(); } }

//서버에서 데이터를 받아올 배열
var loadItem = new Array("출력1", "출력2", "출력3", "출력4");

var outputItem = new Array(loadItem.length);
function search()
{
    load();
    for(var i=0; i<loadItem.length; i++) {
        outputItem[i] =
        '<div>' +
        loadItem[i] +
        '</div>';
    }
    output.innerHTML = outputItem.join("");
}

//서버에서 데이터를 로드
function load()
{    
}
