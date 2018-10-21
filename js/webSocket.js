
var wsUri = "ws://127.0.0.1:8080/";
var output;

function init()
{
    console.log("load"); 
    output = document.getElementById("output");
    testWebSocket();
}

function testWebSocket()
{
    webSocket = new WebSocket(wsUri);
    webSocket.onopen = function(evt){ onOpen(evt); };
    webSocket.onclose = function(evt){ onClose(evt); };
    webSocket.onmessage = function(evt){ onMessage(evt); };
    webSocket.onerror = function(evt){ onError(evt); };
}

var search = "str=";

function onOpen(evt)
{
    doSend(search);
}

function onMessage(evt)
{
    writeToscreen('<span style="border:1px;">'+evt.data+'</span>');   
    
    //webSocket.close();
}

function writeToscreen(message)
{
    var pre = document.createElement("P");
    pre.style.wordWrap = "break-word";
    pre.innerHTML = message;
    output.appendChild(pre);
}

function doSend(message)
{
    webSocket.send(message);
}

function onClose(evt)
{
    writeToscreen("연결해제");
}

function onError(evt)
{
    writeToscreen('<span style="color:blue;">에러</span>'+evt.data);
}

window.addEventListener("load", init, false);

