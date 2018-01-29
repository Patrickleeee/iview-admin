<template lang="html">
  <div class="dashboard">          
    <div class="flex-container column">
        <div class="item one" id="pieContainer" style="transform: translate(-8.4%,-50%) scale(0.95)">
        </div>
    </div>
  </div>
</template>
        
<script>
import basePie from '../../business-market/data/base-pie';
export default {
    name: 'pie',
    data () {
        return {
            basePie
        };
    },
    methods: {
        drawBasePie () {
            // pie
            var myPie = this.$echarts.init(document.getElementById('pieContainer'));
            myPie.setOption(this.basePie);
        },
        _resize () {
            this.$root.charts.forEach(myChart => {
                myChart.resize();
            });
        }
    },
    mounted () {
        this.drawBasePie();
    }
};
</script>
        
<style scoped>
.item {
  padding: 0px;
  margin: 0px;
  width: 56%;
  height: 95%;
  position: absolute;
  transform: scale(0.33);
  text-align: center;
  transition: all 0.8s;
  background: rgba(32, 32, 35, 0.5);
}
</style>