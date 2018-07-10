// ide deklaráljátok a függvényeket.

function orderByCost(userDatas) {

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
  return userDatas;
};

function deleteNull(userDatas) {
  var array2 = [];
  for (var i = 0; i < userDatas.length; i++) {
    if (typeof userDatas.consumables[i] !== 'null') {
      array2.push(userDatas[i]);
    }
  }
  return userDatas;
};

function NullToUnknown(userDatas) {
  for (var i = 0; i < userDatas.length; i++) {
    for (var k in userDatas[i]) {
      if (typeof userDatas[i][k] == 'null') {
        userDatas[i][k] = "unkown";
      }
    }
    return userDatas;
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
  return result;
};

function onePersonOnBoat(userDatas) {

  var result = [];
  for (var i = 0; i < userDatas.length; i++) {
    if (typeof userDatas.crew[i] === 1) {
      result.push(userDatas[i]);
    }
  }
  return result;
};

function carGoMax(userDatas) {

  var result = userDatas[0];
  for (var i = 0; i < userDatas.length; i++) {
    if (userDatas[i].cargo_capacity > result.cargo_capacity) {
      result = userDatas[i];
    }
  }
  return result;
};

function allPassengers(userDatas) {
  var result = 0;
  for (var i = 0; i < userDatas.length; i++) {
    result += userDatas[i].passengers;
  }
  console.log(result);
};

function maxLengthPicName(userDatas) {
  var result = userDatas[0];
  for (var i = 0; i < userDatas.length; i++) {
    if (userDatas[i].lengthiness > result.lengthiness) {
      result = userDatas[i].image;
    }
  }
  return result;
};


function searchByName(inputName, userDatas) {
  var inputName = [];
  for (var i = 0; i < userDatas.length; i++) {
    for (var j = i + 1; j < userDatas.length; j++) {
      var compNames = userDatas[i].model.localeCompare(userDatas[j].model);
      if (compNames > 0) {
        [userDatas[i], userDatas[j]] = [userDatas[j], userDatas[i]];
      }
    }
    if (inputName.toLowercase() == userDatas[i].toLowercase().indexOf().model) {
      inputName = userDatas[i];
    }
  }
  return inputName;
};


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
  orederByCost(userDatas);
  deleteNull(userDatas);
  NullToUnknown(userDatas);
  console.log(displayOfArrayElements);
  console.log(onePersonOnBoat);
  console.log(carGoMax);
  console.log(allPassengers);
  console.log(maxLengthPicName);
  console.log(searchByName);

}
getData('/json/spaceships.json', successAjax);

