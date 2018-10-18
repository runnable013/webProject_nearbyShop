
var itemList = new Array(10),

var kategorie = new Array("식료품점", "전자제품점", "식당", "종합");

//입력된 정보를 저장
function input() 
  {
    var i = 1;
      do {
        itemList = document.getElementById("item" + num).value;
      } while(itemList[i] != "");
      for(var i = 0; i<data_list.length; i++){
        if (data_list[i] != "") {
          key = superKey;
          item1 = document.getElementById("kategorie1").value;
    
          output();
          point++;
          superKey++
      }
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
  
  