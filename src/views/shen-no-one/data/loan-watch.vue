<template lang="html">
  <div class="dashboard">          
    <div class="flex-container column">
        <div class="item one" id="watchContainer" style="transform: translate(12%,-10%) scale(0.8)">
        </div>
    </div>
  </div>
</template>
        
<script>
import setWatchOption from '../../business-market/data/watch';

export default {
    name: 'loanWatch',
    data () {
        return {
        };
    },
    methods: {
        drawWatch () {
            // watch
            var myWatch = this.$echarts.init(document.getElementById('watchContainer'));
            let watchOption = setWatchOption([220, -40], 10, 70, 69, 67.8);
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
  width: 76%;
  height: 95%;
  position: absolute;
  transform: scale(0.9);
  text-align: center;
  background: rgba(32, 32, 35, 0.5);
}
</style>