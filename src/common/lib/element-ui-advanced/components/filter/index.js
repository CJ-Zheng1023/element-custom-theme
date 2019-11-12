import Filter from './src/Filter'
import FilterItem from './src/FilterItem'
Filter.install = function (Vue) {
  Vue.component(Filter.name, Filter)
}
FilterItem.install = function (Vue) {
  Vue.component(FilterItem.name, FilterItem)
}
export {Filter, FilterItem}
