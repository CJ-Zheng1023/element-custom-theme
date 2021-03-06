import Panel from './components/panel'
import Well from './components/well'
import ListItem from './components/listItem'
import Thumbnail from './components/thumbnail'
import Stat from './components/stat'
import Stat1 from './components/stat1'
import {Filter, FilterItem} from './components/filter'
const components = [
  Panel,
  Well,
  ListItem,
  Thumbnail,
  Filter,
  FilterItem,
  Stat,
  Stat1
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
  FilterItem,
  Stat,
  Stat1
}
