<template>
    <div :style="styleObj">
        <Table :show-header=false :border=true :disabled-hover=true size="small" :height="height" :width="width" :data="tableData1" :columns="tableColumns1" stripe></Table>
        <p style="padding:1.5px"></p>
        <Table :show-header=false :border=true :disabled-hover=true size="small" :height="height" :width="width" :data="tableData1" :columns="tableColumns2" stripe></Table>
    </div>
    
</template>
<script>
export default {
    data () {
        return {
            content: [
                '累计借款数量',
                '逾期数量',
                '待还款订单数量',
                '逾期订单数量',
                '待还款总金额',
                '逾期总金额'
            ],
            // 每行数据
            tableData1: this.mockTableData1(),
            // 列名
            tableColumns1: [
                {title: '下游',
                    key: 'lx',
                    render: (h, params) => {
                        const color = 'green';
                        const text = '下游经销商';

                        return h('Tag', {
                            props: {
                                type: 'text',
                                color: color
                            }
                        }, text);
                    }},
                {title: '下游',
                    key: 'sy',
                    render: (h, params) => {
                        return h('div', this.formateContent(this.tableData1[params.index].sy));
                    }},
                {title: '值',
                    key: 'zhi',
                    width: 60,
                    render: (h, params) => {
                        const rt = params.zhi === 0 ? 10 : 3;
                        return h('div', rt);
                    }
                },
                {title: '下游',
                    key: 'sy1',
                    render: (h, params) => {
                        return h('div', this.formateContent1(this.tableData1[params.index].sy1));
                    }},
                {title: '值',
                    key: 'zhi',
                    width: 60,
                    render: (h, params) => {
                        const rt = params.zhi === 0 ? 5 : 2;
                        return h('div', rt);
                    }},
                {title: '下游',
                    key: 'sy2',
                    render: (h, params) => {
                        return h('div', this.formateContent2(this.tableData1[params.index].sy2));
                    }},
                {title: '值',
                    key: 'zhi',
                    width: 60,
                    render: (h, params) => {
                        const rt = params.zhi === 0 ? 9 : 8;
                        return h('div', rt);
                    }}
            ],
            tableColumns2: [
                {title: '上游',
                    key: 'lx',
                    render: (h, params) => {
                        const color = 'blue';
                        const text = '上游经销商';

                        return h('Tag', {
                            props: {
                                type: 'text',
                                color: color
                            }
                        }, text);
                    }},
                {title: '上游',
                    key: 'sy',
                    render: (h, params) => {
                        return h('div', this.formateContent(this.tableData1[params.index].sy));
                    }},
                {title: '值',
                    key: 'zhi',
                    width: 60,
                    render: (h, params) => {
                        const rt = params.zhi === 0 ? 7 : 3;
                        return h('div', rt);
                    }},
                {title: '上游',
                    key: 'sy1',
                    render: (h, params) => {
                        return h('div', this.formateContent1(this.tableData1[params.index].sy1));
                    }},
                {title: '值',
                    key: 'zhi',
                    width: 60,
                    render: (h, params) => {
                        const rt = params.zhi === 0 ? 10 : 3;
                        return h('div', rt);
                    }},
                {title: '上游',
                    key: 'sy2',
                    render: (h, params) => {
                        return h('div', this.formateContent2(this.tableData1[params.index].sy2));
                    }},
                {title: '值',
                    key: 'zhi',
                    width: 60,
                    render: (h, params) => {
                        const rt = params.zhi === 0 ? 5 : 2;
                        return h('div', rt);
                    }}
            ]
        };
    },
    methods: {
        mockTableData1 () {
            let data = [];
            for (let i = 0; i < 2; i++) {
                data.push({
                    sy: i,
                    sy1: i,
                    sy2: i,
                    zhi: i
                });
            }
            return data;
        },
        formateContent (index) {
            if (index === 0) {
                return this.content[0];
            } else {
                return this.content[3];
            }
        },
        formateContent1 (index) {
            if (index === 0) {
                return this.content[1];
            } else {
                return this.content[4];
            }
        },
        formateContent2 (index) {
            if (index === 0) {
                return this.content[2];
            } else {
                return this.content[5];
            }
        }
    },
    props: {
        styleObj: Object,
        height: String,
        width: String
    }
};
</script>
