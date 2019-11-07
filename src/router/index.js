import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'

Vue.use(Router)
/** fandp **/
const originalPush = Router.prototype.push
Router.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}
const children1 = [{
  path: 'button',
  name: 'Button',
  component: () => import('@/components/button/Button')
}, {
  path: 'table',
  name: 'Table',
  component: () => import('@/components/table/Table')
}, {
  path: 'input',
  name: 'Input',
  component: () => import('@/components/input/Input')
}, {
  path: 'dialog',
  name: 'Dialog',
  component: () => import('@/components/dialog/Dialog')
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
