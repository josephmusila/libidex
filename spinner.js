const wheel = document.getElementById("wheel");
const spinBtn = document.getElementById("spin-btn");
const finalValue = document.getElementById("final-value");
//Object that stores values of minimum and maximum angle for a value
const rotationValues = [
  { minDegree: 0, maxDegree: 45, value: "0%" },
  { minDegree: 46, maxDegree: 90, value: "30%" },
  { minDegree: 91, maxDegree: 135, value: "25%" },
  { minDegree: 136, maxDegree: 180, value: "40%" },
  { minDegree: 181, maxDegree: 225, value: "0%" },
  { minDegree: 226, maxDegree: 270, value: "50%" },
  { minDegree: 271, maxDegree: 315, value: "10%" },
  { minDegree: 316, maxDegree: 360, value: "0%" },
];
//Size of each piece
const data = [12, 12, 12, 12, 12, 12,12,12];
//background color for each piece
var pieColors = [
  "#e43e52",
  "#ba60a5 ",
  "#197ab3",
  "#18a45b",
  "#e43e52",
  "#df9420",
  "#e43e52 ",
  '#d8bf00'
];
//Create chart
let myChart = new Chart(wheel, {
  //Plugin for displaying text on pie chart
  plugins: [ChartDataLabels],
  //Chart Type Pie
  type: "pie",
  data: {
    //Labels(values which are to be displayed on chart)
    labels: ["0%", "30%", "25%", "40%", "0%", "10%","0%","50%"],
    //Settings for dataset/pie
    datasets: [
      {
        backgroundColor: pieColors,
        data: data,
      },
    ],
  },
  options: {
    //Responsive chart
    responsive: true,
    animation: { duration: 0 },
    plugins: {
      //hide tooltip and legend
      tooltip: false,
      legend: {
        display: false,
      },
      //display labels inside pie chart
      datalabels: {
        color: "#000000",
        formatter: (_, context) => context.chart.data.labels[context.dataIndex],
        font: { size: 24,weight: 'bold',  },
      },
    },
  },
});
//display value based on the randomAngle
const valueGenerator = (angleValue) => {
  for (let i of rotationValues) {
    //if the angleValue is between min and max then display it
    if (angleValue >= i.minDegree && angleValue <= i.maxDegree) {
      finalValue.innerHTML = `<p>Congratulations!! Discount: 50%</p>`;
      spinBtn.disabled = false;
     
      setTimeout(() => {
        $('#spinner').toggle()
        $('#form').toggle()
      }, 2000);
     
      break;
    }
  }
};

//Spinner count
let count = 0;
//100 rotations for animation and last rotation for result
let resultValue = 101;
//Start spinning
spinBtn.addEventListener("click", () => {
  spinBtn.disabled = true;
  //Empty final value
  finalValue.innerHTML = `<p>Good Luck!</p>`;
  //Generate random degrees to stop at
  // let randomDegree = Math.floor(Math.random() * (355 - 0 + 1) + 0);
  let randomDegree =10;
  //Interval for rotation animation

  let rotationInterval = window.setInterval(() => {
    //Set rotation for piechart
    /*
    Initially to make the piechart rotate faster we set resultValue to 101 so it rotates 101 degrees at a time and this reduces by 1 with every count. Eventually on last rotation we rotate by 1 degree at a time.
    */
    myChart.options.rotation = myChart.options.rotation + resultValue;
    //Update chart with new value;
    myChart.update();

  
    //If rotation>360 reset it back to 0
    if (myChart.options.rotation >= 360) {
      count += 1;
      resultValue -= 5;
      myChart.options.rotation = 0;
    //   $('#form').toggle()

    } else if (count > 15 && myChart.options.rotation == randomDegree) {
      valueGenerator(randomDegree);
      clearInterval(rotationInterval);
      count = 0;
      resultValue = 101;
    //   $('#form').toggle()

    }
  }, 10);
 

 
});


function closeDialog(){
  $('.congrats-wrapper').toggle();
}





document.addEventListener("DOMContentLoaded", function () {
  
  let timeInSeconds = 30 * 60; // 30 minutes

  
  const hoursElement = document.getElementById("hours");
  const minutesElement = document.getElementById("minutes");
  const secondsElement = document.getElementById("seconds");

 
  const timerInterval = setInterval(updateTimer, 1000);

  function updateTimer() {
  
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;

   
    hoursElement.textContent = String(hours).padStart(2, "0");
    minutesElement.textContent = String(minutes).padStart(2, "0");
    secondsElement.textContent = String(seconds).padStart(2, "0");

   
    if (timeInSeconds <= 0) {
      clearInterval(timerInterval); // Stop the timer
      alert("Time's up!"); // You can customize the action when the timer reaches 0
    } else {
      timeInSeconds--; // Decrement the time
    }
  }
});