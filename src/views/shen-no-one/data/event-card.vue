<template>
    <Row style="background:#eee;padding:20px">
        <Col span="8">
            <Card>
                <div style="text-align:center">
                <img class="avator-img" src="../../../images/Bichon.gif" />
            </div>
            </Card> 
        </Col>
        <Col span="15" offset="1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent euismod fringilla nibh, feugiat pretium velit. Integer elit urna, maximus vitae rutrum hendrerit, pretium sed massa.
        </Col>
    </Row>
</template>
<script>
    export default {
        name: 'eventCard',
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
