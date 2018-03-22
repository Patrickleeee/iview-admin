<template lang="html">
    <div class="self-tabs-style" style="height:auto;padding-bottom: 1.5em;">
        <Row class-name="home-page-row1" :gutter="10"  style="heigh:400px">
            <Col :md="24" :lg="24" :style="{marginBottom: '10px'}">
                <Card>
                    <p slot="title" class="card-title" style="text-align:center">
                        <Icon type="stats-bars"></Icon>
                        贷后风险（2017年3月规则触发情况）
                    </p>
                    <a type="text" slot="extra" @click.prevent="addNewToDoItem">
                        <Icon type="more">more</Icon>
                    </a>
                    <div class="to-do-list-con">
                        <pandect-risk></pandect-risk>
                    </div>
                </Card>
            </Col>
        </Row>
        <Row class-name="home-page-row1" :gutter="10">
            <Col :md="24" :lg="24" :style="{marginBottom: '10px'}">
                <Card>
                    <p slot="title" class="card-title" style="text-align:center">
                        <Icon type="ios-pulse-strong"></Icon>
                        {{managementA}}
                    </p>
                    <div>
                        <Table :data="managementAData" :columns="tableColumns" stripe>
                            <p slot="header" class="card-title" stype="margin-left: 10px">
                                <Tag color="green">触发规则0条</Tag>
                                <Tag color="green">状态：正常</Tag>
                            </p>
                        </Table>
                    </div>
                </Card>
                <Card>
                    <p slot="title" class="card-title" style="text-align:center">
                        <Icon type="ios-pulse-strong"></Icon>
                        {{managementB}}
                    </p>
                    <div>
                        <Table :data="managementBData" :columns="tableColumns" stripe>
                            <p slot="header" class="card-title" stype="margin-left: 10px">
                                <Tag color="green">触发规则0条</Tag>
                                <Tag color="green">状态：正常</Tag>
                            </p>
                        </Table>
                    </div>
                </Card>
                <Card>
                    <p slot="title" class="card-title" style="text-align:center">
                        <Icon type="ios-pulse-strong"></Icon>
                        {{financeA}}
                    </p>
                    <div>
                        <Table :data="managementAData" :columns="tableColumns" stripe>
                            <p slot="header" class="card-title" stype="margin-left: 10px">
                                <Tag color="green">触发规则0条</Tag>
                                <Tag color="green">状态：正常</Tag>
                            </p>
                        </Table>
                    </div>
                </Card>
                <Card>
                    <p slot="title" class="card-title" style="text-align:center">
                        <Icon type="ios-pulse-strong"></Icon>
                        {{financeB}}
                    </p>
                    <div>
                        <Table :data="managementBData" :columns="tableColumns" stripe>
                            <p slot="header" class="card-title" stype="margin-left: 10px">
                                <Tag color="green">触发规则0条</Tag>
                                <Tag color="green">状态：正常</Tag>
                            </p>
                        </Table>
                    </div>
                </Card>
                <Card>
                    <p slot="title" class="card-title" style="text-align:center">
                        <Icon type="ios-pulse-strong"></Icon>
                        {{law}}
                    </p>
                    <div>
                        <Table :data="lawData" :columns="tableColumns" stripe>
                            <p slot="header" class="card-title" stype="margin-left: 10px">
                                <Tag color="green">触发规则0条</Tag>
                                <Tag color="green">状态：正常</Tag>
                            </p>
                        </Table>
                    </div>
                </Card>
                <Card>
                    <p slot="title" class="card-title" style="text-align:center">
                        <Icon type="ios-pulse-strong"></Icon>
                        {{other}}
                    </p>
                    <div>
                        <Table :data="otherData" :columns="tableColumns" stripe>
                            <p slot="header" class="card-title" stype="margin-left: 10px">
                                <Tag color="green">触发规则0条</Tag>
                                <Tag color="green">状态：正常</Tag>
                            </p>
                        </Table>
                    </div>
                </Card>
            </Col>
        </Row>
    </div>
</template>
<script>
import {listRiskControlResult} from '@/api/request';
import pandectRisk from './data/base/pandect-risk.vue';
export default {
    components: {
        pandectRisk
    },
    data () {
        return {
            managementA: '经营风险a（六中三触发）',
            managementAData: [],
            managementB: '经营风险b（五中二触发）',
            managementBData: [],
            financeA: '财务风险a（连续两月，五中二触发）',
            financeAData: [],
            financeB: '财务风险b（连续两月，四中二触发）',
            financeBData: [],
            law: '法律与信用风险',
            lawData: [],
            other: '其他风险',
            otherData: [],
            tableColumns: [
                {title: '序号', type: 'index', width: 60, align: 'center'},
                {title: '管理类型', key: 'type'},
                {title: '监测内容', key: 'monitorContent'},
                {title: '阈值', key: 'threshold'},
                {title: '当前指标值', key: 'value'},
                {title: '是否触发',
                    key: 'trigger',
                    render: (h, params) => {
                        const text = params.row.trigger === 1 ? '触发' : '未触发';
                        const tagColor = params.row.trigger === 1 ? 'red' : 'green';
                        return h('Tag', {
                            props: {
                                type: 'border',
                                color: tagColor
                            }
                        }, text);
                    }}
            ],
            loading: true
        };
    },
    methods: {
        getList () {
            this.loading = true;
            new Promise((resolve, reject) => {
                listRiskControlResult().then(res => {
                    console.log(res.data);
                    if (res.data.state === '0001') {
                        let results = res.data.data;
                        for (var i in results) {
                            switch (i) {
                                case '经营风险a':
                                    this.managementAData = results[i];
                                    break;
                                case '经营风险b':
                                    this.managementBData = results[i];
                                    break;
                                case '财务风险a':
                                    this.financeAData = results[i];
                                    break;
                                case '财务风险b':
                                    this.financeBData = results[i];
                                    break;
                                case '法律与信用风险':
                                    this.lawData = results[i];
                                    break;
                                case '其他风险':
                                    this.otherData = results[i];
                                    break;
                                default:
                                    break;
                            }
                        }
                    }
                });
            });
        }
    },
    mounted () {
        this.getList();
    }
};
</script>

<style scoped>
</style> 

