import Panel from './src/Panel'
Panel.install = function (Vue) {
  Vue.component(Panel.name, Panel)
}
export default Panel
