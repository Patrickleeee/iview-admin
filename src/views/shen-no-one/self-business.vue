<template lang="html">
    <div class="self-tabs-style" style="height:auto;padding-bottom: 1.5em;">
        <Tabs value="name1" :animated="false">
            <TabPane label="总览" name="name1" icon="ios-star">
                <div>
                    <pandect></pandect>
                </div>
            </TabPane>
            <TabPane label="背景" name="name4" icon="person">
                <background></background>
            </TabPane>
            <TabPane label="贷后" name="name3" icon="stats-bars">
                <afterLoan></afterLoan>
            </TabPane>
            <TabPane label="订单" name="name2" icon="ios-list">
                <order-list></order-list>
            </TabPane>
            <TabPane label="财务" name="name5" icon="monitor">
                <manageInfo></manageInfo>
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

