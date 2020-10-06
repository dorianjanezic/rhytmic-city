let months = ["March","April","May","June","July","August","September"]
let years = ["2019", "2020"]
let mtaData;
let ridershipData19,ridershipData20;
let scaling = 10000;


window.addEventListener('load', function(){
    console.log('page is loaded');


    // 1. button (MONTH)
    let dropdown1 = document.getElementById('subDate-dropdown');
       
        let defaultOption1 = document.createElement('option');
        defaultOption1.text = 'Month';
        dropdown1.add(defaultOption1);

        for(let i=0; i<months.length;i++){
            let monthOption = document.createElement('option');
            monthOption.text = months[i];
            dropdown1.add(monthOption);

        }
        dropdown1.selectedIndex = 0;
    //Load Data
        let API_SRC = "newyork1.json";

        fetch(API_SRC)
        .then(response => response.json())
        .then(data => {
            mtaData = data;
            //console.log(data);
           
        });

        
    //Detecting selection and retieving values (Both me and Yiru don't udnerstand, Enrique please explain)
        dropdown1.addEventListener('change',function(){
        let selectedMonthNumber = dropdown1.selectedIndex+2;
        ridershipData20 = [];
        ridershipData19 = [];

        for(let i= 0; i<mtaData.length; i++){
            if(selectedMonthNumber==mtaData[i].Date.substr(0,1)){
                let data2020 = mtaData[i]["Total Estimated Ridership"];
                ridershipData20.push(data2020);
                
                //% increase = Increase ÷ Original Number × 100.
                //data2019 = x / data2020 x100 
                let data2019 = mtaData[i].change;
                data2019 = data2019.slice(0, -1);
                data2019 = parseFloat(data2019,10);
                data2019 = data2020 + ((data2019*data2020)/100);
                ridershipData19.push(data2019);
                console.log(data2019);
                
               
            }
        }
      ridershipData20 = ridershipData20.reverse();
     
      ridershipData19 = ridershipData19.reverse();
     
    
      
    });
        
      
});


// save this file as sketch.js
// Sketch One
var s = function( p ) { // p could be any variable name
 
    p.setup = function() {
      p.createCanvas(400, 300);
    };
  
    p.draw = function() {
       p.colorMode(p.RGB);
       p.background(255);
       
        for(r in ridershipData19){
            let size = p.width/ridershipData19.length;
            //p.colorMode(p.HSB)
            let hue = p.map(ridershipData19[r],10000,1000000,0,255);
            p.noStroke();
            p.fill(0,0,hue,200);
            p.rect(r*20,0,20,p.height);
        }
       
    };
  };
  var myp5 = new p5(s, 'c1');
  
  // Sketch Two
  var t = function( p ) { 
  
    p.setup = function() {
      p.createCanvas(400, 300);
    };
  
    p.draw = function() {
        p.colorMode(p.RGB);
        p.background(255);
        
       
        for(r in ridershipData20){
            let size = p.width/ridershipData20.length;
            //p.colorMode(p.HSB)
            let hue = p.map(ridershipData20[r],10000,1000000,0,255);
            p.noStroke();
            p.fill(0,0,hue,200);
            p.rect(r*20,0,20,p.height);
        }
  
    };
  };
  var myp5 = new p5(t, 'c2');