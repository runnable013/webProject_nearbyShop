
var wsUri = "ws://echo.websocket.org/"
var output = 

function init(){
    output = document.getElementById("output");
    testWebSocket();
}

function testWebSocket() {
    webSocket = new WebSocket(wsUri);
    webSocket.onopen = function(evt){ onOpen(evt); };
    webSocket.onclose = function(evt){ onClose(evt); };
    webSocket.onmessage = function(evt){ onMessage(evt); };
    webSocket.onerror = function(evt){ onError(evt); };
}

function onOpen(evt) {
    writeToscreen("연결완료");
    doSend("테스트 메세지");
}

function onClose(evt) {
    writeToscreen("연결해제");
}

function onMessage(evt) {
    writeToscreen('<span style="color:blue;">수신: '+evt.data+'</span>');
    webSocket.close();
}

function onError(evt){
    writeToscreen('<span style="color:blue;">에러</span>'+evt.data);
}

function doSend(message){
    writeToscreen("발신: "+message);
    webSocket.send(message);
}

function writeToscreen(message){
    var pre = document.createElement("P");
    pre.style.wordWrap = "break-word";
    pre.innerHTML = message;
    output.appendChind(pre);
}

window.addEventListener("load", init, false);
