let mychart = document.getElementById("myChart").getContext("2d");
let massPopChart = new Chart(myChart,{
    type:"bar",
    data:{
        labels:["Boston","Worcester","Springfield","Lowell","Cambridge","New Bedford"],
        datasets:[{
            label:"population",
            data:[
                617594,
                181045,
                153060,
                106519,
                105162,
                95072
            ],
            backgroundColor:[
                "rgba(255,99,132,0.6)",
                "rgba(54,162,235,0.6)",
                "rgba(255,206,86,0.6)",
                "rgba(75,192,192,0.6)",
                "rgba(153,102,255,0.6)",
                "rgba(255,159,64,0.6)",
                "rgba(255,99,132,0.6)"

            ],
            borderWidth:1,
            borderColor:"#777",
            hoverBorderWidth:3,
            hoverBorderColor:"#000"
        }]
    },
    options:{
        title:{
            display:true,
            text:"Largest Cities in Massachusetts",
            fontSize:25
        },
        legend:{
            display:false,
            position:"right",
            labels:{
                fontColor:"#000"
            }
        }
    }
});