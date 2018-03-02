<template>
    <div>
        <Card>
            <p slot="title" class="card-title">
                <Icon type="ios-pulse-strong"></Icon>
                规则详情
            </p>
            <div>
                <Table :data="tableData1" :columns="tableColumns1" stripe></Table>
            </div>
        </Card>
    </div>
    
</template>
<script>
export default {
    data () {
        return {
            type: [
                '经营风险', '财务风险', '法律与信用风险', '其他风险'
            ],
            content: [
                {'key': '本月公司、法人账户销售回款入金额度较上月下降比例', 'value': '%'},
                {'key': '本月经销商订单金额较上年度同期下降比例', 'value': '%'},
                {'key': '本月经销商订单金额较上月下降比例', 'value': '%'},
                {'key': '本月公司、法人账户销售回款入金总额', 'value': '万元'},
                {'key': '本季度经销商累计订单金额较上年度同期下降比例', 'value': '%'},
                {'key': '最近三个月公司、法人账户月平均销售回款入金额度', 'value': '万元'},
                {'key': '连续出现3个月出现公司、法人账户累计销售回款入金额度', 'value': '万元'},
                {'key': '连续3个月出现经销商月度订单金额较上月下降比例', 'value': '%'},
                {'key': '近3个月经销商月平均订单金额', 'value': '万元'},
                {'key': '公司净资产较上月下降比例', 'value': '%'},
                {'key': '公司资产负债率', 'value': '%'},
                {'key': '公司毛利润率或净利润率', 'value': '%'},
                {'key': '公司应收账款周转天数或存货周转天数', 'value': '天'},
                {'key': '本月公司主营业务收入金额较上月下降比例', 'value': '%'},
                {'key': '公司年末净资产余额较年初下降比例（股东分红情况除外）', 'value': '%'},
                {'key': '公司资产负债率或 公司速动比率或流动比率', 'value': '%'},
                {'key': '本季度公司主营业务收入金额较上年同期下降比例', 'value': '%'},
                {'key': '本季度公司累计净利润金额或经我司评估本年度公司净利润将处于亏损状态', 'value': '万元'},
                {'key': '企业及其法人代表人涉及行政机关处罚、司法被执行、民间借款诉讼、金融机构诉讼，且累计执行金额占即期净资产比例', 'value': '%'},
                {'key': '借款人、借款企业贷款尚处于逾期状态', 'value': ''},
                {'key': '企业提供虚假资料、或拒绝提供我司贷后管理、信用评估所需资料或数据信息', 'value': ''}
            ],
            yzList: [
                '≥ 60%',
                '≥ 60%',
                '≥ 60%',
                '≤ 100万元',
                '≥ 30%',
                '≤ 100万元',
                '≤ 200万元',
                '≥ 20%',
                '≤ 100万元',
                '≥20%且<30%',
                '≥50%且<70%',
                '≤ 15%|≤ 3%',
                '≥90天 | ≥100天',
                '≥ 50%',
                '≥ 30%',
                '≥ 80% | <0.3 | < 0.5',
                '≥ 50%',
                '≤ 0',
                '≥ 30%',
                '是',
                '是'
            ],
            dqzbList: [
                '44%',
                '85%',
                '87%',
                '4732万元',
                '21%',
                '3804.69万元',
                '11414.06万元',
                '0%',
                '2348万元',
                '25%',
                '32%',
                '16% | 7%',
                '18.8天 | 97.7天',
                '0%',
                '27%',
                '32% | 1.4 | 2.8',
                '0%',
                '1万元',
                '0%',
                '否',
                '否'
            ],
            // 每行数据
            tableData1: this.mockTableData1(),
            // 列名
            tableColumns1: [
                {title: '序号', align: 'center', type: 'index', width: '5%'},
                {title: '管理类型',
                    key: 'gllx',
                    width: '10%',
                    render: (h, params) => {
                        return h('div', this.formateType(this.tableData1[params.index].gllx));
                    }},
                {title: '监测内容',
                    key: 'jcnr',
                    width: '45%',
                    render: (h, params) => {
                        return h('div', this.formateContent(this.tableData1[params.index].jcnr));
                    }},
                // {title: '规则属性',
                //     key: 'gzsx',
                //     render: (h, params) => {
                //         const row = params.row;
                //         const color = row.gzsx === 1 ? 'green' : row.gzsx === 2 ? 'yellow' : 'red';
                //         const text = row.gzsx === 1 ? '弱规则' : row.gzsx === 2 ? '中规则' : '强规则';

                //         return h('Tag', {
                //             props: {
                //                 type: 'dot',
                //                 color: color
                //             }
                //         }, text);
                //     }},
                {
                    title: '阈值',
                    key: 'yz',
                    render: (h, params) => {
                        return h('div', this.yzList[params.index]);
                    }
                },
                {title: '当前指标值',
                    key: 'dqzb',
                    width: 160,
                    render: (h, params) => {
                        // const row = params.row;
                        // var text = '';
                        // var tagColor = '';
                        // var iconType = '';
                        // var iconColor = '';
                        // if (params.index === 19 || params.index === 20) {
                        //     text = row.dqzb > 50 ? '是' : '否';
                        //     tagColor = text === '是' ? 'green' : 'red';
                        //     iconColor = text === '是' ? 'green' : 'red';
                        // } else {
                        //     text = row.dqzb + this.formateUnit(this.tableData1[params.index].gllx);
                        //     tagColor = row.dqzb > row.sqzb ? 'green' : row.dqzb === row.sqzb ? 'default' : 'red';
                        //     iconType = row.dqzb > row.sqzb ? 'arrow-up-c' : row.dqzb === row.sqzb ? 'minus' : 'arrow-down-c';
                        //     iconColor = row.dqzb > row.sqzb ? 'green' : row.dqzb === row.sqzb ? 'default' : 'red';
                        // }

                        // return h('div', [
                        //     h('Tag', {
                        //         props: {
                        //             type: 'border',
                        //             color: tagColor
                        //         }
                        //     }, text),
                        //     h('Icon', {
                        //         props: {
                        //             type: iconType,
                        //             color: iconColor
                        //         }
                        //     })
                        // ]);
                        return h('div', this.dqzbList[params.index]);
                    }
                },
                // {title: '上期指标值',
                //     key: 'sqzb',
                //     width: 160,
                //     render: (h, params) => {
                //         if (params.index === 19 || params.index === 20) {
                //             return h('div', '否');
                //         }

                //         const row = params.row;
                //         return h('div', row.sqzb + this.formateUnit(this.tableData1[params.index].gllx));
                //     }
                // }
                {
                    title: '是否触发',
                    key: 'sfcf',
                    render: (h, params) => {
                        const text = params.index === 1 ? '触发' : params.index === 2 ? '触发' : '未触发';
                        const tagColor = params.index === 1 ? 'red' : params.index === 2 ? 'red' : 'green';
                        return h('Tag', {
                            props: {
                                type: 'border',
                                color: tagColor
                            }
                        }, text);
                    }
                }
            ],
            total: 1000,
            current: 1
        };
    },
    methods: {
        mockTableData1 () {
            let data = [];
            for (let i = 0; i < 21; i++) {
                data.push({
                    gllx: i,
                    jcnr: i,
                    gzsx: Math.floor(Math.random() * 3 + 1),
                    dqzb: Math.floor(Math.random() * 3 + 1) * 33,
                    sqzb: Math.floor(Math.random() * 3 + 1) * 33
                });
            }
            return data;
        },
        formatDate (date) {
            const y = date.getFullYear();
            let m = date.getMonth() + 1;
            m = m < 10 ? '0' + m : m;
            let d = date.getDate();
            d = d < 10 ? ('0' + d) : d;
            return y + '-' + m + '-' + d;
        },
        formateType (type) {
            if (type < 9) {
                return this.type[0];
            } else if (type > 8 & type < 18) {
                return this.type[1];
            } else if (type > 17 & type < 20) {
                return this.type[2];
            } else {
                return this.type[3];
            }
        },
        formateContent (index) {
            return this.content[index].key;
        },
        formateUnit (index) {
            return this.content[index].value;
        }
    }
};
</script>
