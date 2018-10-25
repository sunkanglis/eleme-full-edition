
// 提供订单详情信息数据
const indent_detail_list = (path) => {

    return  $.ajax({
                url: '/static/mock/indent_detail/indent_detail_' + path + '.json',
                success: (res) => {
                    return res;
                }
            })
}
export default indent_detail_list

