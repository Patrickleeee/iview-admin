<template lang="html">
    <div>
        <Collapse accordion >
            <Panel name="1">
                利润-2016年12月
                <div slot="content">
                    <Table :border=true :columns="columnsProfit" :data="dataProfit"></Table>
                </div>
            </Panel>
        </Collapse>
        <!-- <Row :gutter="5" class="margin-top-10">
            <Card>
                <p slot="title">利润-2016年12月</p>
                <Table :border=true :columns="columnsProfit" :data="dataProfit"></Table>
            </Card>
        </Row> -->
        <Row :gutter="5" class="margin-top-10">
            <Col :md="24" :lg="24" :style="{marginBottom: '10px'}" style="height:600px;">
                <Card style="height:600px">
                    <p slot="title">流动资产 <Tag color="green">数据来源：森堡家俬</Tag></p>
                    <my-circle-pie></my-circle-pie>
                </Card>
             </Col>
         </Row>
         <Row :gutter="5" class="margin-top-10">
            <Col :md="24" :lg="24" :style="{marginBottom: '10px'}" style="height:600px;">
                <Card style="height:600px">
                    <p slot="title">非流动资产 <Tag color="green">数据来源：森堡家俬</Tag></p></p>
                    <my-circle-pie2></my-circle-pie2>
                </Card>
             </Col>
         </Row>
         <Row :gutter="5" class="margin-top-10">
            <Col :md="24" :lg="24" :style="{marginBottom: '10px'}" style="height:600px;">
                <Card style="height:600px">
                    <p slot="title">流动负债 <Tag color="green">数据来源：森堡家俬</Tag></p></p>
                    <my-circle-pie3></my-circle-pie3>
                </Card>
             </Col>
         </Row>
         <Row :gutter="5" class="margin-top-10">
            <Col :md="24" :lg="24" :style="{marginBottom: '10px'}" style="height:600px;">
                <Card style="height:600px">
                    <p slot="title">所有者权益 <Tag color="green">数据来源：森堡家俬</Tag></p></p>
                    <my-circle-pie4></my-circle-pie4>
                </Card>
             </Col>
         </Row>
         <Row :gutter="5" class="margin-top-10">
            <Table :show-header=false :border=true :columns="columnsName1" :data="dataName1"></Table>
            <Table :border=true :columns="columns1" :data="dataList1"></Table>
            <div style="float: right;">
                <Page :total="count1" :current="page1" :page-size="pageSize1" show-total @on-change="changePage1"></Page>
            </div>
            <p style="padding:10px"></p>
         </Row>
         <Row :gutter="5" class="margin-top-10">
            <Table :show-header=false :border=true :columns="columnsName2" :data="dataName2"></Table>
            <Table :border=true :columns="columns2" :data="dataList2"></Table>
            <div style="float: right;">
                <Page :total="count2" :current="page2" :page-size="pageSize2" show-total @on-change="changePage2"></Page>
            </div>
            <p style="padding:10px"></p>
         </Row>
         <Row :gutter="5" class="margin-top-10">
            <Table :show-header=false :border=true :columns="columnsName3" :data="dataName3"></Table>
            <Table :border=true :columns="columns3" :data="dataList3"></Table>
            <div style="float: right;">
                <Page :total="count3" :current="page3" :page-size="pageSize3" show-total @on-change="changePage3"></Page>
            </div>
            <p style="padding:10px"></p>
         </Row>
    </div>
    
