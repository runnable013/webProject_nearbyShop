
var key_list,
  name_list,
  item1_list,
  item2_list;

var kategorie = new Array("식료품점", "전자제품점", "식당", "종합");

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

  var addressNum = 0;
  var searchAddress = new Array();
  function find(){
    alert("123");
    searchAddress[addressNum++] = '<div>검색된 주소</div>';
    test3.innerHTML = searchAddress.join("");
  }

//저장된 카테고리 출력
  window.onload = function() {
    for (i = 0; i < kategorie.length; i++) {
      document.getElementById("kategorie1").options[i] = new Option( kategorie[i], i );
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
  
  