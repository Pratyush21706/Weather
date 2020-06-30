var bg,weather,a = 1,z=1,temp,c1,h1,input1,button,location,wind,humidity;

var api = `http://api.openweathermap.org/data/2.5/weather?q=`;
var city = `Delhi`;
var apiKey =`&appid=ca869b8d4f1a1a9fa1b200e5cef8d33a`;
var units = `&units=metric`

function preload(){

bg = loadImage("s1.png");
c1 = loadImage("cold.jpg")
h1 = loadImage("sunny1.jpg")
s1 = loadImage("1.png")

// bg1 = loadImage("ad2.jpg")
}

function setup(){
  createCanvas(window.innerWidth,window.innerHeight);
  input1 = createInput(``).attribute(`placeholder`,`Enter Your Location`);
  input1.position(width/2.3,height/1.1);
  input1.style(`font-size`,`30px`)

  button = createButton(`🔎`)
  button.position(width/1.49,height/1.1)
  button.mousePressed(weatherAsk);
  button.style(`font-size`,`20px`)


  }
  function weatherAsk(){
     city = input1.value();
    var url = api+city+apiKey+units;
    loadJSON(url, gotData);
  }

  function gotData(data){
  weather = data
  
  }
  
  function draw(){
    background(s1);
    console.log(z)
    drawSprites();
    if(weather){
      z = 2;
      humidity = weather.main.humidity;
  temp = weather.main.temp;
  
  console.log("Loaded")
  a=2;
    }
   
    // }
    if(a===2){
      if(temp<20){
        background(c1)
      }
      if(temp>20){
        background(h1)
      }
      fill("white");
      textSize(40);
      text("Temperature: "+temp+"°C",60,height/2)
      text("Humidity: "+humidity+"°C",60,height/1.5)
      text(city,width/2,height/3.5)
    }
    if(z = 2){
      fill("black");
      textSize(40);
      text(`loaded`,width/2,height/2)
    }
  }
  // // `http://api.openweathermap.org/data/2.5/weather?q=london&appid=ca869b8d4f1a1a9fa1b200e5cef8d33a&units=metric`

  // http://api.openweathermap.org/data/2.5/weather?q=llondon&appid=ca869b8d4f1a1a9fa1b200e5cef8d33a&units=metric