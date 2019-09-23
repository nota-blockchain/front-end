<script>
// 더미데이터 입니다.
import { Bar } from "vue-chartjs";
export default {
  extends: Bar,
  data() {
    return {
      datacollection: {
        labels: ["vote1", "vote2", "vote3", "vote4", "vote5"],
        datasets: [
          {
            label: "투표",
            backgroundColor: "#59629E",
            pointBackgroundColor: "white",
            borderWidth: 1,
            pointBorderColor: "#41487D",
            data: [40, 20, 30, 50, 100]
          }
        ]
      },
      //Chart.js options that controls the appearance of the chart
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              },
              gridLines: {
                display: true
              }
            }
          ],
          xAxes: [
            {
              gridLines: {
                display: false
              }
            }
          ]
        },
        legend: {
          display: false,
        },
        responsive: true,
        maintainAspectRatio: false
      }
    };
  },
  mounted() {
    //renderChart function renders the chart with the datacollection and options object.
    this.renderChart(this.datacollection, this.options);
  }
};
</script>
 