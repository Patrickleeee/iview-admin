<template lang="html">
  <div class="dashboard">          
    <div class="flex-container column">
        <div class="item one" id="loanPieContainer" style="transform: translate(0%,-5%) scale(0.95)">
        </div>
    </div>
  </div>
</template>
        
<script>
import loanPie from '../../../business-market/data/loan-pie';
export default {
    name: 'pie',
    data () {
        return {
            loanPie
        };
    },
    methods: {
        drawBasePie () {
            // pie
            var myPie = this.$echarts.init(document.getElementById('loanPieContainer'));
            myPie.setOption(this.loanPie);
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
  width: 90%;
  height: 95%;
  position: absolute;
  transform: scale(0.33);
  text-align: center;
  transition: all 0.8s;
  background: rgba(32, 32, 35, 0.5);
}
</style>