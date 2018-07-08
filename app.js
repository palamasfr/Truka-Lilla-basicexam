// ide deklaráljátok a függvényeket.

function getData(url, callbackFunc) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      callbackFunc(this);
    }
  };
  xhttp.open('GET', url, true);
  xhttp.send();
}

function successAjax(xhttp) {
  // Innen lesz elérhető a JSON file tartalma, tehát az adatok amikkel dolgoznod kell
  var userDatas = JSON.parse(xhttp.responseText);
  // Innen lehet hívni.
  console.log(userDatas);
}
getData('/json/spaceships.json', successAjax);


function orderByCost(successAjax) {

  var i = userDatas.length - 1;
  var csere;
  while (i > 0) {
    csere = 0;
    for (var j = 0; j < i; j++) {
      if (userDatas.cost_in_credits[j] > userDatas.cost_in_credits[j + 1]) {
        [userDatas.cost_in_credits[j], userDatas.cost_in_credits[j + 1]] = [userDatas.cost_in_credits[j + 1], userDatas.cost_in_credits[j]];
        csere = j;
      }
    }
    i = csere;
  }
  return successAjax;
};

function deleteNull(successAjax) {
  var array2 = [];
  for (var i = 0; i < userDatas.length; i++) {
    if (typeof userDatas.consumables[i] !== 'null') {
      array2.push(userDatas[i]);
    }
  }
  return successAjax;
};

function NullToUnknown(successAjax) {
  for (var i = 0; i < userDatas.length; i++) {
    for (var k in userDatas[i]) {
      if (typeof userDatas[i][k] == 'null') {
        userDatas[i][k] = "unkown";
      }
    }
    return successAjax;
  }
};

function displayOfArrayElements(userDatas) {
  var result = "";
  for (var i = 0; i < userDatas.length; i++) {
    for (var k in userDatas[i]) {
      result += k + " : " + userDatas[i][k] + " , " + "\n";//kiírja az összes key-t + hozzá a value-kat a tömbből
    }
    result += "\n";
  }
  console.log(result);
};


