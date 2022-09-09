window.onload=iniciar;
const redNeuron = new brain.NeuralNetwork();
const redNeuron1=new brain.NeuralNetwork();

function iniciar(){
    

    const datos=[
        {
            input:{"R": 0.78, "G": 0.9, "B": 1},
            output:{"claro": 1}
        },

        {
            input:{"R": 0.2, "G": 0.11, "B": 0.2},
            output:{"oscuro": 1}
        },
        {
            input:{"R": 0.1, "G": 0.2, "B": 0.3},
            output:{"oscuro": 1}
        },
        {
            input:{"R": 0.74, "G": 0.78, "B": 0.86},
            output:{"claro": 1}
        }
    ];
    redNeuron.train(datos);
/*
    const datos1=[
        {
            input:{"Celsius":12},
            output:{"53.6": 1}
        },
        {
            input:{"Celsius":24},
            output:{"75.2": 1}
        },
        {
            input:{"Celsius":-21},
            output:{"-5.8": 1}
        },
        {
            input:{"Celsius":4},
            output:{"39.2":1}
        },
        {
            input:{"Celsius":16},
            output:{"60.8":1}
        },
        {
            input:{"Celsius":32},
            output:{"89.6":1}
        },
        {
            input:{"Celsius":6},
            output:{"42.8":1}
        },
        {
            input:{"Celsius":42},
            output:{"107.6":1}
        },
        {
            input:{"Celsius":3},
            output:{"37.4":1}
        },
        {
            input:{"Celsius":34},
            output:{"93.2":1}
        },
    ]
    redNeuron1.train(datos1);*/
   
    
}


function calculate(){  
    var color = document.getElementById("color").value;
    var red = parseInt(color.substr(1,2), 16)/255;
    var green = parseInt(color.substr(3,2), 16)/255;
    var blue = parseInt(color.substr(5,2), 16)/255;
    var r=red.toFixed(2);
    var g=green.toFixed(2);
    var b=blue.toFixed(2);
    console.log(`red: ${r}, green: ${g}, blue: ${b}`)
    let fresult=brain.likely({"R": r, "G": g, "B": b}, redNeuron);
    document.getElementById("results").innerHTML = fresult;
}
/*function calculate2(){
    let celsius=document.getElementById("celsius").valueAsNumber;
    let farenheit=brain.likely({"Celsius": celsius}, redNeuron1);
    document.getElementById("farenheit").innerHTML = farenheit;
}*/