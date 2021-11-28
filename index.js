// 导入组件，组件必须声明 name
import popupLayer from './index.vue'

// 为组件提供 install 安装方法，供按需引入
popupLayer.install = function (Vue,options={}) {
    options.storeName && (popupLayer.props.storeName.default = options.storeName)
    options.storeType && (popupLayer.props.storeType.default = options.storeType)
    Vue.component(popupLayer.name, popupLayer)
}

// 导出组件
export default popupLayer
