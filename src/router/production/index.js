
export default [
    {
        path: '/production',
        name: 'production',
        component: () => import('@/views/production/index'),
        meta: {
            requireAuth: true
        }
    }
];
