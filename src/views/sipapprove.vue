<template>
  <div class="wrap">
   <div ref="pie" style="width: 100%;height: 500px"></div>
  </div>
</template>

<script>
  export default {
    methods: {
      drawPieChart() {
        const chartPie = this.$echarts.init(this.$refs.pie)
        chartPie.setOption({
          xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          },
          yAxis: {
            type: 'value'
          },
          series: [{
            data: [120, 200, 150, 80, 70, 110, 130],
            type: 'bar'
          }]
        });
      },
    },
    mounted(){
      this.drawPieChart()
    }
  }
</script>
