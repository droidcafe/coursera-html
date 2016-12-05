var theBody = document.getElementsByTagName("body")[0];
var leftDiv = document.getElementById('leftSide');
var rightDiv = document.getElementById('rightSide');


var numberOfFaces = 0;
theBody.onclick = function onFailure() {
  alert('Game Over');
  theBody.onclick = null;
  leftDiv.lastChild.onclick = null;
}

function generateFaces(){

  var body = document.getElementsByTagName('body')[0];
console.log('count '+numberOfFaces);

  for (var i = 0; i < numberOfFaces; i++) {
    console.log('loop '+i);
    var image_node = getPic();
    leftDiv.appendChild(image_node);
  }
  var images = leftDiv.cloneNode(true);
  images.removeChild(images.lastChild);
  console.log('child count '+images.childElementCount);
  console.log(''+images.lastChild.name);
  rightDiv.appendChild(images);

  leftDiv.lastChild.onclick = function success(event) {
     event.stopPropagation();
     generate();
  }
}

function generate() {
  numberOfFaces += 5;
  while (leftDiv.firstChild) {
    leftDiv.removeChild(leftDiv.firstChild);
  }
  while (rightDiv.firstChild) {
    rightDiv.removeChild(rightDiv.firstChild);
  }
  generateFaces();
}


function getPic() {
  var image_node = document.createElement('img');
  image_node.src = 'http://home.cse.ust.hk/~rossiter/mooc/matching_game/smile.png';
  var left = Math.floor(Math.random () * 400);
  var top = Math.floor(Math.random () * 380) + 20;
  // image_node.src = 'smile.png';
  image_node.style.left = left+"px";
  image_node.style.top = top+"px";

  return image_node;
}
