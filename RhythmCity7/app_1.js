//VARIABLES FOR DATA
let months = ["March","April","May","June","July","August","September"]
let years = ["2019", "2020"]
let mtaData;
//THESE ARE GOING TO BE ARRAYS
let ridershipData19,ridershipData20;
let sum2019,sum2020;
//SCALE FACTOR DATA
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
            //Create each month option
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

        
    //Detect when dropdown has changed
        dropdown1.addEventListener('change',function(){
        //Get the index of the selected option (+2 is because there is no January and February) this way
        //everyy index is related to month number on calandar    
        let selectedMonthNumber = dropdown1.selectedIndex+2;
        //Creating empty arrays for storing data for each month
        ridershipData20 = [];
        ridershipData19 = [];
        sum2019 = 0;
        sum2020 = 0;
        //Iterate over the data array
        for(let i= 0; i<mtaData.length; i++){
            //Data is formated as MM/DD/YYYY so if we want to filter the month take just the first number
            //of the string, it's done by substr() which takes the characters you define on a string
            //If the index selected equals the month then...
            if(selectedMonthNumber==mtaData[i].Date.substr(0,1)){
                //create a temporary variable for storing the data from that entry
                let data2020 = mtaData[i]["Total Estimated Ridership"];
                sum2020 = sum2020 + data2020;
                //Push it to the array for storing
                ridershipData20.push(data2020);
                
                
               //For 2019 data we only have the data of the decreased percentage compared to 2020
                let data2019 = mtaData[i].change;
               //the data is formatted as %xx so we need to cut the % character 
                data2019 = data2019.slice(0, -1);
                //the data is stored as a string and we want a number using this we get number
                data2019 = parseFloat(data2019,10);
                
               //If we want the total ridership we apply the next formula
               //% increase = Increase ÷ Original Number × 100.
                data2019 = data2020 - ((data2019*data2020)/100);
                sum2019= sum2019 + data2019;
                
                //store data in array
                ridershipData19.push(data2019);
               
                
               
            }
        }
        //data is ordered backwards just reverse it
      ridershipData20 = ridershipData20.reverse();
     
      ridershipData19 = ridershipData19.reverse();
     sum2019 = Math.floor(sum2019);
    document.getElementById('rider2019_number').innerHTML=sum2019;
    document.getElementById('rider2020_number').innerHTML=sum2020;
      
    });
        
      
});


//2 canvas so using instance mode
// Sketch One
var s = function( p ) { // p could be any variable name
    let days;
  
    p.setup = function() {
      p.createCanvas(500,300);
      
    };
  
    p.draw = function() {
        
       let gap = 30;
       p.colorMode(p.RGB);
       p.background(255);
       
       
       //iterate over data from 2019
        for(r in ridershipData19){
            let gap = p.width/ridershipData20.length;
           //change color mode to HSB for styling
            p.colorMode(p.HSB)
            //Scale data
            let size = ridershipData19[r]/scaling;
            p.noStroke();
            //fill for getting gradient
            
            p.fill(r*10,70,80,50);

            p.circle(r*gap,p.height/2,size);
        }
       
    };
  

   
  };
  var myp5 = new p5(s, 'c1');
  
  // Sketch Two
  var t = function( p ) { 
  
    p.setup = function() {
      p.createCanvas(500,300);
    };
  
    p.draw = function() {
       
        
        p.colorMode(p.RGB);
        p.background(0);
        
       
        for(r in ridershipData20){
            let gap = p.width/ridershipData20.length;
            p.colorMode(p.HSB)
            let size = ridershipData20[r]/scaling;
            p.noStroke();
            p.fill(r*10,70,80,50);
            p.circle(r*gap,p.height/2,size);
        }
  
    };
   
  };
  var myp5 = new p5(t, 'c2');