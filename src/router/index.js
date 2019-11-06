import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'

Vue.use(Router)
/** fandp **/
const children1 = [{
  path: 'button',
  name: 'Button',
  component: () => import('@/components/button/Button')
}]
/** zhengchj **/
const children2 = []
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      children: [...children1, ...children2]
    }
  ]
})
