function popupOpen(id){
	var popUrl = "../popUp.html?id="+id;	//팝업창에 출력될 페이지 URL
	var popOption = "width=370, height=360, resizable=no, scrollbars=no, status=no;";    //팝업창 옵션(optoin)
		window.open(popUrl,"",popOption);
	}

function getXmlHttpObject() {
    var xmlHttp;
    try {
        // Firefox, Opera 8.0+, Safari
        xmlHttp = new XMLHttpRequest();
    } catch (e) {
        // Internet Explorer
        try {
            xmlHttp = new ActiveXObject("Msxml2.XMLHTTP");
        } catch (e) {
            xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
    }
    if (!xmlHttp) {
        alert("Your browser does not support AJAX!");
    }
    return xmlHttp;
}


function ajax(url, onSuccess, onError) {

    var xmlHttp = getXmlHttpObject();

    xmlHttp.onreadystatechange = function() {
      if (this.readyState === 4) {

            // onSuccess
            if (this.status === 200 && typeof onSuccess == 'function') {
                onSuccess(this.responseText);
            }

            // onError
            else if(typeof onError == 'function') {
                onError();
            }

        }
    };
    xmlHttp.open("GET", url, true);
    xmlHttp.send(null);
    return xmlHttp;
}​

function Engineer_Information_Processing()
{
	alert("AA");
}