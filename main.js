var dog = 0;
var cat = 0;
var tiger = 0;
var cow = 0;

function startClassification() {
  navigator.mediaDevices.getUserMedia({ audio: true });
  classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/fHBBV7IKv/model.json', modelReady);
}

function modelReady() {
  classifier.classify(gotResults);
}
function gotResults(error, results) {
  if (error) {
    console.error(error);
  }
  else {
    console.log(results);
    random_number_r = Math.floor(Math.random() * 255) + 1;
    random_number_g = Math.floor(Math.random() * 255) + 1;
    random_number_b = Math.floor(Math.random() * 255) + 1;

    document.getElementById("detected").innerHTML = "Detected dog - " + dog + " Detected Cat - " + cat + " Detected Tiger - " + tiger + " Detected Cow - " + cow;
    document.getElementById("detected").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_b + ")";

    document.getElementById("animal_voices").innerHTML = "Detected voice is of - " + results[0].label;
    document.getElementById("animal_voices").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_b + ")";
    img = document.getElementById("animal_images");

    if (results[0].label == "Barking") {
      img.src = "hhttps://shravaripatil.github.io/Sound_controlled_animals/bark.gif";
      dog = dog + 1;

    }
    else if (results[0].label == "Meowing") {
      img.src = "https://shravaripatil.github.io/Sound_controlled_animals/meow.gif";
      cat = cat + 1;
    }
    else if (results[0].label == "Roar") {
      img.src = "https://i.pinimg.com/originals/d5/6b/b2/d56bb29f18675d50983ed96da66e7fb3.gif";
      tiger = tiger + 1;
    }
    else if (results[0].label == "Mooing"){
      img.src = "https://i.gifer.com/Za9e.gif";
      cow=cow+1;
    }
    else{
      img.src = "https://shravaripatil.github.io/Sound_controlled_animals/listen.gif";
    }
  }
}
