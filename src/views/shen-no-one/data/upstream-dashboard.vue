<template lang="html">
  <div class="dashboard">          
    <div class="flex-container column">
        <div class="item one" @click="clickChart('1')" id="mapContainer" style="transform: translate(-32.6%,-34.5%) scale(0.33)">
        </div>
        <div class="item two" @click="clickChart('2')" id="pieContainer" style="transform: translate(-32.6%,-0.7%) scale(0.33)">
        </div>
        <div class="item three" @click="clickChart('3')" id="barContainer" style="transform: translate(-32.6%,33%) scale(0.33)">
        </div>
        <div class="item four active" @click="clickChart('4')" id="radarContainer" style="transform: translate(33.5%, -1.5%) scale(0.99)">
        </div>
    </div>
  </div>
</template>
        
<script>
import dataFlow from '../../business-market/data/data-flow';
import manyPies from '../../business-market/data/many-pies';
import dataSet from '../../business-market/data/data-set';
import dataLine from '../../business-market/data/data-line';
// require('./data/china')  // 引入china.js地图文件
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/map';
import 'echarts/lib/chart/pie';
import 'echarts/lib/chart/bar';
import 'echarts/lib/chart/radar';
import 'echarts/lib/chart/line';

export default {
    name: '',
    data () {
        return {
            manyPies,
            dataFlow,
            dataLine,
            dataSet,
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
            myMap.setOption(manyPies);

            // pie
            var myPie = this.$echarts.init(document.getElementById('pieContainer'));
            myPie.setOption(dataSet);

            // bar
            var myBar = this.$echarts.init(document.getElementById('barContainer'));
            myBar.setOption(dataLine);

            // radar
            var myRadar = this.$echarts.init(document.getElementById('radarContainer'));
            myRadar.setOption(dataFlow);
        },
        _resize () {
            this.$root.charts.forEach((myChart) => {
                myChart.resize();
            });
        },
        clickChart (clickIndex) {
            const activeItem = document.querySelector('.flex-container .active');
            const activeIndex = activeItem.dataset.order;
            console.log(activeIndex);
            const clickItem = this.items[clickIndex - 1];
            if (activeIndex === clickIndex) {
                return;
            }
            activeItem.classList.remove('active');
            clickItem.classList.add('active');
            this._setStyle(clickItem, activeItem);
        },
        _setStyle (el1, el2) {
            const transform1 = el1.style.transform;
            const transform2 = el2.style.transform;
            el1.style.transform = transform2;
            el2.style.transform = transform1;
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
  transform: scale(0.33);
  text-align: center;
  transition: all 0.8s;
  background: rgba(32, 32, 35, 0.5);
}
.active {
  width: 76%;
  height: 98%;
  margin-left: 10px;
  line-height: 300px;
}
</style>