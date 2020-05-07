const requestUrl = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';

function requestJSON(url) {
    let request = new XMLHttpRequest();
    request.open('GET', url);
    request.responseType = 'json';
    request.send();
    request.onload = function () {
        let response = request.response;
        processResponse(response);
    }
}

function sendRequest() {
    requestJSON(requestUrl);
}

function processResponse(response) {
    console.log(response);
    document.querySelector("#squadName").innerHTML = response.squadName;
    document.querySelector("#homeTown").innerHTML = response.homeTown;
    document.querySelector("#formed").innerHTML = response.formed;
    document.querySelector("#secretBase").innerHTML = response.secretBase;
    if (response.active) {
        document.querySelector("#active").innerHTML = "2016-present";
    }
    for (i = 0; i < response.members.length; i++) {
        var table = document.getElementById("member-table");
        var row = table.insertRow(-1);
        str = response.members[i].powers;
        stmt = str.toString();
        power = stmt.replace(/,/g, ", ");
        cell = new Array (
            row.insertCell(0),
            row.insertCell(1),
            row.insertCell(2),
            row.insertCell(3)
            );
        text = document.createTextNode(response.members[i].name);
        text2 = document.createTextNode(response.members[i].age);
        text3 = document.createTextNode(response.members[i].secretIdentity);
        text4 = document.createTextNode(power);
        cell[0].appendChild(text);
        cell[1].appendChild(text2);
        cell[2].appendChild(text3);
        cell[3].appendChild(text4);
    }
    
}

sendRequest();
