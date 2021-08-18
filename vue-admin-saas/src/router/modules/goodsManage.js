import Layout from '@/layout'
const goodsManageRouter = {
  path: '/goodsManage',
  component: Layout,
  // redirect: '/',
  name: '商品管理',
  meta: {
    title: 'goodsManage',
    icon: 'dashboard',
    roles: ['admin']
  },
  children: [
    {
      path: 'comboManage',
      name: '套餐管理',
      // redirect: '/deviceManage/batteryManage/battery',
      component: () => import('@/views/goodsManage/comboManage'),
      meta: {
        title: 'comboManage',
        icon: 'dashboard'
      }
    },
    {
      path: 'breakMoneyManage',
      name: '违约金管理',
      component: () => import('@/views/goodsManage/breakMoneyManage'),
      meta: {
        title: 'breakMoneyManage',
        icon: 'dashboard',
        roles: ['admin']
      }
    }

  ]
}

export default goodsManageRouter
