import Layout from '@/layout'
const orderManageRouter = {
  path: '/orderManage',
  component: Layout,
  // redirect: '/',
  name: '订单管理',
  meta: {
    title: 'orderManage',
    icon: 'dashboard',
    roles: ['admin']
  },
  children: [
    {
      path: 'rentOrder',
      name: '租金订单',
      // redirect: '/deviceManage/batteryManage/battery',
      component: () => import('@/views/orderManage/rentOrder'),
      meta: {
        title: 'rentOrder',
        icon: 'dashboard'
      }
    },
    {
      path: 'exchangeOrder',
      name: '换电订单',
      component: () => import('@/views/orderManage/exchangeOrder'),
      meta: {
        title: 'exchangeOrder',
        icon: 'dashboard',
        roles: ['admin']
      }
    }

  ]
}

export default orderManageRouter
