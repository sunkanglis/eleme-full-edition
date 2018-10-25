
import indentlist_template from '../views/indent/indentlist.html';
import indent_list from '../models/indentlist_models';
import indent_detail_controller from './indent_detail_controller';

const render = async () => {
    
    
    let _template = Handlebars.compile(indentlist_template);
    var data =  await indent_list();
    let _html = _template({indentlist:data.orders});
    document.querySelector('#indent-list').innerHTML = _html;

    //滚动加载订单
    var Y = $('#root').height(); 
    var flag = true;
    $(window).on('scroll',function(){
        var scroll_y = $(window).scrollTop();
        //ajax请求数据
        if(scroll_y > Y - 1240 && flag == true){
            flag = false;
            $('.indent-loading').css('visibility','visible');
            setTimeout(()=>{
                $('.indent-loading').css('visibility','hidden');
                $('#indent-list').html(_html+$('#indent-list').html());
                Y = $('#root').height();
                flag = true;
            },2000)
        }
    })
    //点击进入订单详情
    $('#indent-list').on('tap','li',function(){
        var path = $(this).attr('path');
        indent_detail_controller.render(path);
    })

}
export default {
    render
}