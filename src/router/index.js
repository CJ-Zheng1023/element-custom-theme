import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'

Vue.use(Router)
/** fandp **/
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
}, {
  path: 'tooltip',
  name: 'Tooltip',
  component: () => import('@/components/tooltip/Tooltip')
}, {
  path: 'tabs',
  name: 'Tabs',
  component: () => import('@/components/tabs/Tabs')
}, {
  path: 'tag',
  name: 'Tag',
  component: () => import('@/components/tag/Tag')
}]
/** zhengchj **/
const children2 = [{
  path: 'panel',
  name: 'Panel',
  component: () => import('@/components/panel/Panel')
}, {
  path: 'well',
  name: 'Well',
  component: () => import('@/components/well/Well')
}, {
  path: 'listItem',
  name: 'ListItem',
  component: () => import('@/components/listItem/ListItem')
}]
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      redirect: '/button',
      children: [...children1, ...children2]
    }
  ]
})
