/*
 이름규칙 수정

 1.output함수 수정
*/

var point = 0;
var superKey = 0;

// 임시 item 데이터베이스
var key_list = new Array(10),
  name_list = new Array(10),
  item1_list = new Array(10),
  item2_list = new Array(10);

var kategorie = new Array("식품", "전자제품", "가구");

function enterKey(){
  if(event.keyCode == 13){
    input();
  }
}

//입력된 정보를 저장
function input() {
  if(point < 10){
    name_list[point] = document.getElementById("name").value;
    if (name_list[point] != "") {
      key_list[point] = superKey;
      item1_list[point] = document.getElementById("kategorie1").value;
      item2_list[point] = document.getElementById("kategorie2").value;

      document.getElementById("name").value = "";
      document.getElementById("kategorie2").value = "";

      output();
      point++;
      superKey++
    }
  }
  else{
    alert("페이지기능 추가예정");
  }
}

//저장된 카테고리 출력
window.onload = function() {
  for (i = 0; i < kategorie.length; i++) {
    document.getElementById("kategorie1").options[i] = new Option(
      kategorie[i],
      i
    );
  }
};

/*
function itemChange() {
   for (i = 0; i < point; i++) {
     document.form.data.options[i] = new Option(name_list[i], i);
   }
 }
 */

// 저장된 정보를 출력
// 1.페이지 기능추가, 2.나중에 'input동적 생성부분' 수정
var add_item = new Array();
function output() {
  add_item[point] =
    '<div id="items' +
    superKey +
    '"> <div class="item" style="width:20px"> &nbsp </div> <div class="item"> 제품명: ' +
    name_list[point] +
    '</div> <div  class="item"> 카테고리: ' +
    kategorie[item1_list[point]] +
    '</div> <div  class="item"> 제품분류: ' +
    item2_list[point] +
    '</div> <button id="remove' +
    point +
    '" onclick="removeItem(' +
    key_list[point] +
    ')">X</button> </div>';
  test2.innerHTML = add_item.join("");
}

//정보 삭제
function removeItem(remKey) {
  for(i=0; i<key_list.length; i++){
    if(key_list[i]==remKey){
      add_item.splice(i, 1);
      key_list.splice(i, 1);
      name_list.splice(i, 1);
      item1_list.splice(i, 1);
      item2_list.splice(i, 1);
      break;
    }
  }
  var delItem = document.getElementById("items"+remKey);
  delItem.remove();
  point--;
}