let months = ["March","April","May","June","July","August","September"]


window.addEventListener('load', function(){
    console.log('page is loaded');


    // first button
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
    
        let API_SRC = "newyork1.json";

        fetch(API_SRC)
        .then(response => response.json())
        .then(data => {
             console.log(data);
        });

    dropdown1.addEventListener('change',function(){
        let selectedMonth = dropdown1.options[dropdown1.selectedIndex].text;
      
    });
        
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
})