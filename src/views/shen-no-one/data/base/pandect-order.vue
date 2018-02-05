<template>
    <div class="home-main">
        <Row :gutter="5" class="margin-top-10">
            <Col :md="24" :lg="24" :style="{marginBottom: '10px'}">  
                <Card>
                <Table :show-header=false :border=true :columns="columnsInfo" :data="dataInfo"></Table>
                </Card>
            </Col>
         </Row>
    </div>
    
</template>
<script>
export default {
    name: 'pandect-order',
    data () {
        return {
            columnsInfo: [
                {
                    title: 'k1',
                    key: 'k1',
                    width: '30%',
                    className: 'demo-table-info-column'
                },
                {
                    title: 'v1',
                    key: 'v1'
                }
            ],
            dataInfo: [
                {
                    k1: '订单总数',
                    v1: '42493条'
                },
                {
                    k1: '有效订单数',
                    v1: '35200条'
                },
                {
                    k1: '订单总金额',
                    v1: '396,420,876.46元（约合3亿9642万元）'
                }
            ]
        };
    },
    methods: {
        mockTableData1 () {
            let data = [];
            for (let i = 0; i < 1; i++) {
                data.push({
                    lx: 1,
                    sy: 2
                });
            }
            return data;
        }
    }
};
</script>
<style scoped>
</style>

