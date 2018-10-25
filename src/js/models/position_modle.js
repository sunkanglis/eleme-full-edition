

const position = () =>{
    return $.ajax({
        url: '/position/location/ip?ak=e3Yxl2aQcW7Br965vj1HRwUniEGGoCwB',
            success: (res) => {
                
                return res;
            }
    })
}

export default {
    position
}