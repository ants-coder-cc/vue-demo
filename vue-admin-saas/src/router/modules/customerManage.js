import Layout from '@/layout'
const customerManageRouter = {
  path: '/customerManage',
  component: Layout,
  // redirect: '/',
  name: '客户管理',
  meta: {
    title: 'customerManage',
    icon: 'dashboard',
    roles: ['admin']
  },
  children: [
    {
      path: 'operatorManage',
      name: '运营商管理',
      // redirect: '/deviceManage/batteryManage/battery',
      component: () => import('@/views/customerManage/operatorManage'),
      meta: {
        title: 'operatorManage',
        icon: 'dashboard'
      }
    },
    {
      path: 'userManage',
      name: '用户管理',
      component: () => import('@/views/customerManage/userManage'),
      meta: {
        title: 'userManage',
        icon: 'dashboard',
        roles: ['admin']
      }
    },
    {
      path: 'whiteListManage',
      name: '白名单管理',
      component: () => import('@/views/customerManage/whiteListManage'),
      meta: {
        title: 'whiteListManage',
        icon: 'dashboard',
        roles: ['admin']
      }
    }

  ]
}

export default customerManageRouter