</template>
<script>
import expandRow from './table-expand.vue';
import creditDetail from './credit-detail.vue';
import myCirclePie from './circle-pie.vue';
import myCirclePie2 from './circle-pie2.vue';
import myCirclePie3 from './circle-pie3.vue';
import myCirclePie4 from './circle-pie4.vue';
export default {
    components: {
        expandRow,
        creditDetail,
        myCirclePie,
        myCirclePie2,
        myCirclePie3,
        myCirclePie4
    },
    data () {
        return {
            columnsName1: [
                {
                    title: 'k',
                    key: 'k',
                    render: (h, params) => {
                        return h('div', [
                            h('div', {
                                style: 'font-size:small;color:green'
                            }, '税务评级'),
                            h('Tag', {
                                props: {
                                    type: 'border',
                                    color: 'red'
                                }
                            }, '2'),
                            h('Tag', {
                                props: {
                                    type: 'border',
                                    color: 'green'
                                }
                            }, '数据来源：第三方')
                        ]);
                    }
                }
            ],
            dataName1: [
                {
                    k: '税务评级'
                }
            ],
            columns1: [
                {
                    title: '年份',
                    width: '10%',
                    key: 'year'
                },
                {
                    title: '纳税评级',
                    key: 'grade'
                }, {
                    title: '类型',
                    key: 'type'
                }, {
                    title: '纳税人识别号',
                    key: 'no'
                }, {
                    title: '评价单位',
                    key: 'org'
                }
            ],
            dataList1: [],
            data1: [
                {
                    year: '2016',
                    grade: 'A',
                    type: '国税',
                    no: '914403007586114113(440306758611411)',
                    org: '国家税务总局'
                },
                {
                    year: '2015',
                    grade: 'A',
                    type: '国税',
                    no: '440306758611411',
                    org: '国家税务总局'
                }
            ],
            count1: 2,
            page1: 1,
            pageSize1: 5,
            columnsName2: [
                {
                    title: 'k',
                    key: 'k',
                    render: (h, params) => {
                        return h('div', [
                            h('div', {
                                style: 'font-size:small;color:green'
                            }, '进出口信用'),
                            h('Tag', {
                                props: {
                                    type: 'border',
                                    color: 'red'
                                }
                            }, '1'),
                            h('Tag', {
                                props: {
                                    type: 'border',
                                    color: 'green'
                                }
                            }, '数据来源：第三方')
                        ]);
                    }
                }
            ],
            dataName2: [
                {
                    k: '进出口信用'
                }
            ],
            columns2: [
                {
                    title: '注册海关',
                    width: '10%',
                    key: 'customs'
                },
                {
                    title: '海关编码',
                    key: 'no'
                }, {
                    title: '经营类别',
                    key: 'type'
                }, {
                    title: '操作',
                    key: 'opt',
                    render: (h, params) => {
                        return h('div', [
                            h('Button', {
                                props: {
                                    type: 'primary',
                                    size: 'small'
                                },
                                style: {
                                    marginLeft: '5px'
                                },
                                on: {
                                    click: () => {
                                        this.show(params.index);
                                    }
                                }
                            }, '详情 >>>')
                        ]);
                    }
                }
            ],
            dataList2: [],
            data2: [
                {
                    customs: '深圳海关', no: '4403960490', type: '进出口收发货人', opt: '详情 >>>'
                }
            ],
            count2: 1,
            page2: 1,
            pageSize2: 5,
            columnsName3: [
                {
                    title: 'k',
                    key: 'k',
                    render: (h, params) => {
                        return h('div', [
                            h('div', {
                                style: 'font-size:small;color:green'
                            }, '资质证书'),
                            h('Tag', {
                                props: {
                                    type: 'border',
                                    color: 'red'
                                }
                            }, '3'),
                            h('Tag', {
                                props: {
                                    type: 'border',
                                    color: 'green'
                                }
                            }, '数据来源：第三方')
                        ]);
                    }
                }
            ],
            dataName3: [
                {
                    k: '资质证书'
                }
            ],
            columns3: [
                {
                    title: '详情',
                    type: 'expand',
                    width: '5%',
                    render: (h, params) => {
                        return h(expandRow, {
                            props: {
                                row: params.row
                            },
                            attrs: {
                                style: 'color:green'
                            }
                        });
                    }
                },
                {
                    title: '证书类型',
                    width: '10%',
                    key: 'type'
                },
                {
                    title: '证书编号',
                    key: 'no'
                }, {
                    title: '发证日期',
                    key: 'startDate'
                }, {
                    title: '截止日期',
                    key: 'endDate'
                }
            ],
            dataList3: [],
            data3: [
                {type: '环保部_环境标志', no: 'CEC04275861141-1', startDate: '2015-05-22', endDate: '2018-05-21', company: '深圳市森堡家俬有限公司', province: '广东省', status: '有效', class: '家具'},
                {type: '环保部_环境标志', no: 'CEC04275861141-1', startDate: '2013-07-12', endDate: '2015-03-31', company: '深圳市森堡家俬有限公司', province: '广东省', status: '失效', class: '家具'},
                {type: '环保部_环境标志', no: '05512P1042380R0M', startDate: '2012-04-01', endDate: '2015-03-31', company: '深圳市森堡家俬有限公司', province: '广东省', status: '失效', class: '家具'}
            ],
            count3: 3,
            page3: 1,
            pageSize3: 5,
            columnsProfit: [
                {title: '项目', key: 'pro'},
                {title: '本月累计金额（单位：元）', key: 'monthAmount'},
                {title: '本年累计金额（单位：元）', key: 'yearAmount'}
            ],
            dataProfit: [
                {pro: '主营业务收入', monthAmount: 58425528.54, yearAmount: 732071329.58},
                {pro: '主营业务利润', monthAmount: 12148055.8, yearAmount: 117742045.97},
                {pro: '营业利润', monthAmount: 4744936.4, yearAmount: 55718981.22},
                {pro: '利润总额', monthAmount: 4744936.4, yearAmount: 57924054.78},
                {pro: '净利润', monthAmount: 4701867.23, yearAmount: 57653541.63}
            ]
        };
    },
    methods: {
        getData1 (start, end) {
            return this.data1.slice(start, end);
        },
        changePage1 (current) {
            this.page1 = current;
            this.dataList1 = this.getData1((current - 1) * 5 + 0, (current * 5));
        },
        getData2 (start, end) {
            return this.data2.slice(start, end);
        },
        changePage2 (current) {
            this.page2 = current;
            this.dataList2 = this.getData2((current - 1) * 5 + 0, (current * 5));
        },
        getData3 (start, end) {
            return this.data3.slice(start, end);
        },
        changePage3 (current) {
            this.page3 = current;
            this.dataList3 = this.getData3((current - 1) * 5 + 0, (current * 5));
        },
        show (index) {
            this.$Modal.info({
                title: '进出口信用详情',
                closable: true,
                width: '50%',
                render: (h) => {
                    return h(creditDetail, {
                        props: {
                        }
                    });
                }
            });
        }
    },
    mounted () {
        // 税务评级
        this.dataList1 = this.getData1(0, 5);
        this.count1 = 2;
        this.page1 = 1;
        this.pageSize1 = 5;
        // 进出口信用
        this.dataList2 = this.getData2(0, 5);
        this.count2 = 1;
        this.page2 = 1;
        this.pageSize2 = 5;
        // 资质证书
        this.dataList3 = this.getData3(0, 5);
        this.count3 = 3;
        this.page3 = 1;
        this.pageSize3 = 5;
    }
};
</script>
<style scoped>
</style>

