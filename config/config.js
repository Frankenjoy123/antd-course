export default {
    plugins: [
        ['umi-plugin-react', {
            antd: true,
            dva: true
        }],
    ],
    routes: [{
        path: '/',
        component: '../layout',
        routes: [
            {
                path: '/',
                component: 'Helloworld',
            },
            {
                path: '/helloworld',
                component: 'Helloworld'
            },

            {
                path: 'puzzlecards',
                component: './puzzlecards'
            },

            {
                path: 'list',
                component: 'list'
            },

            {
                path: '/dashboard',
                routes: [
                    { path: '/dashboard/analysis', component: 'Dashboard/Analysis' },
                    { path: '/dashboard/monitor', component: 'Dashboard/Monitor' },
                    { path: '/dashboard/workplace', component: 'Dashboard/Workplace' }
                ]
            },
        ]
    }],
    proxy:{
        '/test':{
            target: 'http://114.116.89.193:8999',
            changeOrigin: true
        }
    },
    singular: true,
};

