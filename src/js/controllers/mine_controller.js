
import mine_template from '../views/mine/mine.html';
import footer_controller from './footer_controller';

//我的
const render = () =>{
    
    document.querySelector('#root').innerHTML = mine_template;
    footer_controller.render();
    if(sessionStorage.getItem("tel")!=null){
        $('.profile-titile #tel').text(sessionStorage.getItem("tel"));
        $('.profile-titile #enjioy span').text('点击享受更多特权');
        
    }
}
export default {
    render
}