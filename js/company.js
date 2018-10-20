/*
  수정
  1. 입력된 DB에서 정보 추출
  2. find_address js파일 따로 분류
*/

var itemSize = 4;
var itemList = new Array(itemSize);

var kategorie = new Array("식료품점", "전자제품점", "식당", "종합");

//입력된 정보를 저장
function input() {
  for(var i = 0; i < itemSize; i++)
  {
    itemList[i] = document.getElementById("item"+i).value;
    console.log(itemList[i]);
    if(itemList[i] == "")
    {
      alert("정보를 입력해주세요.");
      return -1;
    }
  }
  alert("데이터 불러오기 성공");
}

  var address = new Array("검색결과1", "검색결과2", "검색결과3", "검색결과4");
  var outputAddress = new Array();

  var findWindow
  function openFindAddress()
  {  findWindow = window.open('find_address.html', '주소찾기' ,'width=600, height=400'); }

  function find()
  {
    load();
    for(var i=0; i<address.length; i++)
    {
      outputAddress[i] =
      '<div><button onclick="choice(address[' +
      i +
      '])">' +
      address[i] +
      '</button></div>';
    }
    output.innerHTML = outputAddress.join("");
  }

  //서버에서 데이터 로드
  function load(){

  }

  function choice(address)
  {
    document.getElementById("item2").value = address;
    window.close();
  }

//저장된 카테고리 출력
  window.onload = function()
  {
    for (i = 0; i < kategorie.length; i++)
    { document.getElementById("item1").options[i] = new Option( kategorie[i], i ); }
  };
  
  /*
  function itemChange() {
     for (i = 0; i < point; i++) {
       document.form.data.options[i] = new Option(name_list[i], i);
     }
   }
*/
  
  
  