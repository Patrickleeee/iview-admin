<template>
    <div class="home-main">
        <Row :gutter="5" class="margin-top-10">
            <Col :md="24" :lg="24" :style="{marginBottom: '10px'}">  
                <Card>
                <Table :show-header=false :border=true :columns="columnsInfo" :data="dataInfo" size="small"></Table>
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
                    k1: '正常',
                    v1: '2'
                },
                {
                    k1: '关注',
                    v1: '1'
                },
                {
                    k1: '次级',
                    v1: '1'
                },
                {
                    k1: '可疑',
                    v1: '0'
                },
                {
                    k1: '损失',
                    v1: '0'
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

