//Read InsideFolder.txt File
fetch("./text/sect04-03.txt").then(function(response) {
    response.text().then(function(text) {
      document.getElementById("section04-03").innerHTML =text  
    });
});

fetch("./text/sect04-02.txt").then(function(response) {
    response.text().then(function(text) {
      document.getElementById("section04-02").innerHTML =text  
    });
});

fetch("./text/sect04-01.txt").then(function(response) {
    response.text().then(function(text) {
      document.getElementById("section04-01").innerHTML =text  
    });
});


fetch("./text/sect05-04.txt").then(function(response) {
  response.text().then(function(text) {
    document.getElementById("section05-04").innerHTML =text  
  });
});

fetch("./text/sect05-03.txt").then(function(response) {
  response.text().then(function(text) {
    document.getElementById("section05-03").innerHTML =text  
  });
});

fetch("./text/sect05-02.txt").then(function(response) {
  response.text().then(function(text) {
    document.getElementById("section05-02").innerHTML =text  
  });
});

fetch("./text/sect05-01.txt").then(function(response) {
  response.text().then(function(text) {
    document.getElementById("section05-01").innerHTML =text  
  });
});

fetch("./text/sect06-02.txt").then(function(response) {
  response.text().then(function(text) {
    document.getElementById("section06-02").innerHTML =text  
  });
});

fetch("./text/sect06-01.txt").then(function(response) {
  response.text().then(function(text) {
    document.getElementById("section06-01").innerHTML =text  
  });
});