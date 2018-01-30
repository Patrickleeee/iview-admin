<template lang="html">
    <div>
        <Row :gutter="5" class="margin-top-10">
            <Col :md="24" :lg="24" :style="{marginBottom: '10px'}" style="width:100%;height:600px;">
                <Card style="height:600px">
                    <p slot="title">资产负债</p>
                    <my-circle-pie></my-circle-pie>
                </Card>
             </Col>
         </Row>
        <Row :gutter="5" class="margin-top-10">
            <Col :md="24" :lg="8" :style="{marginBottom: '10px'}">
                <Card>
                    <p slot="title">流动资产（单位：元）</p>
                <Table :border=true :columns="columns4" :data="data4" size="small"></Table>
                </Card>
             </Col>
            <Col :md="24" :lg="8" :style="{marginBottom: '10px'}">
                <Card>
                    <p slot="title">非流动资产（单位：元）</p>
                <Table :border=true :columns="columns4" :data="data5" size="small"></Table>
                </Card>
            </Col>
            <Col :md="24" :lg="8" :style="{marginBottom: '10px'}">
                <Card>
                    <p slot="title">流动负债（单位：元）</p>
                <Table :border=true :columns="columns4" :data="data6" size="small"></Table>
                </Card>
            </Col>
         </Row>
         <Row :gutter="5" class="margin-top-10">
            <Col :md="24" :lg="8" :style="{marginBottom: '10px'}">
                <Card>
                    <p slot="title">非流动负债（单位：元）</p>
                <Table :border=true :columns="columns4" :data="data7" size="small"></Table>
                </Card>
             </Col>
             <Col :md="24" :lg="8" :style="{marginBottom: '10px'}">
                <Card>
                    <p slot="title">所有者权益（单位：元）</p>
                <Table :border=true :columns="columns4" :data="data8" size="small"></Table>
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
export default {
    components: {
        expandRow,
        creditDetail,
        myCirclePie
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
                            }, '2')
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
                            }, '1')
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
                            }, '3')
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
            columns4: [
                {
                    title: '条目',
                    key: 'item'
                },
                {
                    title: '年初余额',
                    key: 'startAmount'
                }, {
                    title: '期末余额',
                    key: 'endAmount'
                }
            ],
            data4: [
                {
                    item: '货币资金',
                    startAmount: '65844945.874117',
                    endAmount: '30712638.38'
                },
                {
                    item: '交易性金融资产',
                    startAmount: '--',
                    endAmount: '--'
                },
                {
                    item: '应收票据',
                    startAmount: '--',
                    endAmount: '--'
                },
                {
                    item: '应收账款',
                    startAmount: '44920879.89',
                    endAmount: '69000233.3522304'
                },
                {
                    item: '预付款项',
                    startAmount: '65697334.657764',
                    endAmount: '27237497.6747676'
                },
                {
                    item: '应收利息',
                    startAmount: '--',
                    endAmount: '--'
                },
                {
                    item: '其他应收款',
                    startAmount: '68818861.8622304',
                    endAmount: '69000233.3522304'
                },
                {
                    item: '存货',
                    startAmount: '188718629.15794',
                    endAmount: '144589746.463048'
                },
                {
                    item: '一年内到期的非流动资产',
                    startAmount: '--',
                    endAmount: '--'
                },
                {
                    item: '其他流动资产',
                    startAmount: '--',
                    endAmount: '--'
                },
                {
                    item: '流动资产合计',
                    startAmount: '434000651.442052',
                    endAmount: '303421933.804906'
                }
            ],
            data5: [
                {
                    item: '长期应收款',
                    startAmount: '--',
                    endAmount: '--'
                },
                {
                    item: '固定资产',
                    startAmount: '31970870.8',
                    endAmount: '42458142.59'
                },
                {
                    item: '减：累计折旧',
                    startAmount: '13644315.6800001',
                    endAmount: '18006056.64'
                },
                {
                    item: '固定资产净值',
                    startAmount: '18326555.1199999',
                    endAmount: '24452085.95'
                },
                {
                    item: '在建工程',
                    startAmount: '--',
                    endAmount: '--'
                },
                {
                    item: '固定资产清理',
                    startAmount: '--',
                    endAmount: '--'
                },
                {
                    item: '无形资产',
                    startAmount: '591181.04',
                    endAmount: '679462.61'
                },
                {
                    item: '长摊待摊费用',
                    startAmount: '2229585.44',
                    endAmount: '2684337.57'
                },
                {
                    item: '递延所得税资产',
                    startAmount: '--',
                    endAmount: '--'
                },
                {
                    item: '其他非流动资产',
                    startAmount: '--',
                    endAmount: '--'
                },
                {
                    item: '非流动资产合计',
                    startAmount: '21147321.5999999',
                    endAmount: '27815886.13'
                }
            ],
            data6: [
                {item: '短期借款', startAmount: '86,353,271.95', endAmount: '35,519,304.18'},
                {item: '应付票据', startAmount: '53,198,225.02', endAmount: '28,794,363.91'},
                {item: '应付账款', startAmount: '33,096,782.54', endAmount: '32,610,996.70'},
                {item: '预收款项', startAmount: '18,586,948.70', endAmount: '15,185,823.05'},
                {item: '应付职工薪酬', startAmount: '4,726,614.44', endAmount: '5,438,321.92'},
                {item: '应交税费', startAmount: '-13,978,469.96', endAmount: '-15,149,483.27'},
                {item: '应付利息', startAmount: '--', endAmount: '--'},
                {item: '应付股利', startAmount: '--', endAmount: ''},
                {item: ' 其他应付款', startAmount: '8,165,814.25', endAmount: '6,186,165.72'},
                {item: '一年内到期的非流动负债', startAmount: '--', endAmount: '--'},
                {item: '其他流动负债', startAmount: '--', endAmount: '--'},
                {item: '流动负债合计', startAmount: '190,149,186.94', endAmount: '108,585,492.21'}
            ],
            data7: [
                {item: '长期借款', startAmount: '--', endAmount: '--'},
                {item: '长期应付款', startAmount: '--', endAmount: '--'},
                {item: '递延所得税负债', startAmount: '--', endAmount: '--'},
                {item: '其他非流动负债', startAmount: '--', endAmount: '--'},
                {item: '非流动负债合计', startAmount: '--', endAmount: '--'}
            ],
            data8: [
                {item: '实收资本（或股本）', startAmount: '50,000,000.00', endAmount: '50,000,000.00'},
                {item: '资本公积', startAmount: '7,500,000.00', endAmount: '7,500,000.00'},
                {item: '盈余公积', startAmount: '--', endAmount: '--'},
                {item: '未分配利润', startAmount: '207,498,786.10', endAmount: '165,152,327.73'},
                {item: '所有者权益（或股东权益）合计', startAmount: '264,998,786.10', endAmount: '222,652,327.73'}
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

