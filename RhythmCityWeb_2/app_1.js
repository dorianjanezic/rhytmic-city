let months = ["March","April","May","June","July","August","September"]
let years = ["2019", "2020"]
let mtaData;
let ridershipData;
let scaling = 10000;


window.addEventListener('load', function(){
    console.log('page is loaded');


    // 1. button (MONTH)
    let dropdown1 = document.getElementById('subDate-dropdown');
       
        let defaultOption1 = document.createElement('option');
        defaultOption1.text = 'Choose Month';
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
            console.log(data);
           
        });

        
    //Detecting selection and retieving values
        dropdown1.addEventListener('change',function(){
        let selectedMonthNumber = dropdown1.selectedIndex+2;
        ridershipData = [];
        for(let i= 0; i<mtaData.length; i++){
            if(selectedMonthNumber==mtaData[i].Date.substr(0,1)){
               
                ridershipData.push(mtaData[i]["Total Estimated Ridership"]);
               
            }
        }
      
    });
   
    // 2. button (YEAR)
    /*
    let dropdown2 = document.getElementById('year-dropdown');
       
        let defaultOption2 = document.createElement('option');
        defaultOption2.text = 'Choose Year';
        dropdown2.add(defaultOption2);

        for(let i=0; i<years.length;i++){
            let yearOption= document.createElement('option');
            yearOption.text = years[i];
            dropdown2.add(yearOption);

        }
        dropdown2.selectedIndex = 0;

        */
        
        /*request.onload = function() {
            if (request.status === 200) {
            //const data = JSON.parse(request.responseText);
            const data = JSON.parse(request.responseText);

            let option1;
            for (let i = 0; i < data.length; i++) {

                // storage new option in tag option
                option1 = document.createElement('option');
                // get data from types under 
                option1.text = data[i].Line;

                //option.value = data[i].abbreviation;
                dropdown1.add(option1);   
            }
            } else {
            // Reached the server, but it returned an error
            }  
            
            //button for
            // if (request.status === 200) {
            //     //const data = JSON.parse(request.responseText);
            //     const data = JSON.parse(request.responseText);
    
            //     let option2;
            //     for (let j = 0; j < data.length; j++) {
    
            //         // storage new option in tag option
            //         option2 = document.createElement('option');
            //         // get data from types under 
            //         option2.text = data[j].Line;
    
            //         //option.value = data[i].abbreviation;
            //         dropdown2.add(option2);
            //     }
            //     } else {
            //     // Reached the server, but it returned an error
            //     }  

      }

      
        request.onerror = function() {
            console.error('An error occurred fetching the JSON from ' + url);
        };
        
        request.send();
  */ 
});


function setup(){
  
    createCanvas(600, 400);
  
    
   
}

function draw(){
    colorMode(RGB)
    background(200, 80, 110);
   
    for(r in ridershipData){
        colorMode(HSB)
        let size = ridershipData[r]/scaling;
        noStroke();
        fill(190+(r*5),70,70,500);
        ellipse(r*(width/30),height/2,size)
    }
   
}
