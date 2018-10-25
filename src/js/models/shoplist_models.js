
// 提供商品信息数据
const shop_list = () => {
    return  $.ajax({
                // url: '/static/mock/list.json',
                url: '/api/job/list_time',
                success: (res) => {
                    return res;
                }
            })
}

export default {
    shop_list
}
