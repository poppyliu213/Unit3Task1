function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  
  button1 = createButton('London');
  button1.position(96, 20);
  
  button1.mousePressed(function() {
  loadJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22nome%2C%20ak%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",
  weatherLoaded);
  });
  
  button2 = createButton('New York');
  button2.position(192, 20);
  
  button2.mousePressed(function() {
  loadJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22New%20York%2C%20New%20York%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",
  weatherLoaded);
  });
  
  button3 = createButton('Tokyo');
  button3.position(288, 20);
  
  button3.mousePressed(function() {
  loadJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22Tokyo%2C%20Tokyo%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",
  weatherLoaded);
  });
  
  button4 = createButton('Beijing');
  button4.position(384, 20);
  
  button4.mousePressed(function() {
  loadJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22Beijing%2CChina%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",
  weatherLoaded);
  });
  
  button5 = createButton('Havana');
  button5.position(480, 20);
  
  button5.mousePressed(function() {
  loadJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22Havana%EF%BC%8CCuba%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",
  weatherLoaded);
  });
}

function weatherLoaded(data) {
  var temp = data.query.results.channel.item.condition.temp;
  var windSpeed = data.query.results.channel.wind.speed;
  var windDirection = data.query.results.channel.wind.direction;
  
  var tempD2H = data.query.results.channel.item.forecast[0].high;
  var tempD2L = data.query.results.channel.item.forecast[0].low;
  
  print(tempD2H);
  print(tempD2L);
  
  background(255);
  
  textSize(50);
  textFont("Arial");
  textAlign(RIGHT);
  
    fill(186,228,229)
    text(windSpeed, 110, windowHeight - 150);
    
    fill(248,98,84,90);
    text(temp, 110, windowHeight - 120);
    
    fill(127,148,176,80);
    text(windDirection, 110, windowHeight - 90);
    
    
    fill(248,98,84)
    textSize(temp);
    noStroke();
    ellipse(windowWidth / 2, windowHeight / 2, temp * 2, temp * 2);
    
    translate(windowWidth / 2, windowHeight / 2);
    fill(127,148,176);
    noStroke();
    
    fill(186,228,229)
    textSize(windSpeed*2);
    angleMode(DEGREES); 
    rotate(windDirection);
    text("WIND",0,0);
    fill(127,148,176)
    triangle(0, 0, temp*2, 2,-temp*2,2);
    
    

}


