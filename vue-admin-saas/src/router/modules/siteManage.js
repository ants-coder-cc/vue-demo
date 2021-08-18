import Layout from '@/layout'
const siteManageRouter = {
  path: '/siteManage',
  component: Layout,
  redirect: '/',
  name: '站点管理',
  meta: {
    title: 'siteManage',
    icon: 'dashboard',
    roles: ['admin']
  },
  children: [
    {
      path: 'site',
      name: '站点管理',
      component: () => import('@/views/siteManage/site'),
      meta: {
        title: 'siteManage',
        icon: 'dashboard'
      }
    }
  ]
}

export default siteManageRouter
