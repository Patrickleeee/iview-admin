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
            {{ description }}
        </Col>
    </Row>
</template>
<script>
    export default {
        name: 'eventCard',
        data () {
            return {
            };
        },
        props: {
            description: String
        }
    };
</script>
