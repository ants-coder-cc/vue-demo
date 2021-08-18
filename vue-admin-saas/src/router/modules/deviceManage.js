import Layout from '@/layout'
const deviceManageRouter = {
  path: '/deviceManage',
  component: Layout,
  redirect: '/',
  name: '设备管理',
  meta: {
    title: 'deviceManage',
    icon: 'dashboard',
    roles: ['admin']
  },
  children: [
    {
      path: 'batteryManage',
      name: '电池管理',
      redirect: '/deviceManage/batteryManage/battery',
      component: () => import('@/views/deviceManage/batteryManage'),
      meta: {
        title: 'deviceManage',
        icon: 'dashboard'
      },
      children: [{
        path: 'battery',
        name: '电池',
        component: () => import('@/views/deviceManage/batteryManage'),
        meta: { title: 'battery', icon: 'dashboard' }
      },
      {
        path: 'operator',
        name: '电池运营商',
        component: () => import('@/views/deviceManage/batteryManage/operator'),
        meta: { title: 'operator', icon: 'dashboard' }
      }]
    },
    {
      path: 'cabinetManage',
      name: '换电柜管理',
      component: () => import('@/views/deviceManage/cabinetManage'),
      meta: {
        title: 'cabinetManage',
        icon: 'dashboard',
        roles: ['admin']
      }
    }

  ]
}

export default deviceManageRouter
