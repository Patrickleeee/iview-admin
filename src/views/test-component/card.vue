<template>
    <Row style="background:#eee;padding:20px">
        <Col span="11">
            <Card :bordered="false">
                <p slot="title">下游经销商</p>
                <p>累计借款数量    1</p>
                <p>逾期数量        2</p>
                <p>待还款订单数量  3</p>
                <p>逾期订单数量    4</p>
                <p>待还款总金额    5</p>
                <p>逾期总金额      6</p>
            </Card>
        </Col>
        <Col span="11" offset="2">
            <Card shadow>
                <p slot="title">上游经销商</p>
                <p>累计借款数量    1</p>
                <p>逾期数量        2</p>
                <p>待还款订单数量  3</p>
                <p>逾期订单数量    4</p>
                <p>待还款总金额    5</p>
                <p>逾期总金额      6</p>
            </Card>
        </Col>
    </Row>
</template>
<script>
    export default {
        name: 'upstreamCard',
        data () {
            return {
                movieList: [
                    {
                        name: '累计借款数量',
                        url: 'https://movie.douban.com/subject/1292052/',
                        rate: 9.6
                    },
                    {
                        name: '逾期数量',
                        url: 'https://movie.douban.com/subject/1295644/',
                        rate: 9.4
                    },
                    {
                        name: '待还款订单数量',
                        url: 'https://movie.douban.com/subject/1291546/',
                        rate: 9.5
                    },
                    {
                        name: '逾期订单数量',
                        url: 'https://movie.douban.com/subject/1292720/',
                        rate: 9.4
                    },
                    {
                        name: '待还款总金额',
                        url: 'https://movie.douban.com/subject/1292063/',
                        rate: 9.5
                    },
                    {
                        name: '逾期总金额',
                        url: 'https://movie.douban.com/subject/1291561/',
                        rate: 9.2
                    }
                ]
            };
        }
    };
</script>
