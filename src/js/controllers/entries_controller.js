
//首页分类
import home_entries_template from '../views/home/home_entries.html'
//首页分类数据
import home_entries_model from '../models/home_entries_modle'

const render = async () =>{
    let entries_data = await home_entries_model.entry_list();
    //分类数据渲染
    let _template = Handlebars.compile(home_entries_template);
    let _html = _template({entry_list:entries_data.entries});

    $('.slide .swiper-container .swiper-slide_first').html(_html);
    //分类滑动
    var swiper_entry = new Swiper('#swiper_entry',{
        pagination: {
            el: '.swiper-pagination',
          }
    });
    //logo滑动
    var swiper_activity = new Swiper('#swiper_banner',{
        loop :true,
        autoplay:{
            delay : 2000,
        },
        pagination: {
            el: '.swiper-pagination',
        }
    });

}

export default {
    render
}