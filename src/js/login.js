
//手机号登录验证
const controller = function(){
    let reg = /^1(3|4|5|7|8)\d{9}$/;
    
    let tel = $('input:first');
    $('button').on('click',function(e){
        e.preventDefault();
        if($('#tel').val()==''){
            $('.capion').show(function(){
                $('.capion').fadeOut(3000);
            });
        }else if($('#code').val()==''){
            $('.capion').text('请输入验证码')
            $('.capion').show(function(){
                $('.capion').fadeOut(3000);
            });
            console.log($('#tel').val());
        }else if(!reg.test($('#tel').val())){
            $('.capion').text('请输入正确的手机号')
            $('.capion').show(function(){
                $('.capion').fadeOut(3000);
            });
        }else{
            let user={tel:$('#tel').val()}
            let users_value = sessionStorage.getItem("users");
            let users = null;
            if(users_value == null){
                users = [];
            }else{
                users = JSON.parse(users_value);
            }
            var isExist=users.some(function(item){
                var res=item.tel==user.tel;
                return res;
            })
            if(!isExist){                            //如果不存在,将获取的对象存进数组里
                users.push(user);
            }
            sessionStorage.setItem('tel',user.tel);
            storage('users',users);
            window.location.replace("http://localhost:8080")
        }
    })

}
const storage = (key,value)=>{
    sessionStorage.setItem(key,JSON.stringify(value));
}

controller();