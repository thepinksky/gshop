import Home from '../pages/Home';
import Search from '../pages/Search';
import Login from '../pages/Login';
import Register from '../pages/Register';


// 所有路由配置的数组
export default [
  {
    name: 'home',
    path: '/',
    component: Home
  },
  {
    name: 'search',
    path: '/search',
    component: Search
  },
  {
    name: 'login',
    path: '/login',
    component: Login
  },
  {
    name: 'register',
    path: '/register',
    component: Register
  },
]