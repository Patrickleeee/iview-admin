<template>
    <div>
        <Row :gutter="5" class="margin-top-10">
            <Card :bordered="false">
                <p slot="title">注册信息</p>
                <Table size="small" :show-header=false :border=true :columns="columnsInfo1" :data="dataInfo1"></Table>
            </Card>
         </Row>
         <Row :gutter="5" class="margin-top-10">
            <Card :bordered="false">
                <p slot="title">信用等级</p>
                <Table size="small" :show-header=true :border=true :columns="columnsInfo2" :data="dataInfo2"></Table>
            </Card>
         </Row>
         <Row :gutter="5" class="margin-top-10">
            <Card :bordered="false">
                <p slot="title">行政处罚信息</p>
                <Table size="small" :show-header=true :border=true :columns="columnsInfo3" :data="dataInfo3"></Table>
            </Card>
         </Row>
    </div>
</template>
<script>
export default{
    data () {
        return {
            columnsInfo1: [
                {
                    title: 'k1',
                    key: 'k1',
                    className: 'demo-table-info-column'
                },
                {
                    title: 'v1',
                    key: 'v1'
                },
                {
                    title: 'k2',
                    key: 'k2',
                    className: 'demo-table-info-column'
                },
                {
                    title: 'v2',
                    key: 'v2'
                }
            ],
            dataInfo1: [
                {
                    k1: '注册日期',
                    v1: '2008-04-16',
                    k2: '海关注册号',
                    v2: '4403960490'
                },
                {
                    k1: '注册海关',
                    v1: '深圳海关',
                    k2: '行政区划',
                    v2: '深圳市宝安区'
                },
                {
                    k1: '经济区划',
                    v1: '一般经济区域',
                    k2: '经营类别',
                    v2: '进出口收发货人'
                },
                {
                    k1: '特殊贸易区域',
                    v1: '非特殊区域',
                    k2: '行业种类',
                    v2: '其他家具制造'
                },
                {
                    k1: '报关有效期',
                    v1: '2018-07-31',
                    k2: '海关注销标识',
                    v2: '正常'
                },
                {
                    k1: '年报情况',
                    v1: '已报送',
                    k2: '跨境贸易电子商务类型',
                    v2: ''
                }
            ],
            columnsInfo2: [
                {
                    title: '认定时间',
                    key: 'k1'
                },
                {
                    title: '认证证书编码',
                    key: 'k2'
                },
                {
                    title: '信用等级',
                    key: 'k3'
                }
            ],
            dataInfo2: [
                {
                    k1: '2016-07-19',
                    k2: '',
                    k3: '失信企业'
                }
            ],
            columnsInfo3: [
                {
                    title: '当事人',
                    key: 'k1'
                },
                {
                    title: '案件性质',
                    key: 'k2'
                },
                {
                    title: '处罚日期',
                    key: 'k3'
                },
                {
                    title: '行政处罚决定书编号',
                    key: 'k4'
                }
            ],
            dataInfo3: [
                {
                    k1: '深圳市森堡家俬有限公司',
                    k2: '',
                    k3: '2016-07-27',
                    k4: '53305322016000591'
                },
                {
                    k1: '深圳市森堡家俬有限公司',
                    k2: '',
                    k3: '2014-09-19',
                    k4: '53306022014320683'
                },
                {
                    k1: '深圳市森堡家俬有限公司',
                    k2: '违规',
                    k3: '2013-07-10',
                    k4: '53306022013199929'
                }
            ]
        };
    }
};
</script>
<style lang="less">
    .vertical-center-modal{
        display: flex;
        align-items: center;
        justify-content: center;

        .ivu-modal{
            top: 0;
        }
    }
</style>
