
// 提供商品信息详情数据
const menu = () => {
    return  $.ajax({
                // url: '/static/mock/list.json',
                url: '/api/entry/menu',
                success: (res) => {
                    return res;
                }
            })
}

export default menu
