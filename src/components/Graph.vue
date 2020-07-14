<template>
  <div class="charts">
    <apexcharts
      type="line"
      :options="chartOptions"
      :series="series">
    </apexcharts>
    <!--
    <div>
      <button @click="updateChart">Update!</button>
  </div>-->
  </div>
</template>

<script>
import VueApexCharts from 'vue-apexcharts'

export default {
  name: 'Chart',
  components: {
    apexcharts: VueApexCharts,
  },
  data: function() {
      return {
        chartOptions: {
          chart: {
            id: 'vuechart-example',
          },
          xaxis: {
            categories: [1, 2, 3, 4, 5, 6, 7, 8, 9],
          },
          stroke: {
            width: 3,
          },
          markers: {
            size: 4,
            colors: ["#FFA41B"],
            strokeColors: "#fff",
            strokeWidth: 2,
            hover: {
              size: 7,
            }
          },
          legend: {
            onItemHover: {
              highlightDataSeries: true
            },
          },
        },
        series: [{
          name: 'series-1',
          data: [30, 40, 45, 50, 49, 60, 70, 81, 91]
        },
        {
          name: 'series-1',
          data: [90, 20, 12, 58, 12, 60, 60, 21, 11]
        }],
      }
    },
  }
</script>
<style scoped>
  .charts {
    max-width: 900px;
    margin: 35px auto;
  }
</style>
