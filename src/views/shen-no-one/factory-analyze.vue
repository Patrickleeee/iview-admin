<template lang="html">
    <div class="self-tabs-style" style="height:auto;padding-bottom: 1.5em;">
        <Tabs value="name1" :animated="false">
            <TabPane label="总概况" name="name1" icon="ios-star">
                <dailyManagement></dailyManagement>
            </TabPane>
            <TabPane label="担保管理" name="name2" icon="person">
                
            </TabPane>
            <TabPane label="不良贷款管理" name="name3" icon="stats-bars">
                
            </TabPane>
        </Tabs>
    </div>
</template>
<script>
import dailyManagement from './data/management/daily-management.vue';
export default {
    data () {
        return {
        };
    },
    components: {
        dailyManagement
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

