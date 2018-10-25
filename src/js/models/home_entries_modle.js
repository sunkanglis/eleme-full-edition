

//提供首页轮播图entries数据

const entry_list = () =>{
   
    return $.ajax({
        url: '/api/entry/entry_list',
            success: (res) => {
                return res;
            }
    })

}
export default {
    entry_list
}