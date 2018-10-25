
import menu_template from '../views/home/menu.html';
import menu from '../models/menu_models';
import home_controller from './home_controller';
import footer_controller from './footer_controller';



const render = async () => {
    
    
    let _template = Handlebars.compile(menu_template);
    var data =  await menu();
    console.log(data);
    let _html = _template({menu_data:data});
    document.querySelector('#root').innerHTML = _html;

    $(window).scrollTop(0);
    //点击返回
    $('.menu-header').on('tap','.callback',()=>{
        home_controller.render();
        footer_controller.render();
    })
}
export default {
    render
}