<template lang="html">
    <div class="self-tabs-style" style="height:auto;padding-bottom: 1.5em;">
        <Tabs value="name1" :animated="false">
            <TabPane label="工商注册信息" name="name1" icon="ios-star">
                
            </TabPane>
            <TabPane label="财务信息" name="name2" icon="person">
                
            </TabPane>
            <TabPane label="央行征信信息" name="name3" icon="stats-bars">
                
            </TabPane>
            <TabPane label="经营信息" name="name4" icon="stats-bars">
                
            </TabPane>
            <TabPane label="银行流水信息" name="name5" icon="stats-bars">
                
            </TabPane>
            <TabPane label="法律合规信息" name="name6" icon="stats-bars">
                
            </TabPane>
            <TabPane label="动产融资登记信息" name="name7" icon="stats-bars">
                
            </TabPane>
            <TabPane label="舆情信息" name="name8" icon="stats-bars">
                
            </TabPane>
            <TabPane label="其他信息" name="name9" icon="stats-bars">
                
            </TabPane>
        </Tabs>
    </div>
</template>
<script>
import orderList from '../order/order-list.vue';
import afterLoan from './data/after-loan.vue';
import background from './data/background.vue';
import manageInfo from './data/manage-info.vue';
import pandect from './data/pandect.vue';
export default {
    data () {
        return {
            // label: (h) => {
            //     return h('div', [
            //         h('span', '总览'),
            //         h('Badge', {
            //             props: {
            //                 count: 3
            //             }
            //         })
            //     ]);
            // }
        };
    },
    components: {
        orderList,
        afterLoan,
        background,
        manageInfo,
        pandect
    }
};
</script>

<<style scoped>
.self-tabs-style{
    background: #e3e8ee;
    padding: 0px;
    margin: 0px;
    width: 98.6%;
    height: 98.5%;
    position: absolute;
    text-align: center;
}


</style> 

