<template lang="html">
  <div class="dashboard">          
    <div class="flex-container column">
        <div class="item one" id="PandectRiskContainer" style="transform: translate(-6%,-16%) scale(0.8)">
        </div>
    </div>
  </div>
</template>
        
<script>
import setBarOption from '../../../business-market/data/pandect-bar';

export default {
    name: 'loanWatch',
    data () {
        return {
        };
    },
    methods: {
        drawWatch () {
            // watch
            var myWatch = this.$echarts.init(document.getElementById('PandectRiskContainer'));
            let watchOption = setBarOption();
            myWatch.setOption(watchOption);
        },
        _resize () {
            this.$root.charts.forEach((myChart) => {
                myChart.resize();
            });
        }
    },
    mounted () {
        this.drawWatch();
    }
};
</script>
        
<style scoped>
.item {
  padding: 0px;
  margin: 0px;
  width: 114%;
  height: 95%;
  position: absolute;
  transform: scale(0.9);
  text-align: center;
  background: rgba(32, 32, 35, 0.5);
}
</style>