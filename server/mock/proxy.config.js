let Mock = require('mockjs');

module.exports = {
    'GET /api/hello': function () {

        return {
            'status': 200,
            'result': `${Mock.mock({
                "number|1000-2000": 100
            }).number}这是从后台获取的hello world！`
        }
    }
};