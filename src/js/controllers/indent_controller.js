
import indent_template from '../views/indent/indent.html';
import indentlist_controller from './indentlist_controller';

import footer_controller from './footer_controller';
const render = () => {
    
    document.querySelector('#root').innerHTML = indent_template;

    //点击查看三个月前订单
    $('.limited').on('tap',function(){
        //判断是否登录
        var tel = sessionStorage.getItem('tel');
        if(tel === null){
            window.location.replace("http://localhost:8080/login.html");
        }else{
            //登录打开订单列
            $(this).hide();
            setTimeout(()=>{
                $('.indent-loading').css('visibility','visible');
            },1000)
            setTimeout(()=>{
                $('.indent-loading').css('visibility','hidden');
                indentlist_controller.render();
            },1500)
        }
    })

    footer_controller.render();
}
export default {
    render
}