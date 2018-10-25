import indent_detail_template from '../views/indent/indent_detail.html';
import indent_detail_list from '../models/indentdetail_models';
import indent_controller from './indent_controller';
import indentlist_controller from './indentlist_controller';

const render = async(path) => {
    //订单详情数据渲染
    let _template = Handlebars.compile(indent_detail_template);
    var data = await indent_detail_list(path);

    let _html = _template({shoplist:data});

    document.querySelector('#root').innerHTML = _html;
    $(window).scrollTop(0)
    //回到订单列
    $('.header img').on('tap',function(){
        indent_controller.render();
        indentlist_controller.render();
    })
}
export default {
    render
}