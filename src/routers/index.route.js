import home from '@/page/home';
import test from '@/page/test';

const routes = [
    {
        path: '/',
        name: 'home',
        component: home
    },
    {
        path: '/test',
        name: 'test',
        component: test
    }
];

export default routes;