export default class NavigationUtil {

    /**
     * 跳转到指定页面
     * @param {*} params 要传递的参数
     * @param {*} page 要跳转的页面名(页面路由名)
     */
    static goPage(params, page) {
        //这个navigation一定要是HomaPage的navigation，因为导航器内部的页面由于割裂导致无法跳转
        const navigation = NavigationUtil.navigation;
        if (!navigation) {
            console.log('NavigationUtil.navigation can not be null')
        }
        navigation.navigate(
            page,
            {
                ...params
            }
        )
    }

    static resetToHomePage(params) {
        const { navigation } = params;
        navigation.navigate('Main')
    }
}