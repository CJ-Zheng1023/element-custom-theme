import Panel from './components/panel'
import Well from './components/well'
import ListItem from './components/listItem'
import Thumbnail from './components/thumbnail'
import {Filter, FilterItem} from './components/filter'
const components = [
  Panel,
  Well,
  ListItem,
  Thumbnail,
  Filter,
  FilterItem
]
const install = function (Vue) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
export default {
  install,
  Panel,
  Well,
  ListItem,
  Thumbnail,
  Filter,
  FilterItem
}
