
import Router from './route'
import home_controller from './controllers/home_controller';


// home_controller.render(); 
// 启动路由
const router = new Router({ initial: '#/home' });
window.router = router;
router.init();
