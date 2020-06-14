import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/home'



Vue.use(VueRouter)

  const routes = [
//  login路由
{ path: '/', redirect: '/login' },
    {
      path: '/login',
      name: 'login',
      
      component: () => import('@/views/login')
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      redirect: '/welcome',
      children: [
        { path: '/welcome', name: 'welcome', component: () => import('@/views/welcome') },
        { path: '/user', name: 'user', component: () => import('@/views/user') },
        { path: '/equipment ', name: 'equipment ', component: () => import('@/views/equipment') },
        { path: '/inform', name: 'inform', component: () => import('@/views/inform') },
        { path: '/detections', name: 'detections', component: () => import('@/views/detections') },
        { path: '/ce', name: 'ce', component: () => import('@/views/ce') },
        { path: '/warning', name: 'warning', component: () => import('@/views/warning') },
        { path: '/abnormal', name: 'abnormal', component: () => import('@/views/abnormal') },
        { path: '/operations', name: 'operations', component: () => import('@/views/operations') },
        { path: '/message', name: 'message', component: () => import('@/views/message') },
        { path: '/shebi',name: 'shebi',component: () => import('@/views/shebi')},
      ]
     
    }
    
    
    
]

const router = new VueRouter({
  routes
})

export default router
