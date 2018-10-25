
//home视图的控制器
import home_template from '../views/home/home.html';
import position_model from '../models/position_modle'


import entries_controller from './entries_controller';
import shoplist_controller from './shoplist_controller';
import footer_controller from './footer_controller';
import menu_controller from './menu_controller';


// 负责将home视图模板渲染在对应的地方
const render = async() => {

    let position = await position_model.position();
    
    let _template = Handlebars.compile(home_template);
    let _html = _template({city:position.content.address});

    

    
    document.querySelector('#root').innerHTML = _html;
    entries_controller.render();
    shoplist_controller.render();
    footer_controller.render();
    //商品列表点击事件，打开商品详情
    $('.shoplist').on('tap','.item .top',()=>{
        menu_controller.render();
    })
    
}
export default {
    render
}
