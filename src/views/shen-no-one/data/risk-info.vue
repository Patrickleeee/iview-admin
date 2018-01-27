<template>
    <div>
         <Row :gutter="5" class="margin-top-10">
             <Table :show-header=false :border=true :columns="columnsLawName" :data="dataLawName"></Table>
             <Table :border=true :columns="columnsLaw" :data="LawList"></Table>
              <div style="float: right;">
                <Page :total="count" :current="page" @on-change="changePage"></Page>
            </div>
             <p style="padding:10px"></p>
         </Row>
    </div>
    
</template>
<script>
export default {
    data () {
        return {
            columnsLawName: [
                {
                    title: 'k',
                    key: 'k',
                    render: (h, params) => {
                        return h('div', [
                            h('div', {
                                style: 'font-size:small;color:green'
                            }, '法律诉讼'),
                            h('Tag', {
                                props: {
                                    type: 'text',
                                    color: 'blue'
                                }
                            }, '18')
                        ]);
                    }
                }
            ],
            dataLawName: [
                {
                    k: '法律诉讼'
                }
            ],
            columnsLaw: [
                {
                    title: '日期',
                    width: '10%',
                    key: 'date'
                },
                {
                    title: '裁判文书',
                    key: 'content'
                }, {
                    title: '案由',
                    key: 'caseReason'
                }, {
                    title: '案件身份',
                    key: 'caseIdentity'
                }, {
                    title: '案件号案由',
                    key: 'caseNo'
                }
            ],
            LawList: [],
            dataLaw: [
                {
                    date: '2016-05-06',
                    content: '深圳市玄龙创世贸易有限公司、洪伟玄走私普通货物二审刑事裁定书',
                    caseReason: '走私罪 走私普通货物、物品罪',
                    caseIdentity: '原告-广东省东莞市人民检察院,洪伟玄;被告-单位深圳市森堡家俬有限公司',
                    caseNo: '（2015）粤高法刑二终字第370号'
                },
                {
                    date: '2015-07-08',
                    content: '西安市干道市政建设开发有限责任公司、深圳市森堡家俬有限公司等商品房销售合同纠纷、申请撤销仲裁裁决民事裁定书(7)',
                    caseReason: '商品房销售合同纠纷',
                    caseIdentity: '',
                    caseNo: '（2015）西中民四仲字第00061号'
                },
                {
                    date: '2015-07-08',
                    content: '西安市干道市政建设开发有限责任公司、深圳市森堡家俬有限公司等商品房销售合同纠纷、申请撤销仲裁裁决民事裁定书(5)',
                    caseReason: '商品房销售合同纠纷',
                    caseIdentity: '',
                    caseNo: '（2015）西中民四仲字第00060号'
                },
                {
                    date: '2015-07-08',
                    content: '西安市干道市政建设开发有限责任公司、深圳市森堡家俬有限公司等商品房销售合同纠纷、申请撤销仲裁裁决民事裁定书(6)',
                    caseReason: '商品房销售合同纠纷',
                    caseIdentity: '',
                    caseNo: '（2015）西中民四仲字第00060号'
                },
                {
                    date: '2015-07-08',
                    content: '西安市干道市政建设开发有限责任公司、深圳市森堡家俬有限公司等商品房销售合同纠纷、申请撤销仲裁裁决民事裁定书',
                    caseReason: '商品房销售合同纠纷',
                    caseIdentity: '',
                    caseNo: '（2015）西中民四仲字第00061号'
                },
                {
                    date: '2015-07-08',
                    content: '西安市干道市政建设开发有限责任公司、深圳市森堡家俬有限公司等商品房销售合同纠纷、申请撤销仲裁裁决民事裁定书(9)',
                    caseReason: '商品房销售合同纠纷',
                    caseIdentity: '',
                    caseNo: '（2015）西中民四仲字第00058号'
                },
                {
                    date: '2015-07-08',
                    content: '西安市干道市政建设开发有限责任公司、深圳市森堡家俬有限公司等商品房销售合同纠纷、申请撤销仲裁裁决民事裁定书(4)',
                    caseReason: '商品房销售合同纠纷',
                    caseIdentity: '',
                    caseNo: '（2015）西中民四仲字第00059号'
                },
                {
                    date: '2015-07-08',
                    content: '西安市干道市政建设开发有限责任公司、深圳市森堡家俬有限公司等商品房销售合同纠纷、申请撤销仲裁裁决民事裁定书(2)',
                    caseReason: '商品房销售合同纠纷',
                    caseIdentity: '',
                    caseNo: '（2015）西中民四仲字第00059号'
                },
                {
                    date: '2015-07-08',
                    content: '西安市干道市政建设开发有限责任公司、深圳市森堡家俬有限公司等商品房销售合同纠纷、申请撤销仲裁裁决民事裁定书(1)',
                    caseReason: '商品房销售合同纠纷',
                    caseIdentity: '',
                    caseNo: '（2015）西中民四仲字第00058号'
                },
                {
                    date: '2015-07-07',
                    content: '西安市干道市政建设开发有限责任公司、深圳市森堡家俬有限公司等商品房销售合同纠纷、申请撤销仲裁裁决民事裁定书(8)',
                    caseReason: '商品房销售合同纠纷',
                    caseIdentity: '',
                    caseNo: '（2015）西中民四仲字第00057号'
                },
                {
                    date: '2015-07-07',
                    content: '西安市干道市政建设开发有限责任公司、深圳市森堡家俬有限公司等商品房销售合同纠纷、申请撤销仲裁裁决民事裁定书(3)',
                    caseReason: '商品房销售合同纠纷',
                    caseIdentity: '',
                    caseNo: '（2015）西中民四仲字第00057号'
                },
                {
                    date: '2015-06-08',
                    content: '深圳市森堡家俬有限公司执行裁定书15案裁定',
                    caseReason: '民事执行',
                    caseIdentity: '原告-深圳市森堡家俬有限公司;被告-西安市干道市政建设开发有限责任公司',
                    caseNo: '（2015）西中执仲字第00100—1号'
                },
                {
                    date: '2015-06-08',
                    content: '深圳市森堡家俬有限公司执行裁定书4',
                    caseReason: '',
                    caseIdentity: '',
                    caseNo: '（2015）西中执仲字第00099—1号'
                },
                {
                    date: '2015-06-08',
                    content: '深圳市森堡家俬有限公司执行裁定书3',
                    caseReason: '民事执行',
                    caseIdentity: '原告-深圳市森堡家俬有限公司;被告-西安市干道市政建设开发有限责任公司',
                    caseNo: '（2015）西中执仲字第00098—1号'
                },
                {
                    date: '2015-06-08',
                    content: '深圳市森堡家俬有限公司执行裁定书1',
                    caseReason: '民事执行',
                    caseIdentity: '原告-深圳市森堡家俬有限公司;被告-西安市干道市政建设开发有限责任公司',
                    caseNo: '（2015）西中执仲字第00096—1号'
                },
                {
                    date: '2015-06-08',
                    content: '深圳市森堡家俬有限公司执行裁定书2',
                    caseReason: '民事执行',
                    caseIdentity: '原告-深圳市森堡家俬有限公司;被告-西安市干道市政建设开发有限责任公司',
                    caseNo: '（2015）西中执仲字第00097—1号'
                },
                {
                    date: '2014-03-18',
                    content: '胡云祥,深圳市森堡家俬有限公司与劳动争议二审民事判决书',
                    caseReason: '追索劳动报酬纠纷',
                    caseIdentity: '原告-深圳市森堡家俬有限公司',
                    caseNo: '（2014）深中法劳终字第591号'
                },
                {
                    date: '2013-05-20',
                    content: '郑晓红与张铭远买卖合同纠纷一审民事判决书',
                    caseReason: '买卖合同纠纷',
                    caseIdentity: '',
                    caseNo: '（2012）新商初字第379号'
                }
            ],
            count: '',
            page: ''
        };
    },
    methods: {
        getData () {
            return this.dataLaw.slice(0, 9);
        },
        changePage () {
            console.log(this.current);
            this.LawList = this.getData();
        }
    },
    mounted () {
        this.LawList = this.getData();
        this.count = 18;
        this.page = 1;
    }
};
</script>
<style scoped>
</style>

