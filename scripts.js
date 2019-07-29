const app = document.getElementById('root');
const container = document.createElement('div');

var titles = [];
var explanation = [];
var releasedate = [];
var score = [];
var count = 0;


container.setAttribute('class', 'container');

var request = new XMLHttpRequest();
var table = document.getElementById("myTable");
request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);
request.onload = function () {

  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
  if (request.status >= 200 && request.status < 400) {

    data.forEach(movie => {
        titles.push(movie.title);
        explanation.push(movie.description);
        releasedate.push(movie.release_date);
        score.push(movie.rt_score);

      });

    
    for (var i = 0; i < titles.length; i++) {
      var table = document.getElementById("movies");

        var row = table.insertRow(0);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(1);

        count = count + 1;
        cell1.innerHTML = '<div class="display-4">' + count + '</div>' ;
        cell2.innerHTML = '<b>' + titles[i] + '</b>' + ' <i> <small>' + releasedate[i] + "</small> </i> | " + explanation[i];
        cell3.innerHTML = 'Rating: <i>' + score[i] + '</i>';

        console.log(  titles[i]);
        //Do something
    }

    console.log(explanation[3]);

  } else {
    const errorMessage = document.createElement('marquee');
    errorMessage.textContent = `There is no data present`;
    app.appendChild(errorMessage);
  }
}

request.send();


