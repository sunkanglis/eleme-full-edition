
import footer_temlpate from '../views/footer.html';
//footer
const render = () =>{
    let _html = footer_temlpate;
    $('.home-container').append(_html);
    $('.mine-container').append(_html);
    $('.indent-container').append(_html);

}
export default {
    render
}