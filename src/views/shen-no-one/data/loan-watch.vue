<template lang="html">
  <div class="dashboard">          
    <div class="flex-container column">
        <div class="item one" id="mapContainer" style="transform: translate(12%,-10%) scale(0.8)">
        </div>
    </div>
  </div>
</template>
        
<script>
import watch from '../../business-market/data/watch';

export default {
    name: 'loanWatch',
    data () {
        return {
            watch,
            items: []
        };
    },
    methods: {
        drawChinaMap () {
            this.items = document.querySelectorAll('.flex-container .item');
            for (let i = 0; i < this.items.length; i++) {
                this.items[i].dataset.order = i + 1;
            }
            // map
            var myMap = this.$echarts.init(document.getElementById('mapContainer'));
            myMap.setOption(watch);
        },
        _resize () {
            this.$root.charts.forEach((myChart) => {
                myChart.resize();
            });
        }
    },
    mounted () {
        this.drawChinaMap();
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