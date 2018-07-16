// ide deklaráljátok a függvényeket.

function orderByCost(arr) {

  var i = arr.length - 1;
  var csere;
  while (i > 0) {
    csere = 0;
    for (var j = 0; j < i; j++) {
      if (arr.cost_in_credits[j] > arr.cost_in_credits[j + 1]) {
        [arr.cost_in_credits[j], arr.cost_in_credits[j + 1]] = [arr.cost_in_credits[j + 1], arr.cost_in_credits[j]];
        csere = j;
      }
    }
    i = csere;
  }
  return arr;
};

function deleteNull(arr) {
  var arr = [];
  for (var i = 0; i < arr.length; i++) {
    if (typeof arr.consumables[i] !== 'null') {
      arr.push(arr[i]);
    }
  }
  return arr;
};

function NullToUnknown(arr) {
  for (var i = 0; i < arr.length; i++) {
    for (var k in arrDatas[i]) {
      if (typeof arrDatas[i][k] == 'null') {
        arr[i][k] = "unkown";
      }
    }
    return arr;
  }
};

function SpaceshipList(spaceship) {
  var spaceship = document.querySelector(".spaceship-list")
  var keys = Object.keys(userDatas)
  var url = '/img' + ship.image;
  var spaceImage = document.createElement('img');
  spaceImage.src = url
  for (var i = 0; i < userDatas.length; i++) {
    spaceship.innerHTML += keys + "\n" + userDatas[i] + "\n" + url;
  }
  return spaceship;
};


function displayOfArrayElements(arr) {
  var result = "";
  for (var i = 0; i < arr.length; i++) {
    for (var k in arr[i]) {
      result += k + " : " + arr[i][k] + " , " + "\n";//kiírja az összes key-t + hozzá a value-kat a tömbből
    }
    result += "\n";
  }
  return result;
};

function onePersonOnBoat(arr) {

  var result = [];
  for (var i = 0; i < arr.length; i++) {
    if (typeof arr.crew[i] === 1) {
      result.push(arr[i]);
    }
  }
  return result;
};

function carGoMax(arr) {

  var result = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].cargo_capacity > result.cargo_capacity) {
      result = arr[i];
    }
  }
  return result;
};

function allPassengers(arr) {
  var result = 0;
  for (var i = 0; i < arr.length; i++) {
    result += parseInt(arr[i].passengers);
  }
  return result;
};

function maxLengthPicName(arr) {
  var result = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].lengthiness > result.lengthiness) {
      result = arr[i].image;
    }
  }
  return result;
};


function searchByName(name, userDatas) {
  var name = [];
  for (var i = 0; i < userDatas.length; i++) {
    for (var j = i + 1; j < userDatas.length; j++) {
      var compNames = userDatas[i].model.localeCompare(userDatas[j].model);
      if (compNames > 0) {
        [userDatas[i], userDatas[j]] = [userDatas[j], userDatas[i]];
      }
    }
    if (name.toLowercase() == userDatas[i].toLowercase().indexOf().model) {
      name = userDatas[i];
    }
  }
  return name;
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
  orederByCost(userDatas);
  deleteNull(userDatas);
  NullToUnknown(userDatas);
  console.log(userDatas);
  displayOfArrayElements(userDatas);
  onePersonOnBoat(userDatas);
  carGoMax(userDatas);
  allPassengers(userDatas);
  maxLengthPicName(userDatas);
  searchByName(userDatas);

}
getData('/json/spaceships.json', successAjax);

