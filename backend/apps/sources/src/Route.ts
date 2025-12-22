interface RouterType {
    link: string;
    modules: string;
    controller: any;
    action: string;
    method?: string
};
class Route {
    private routes: RouterType[] = [];
    static getMethod(router: any) {
        if (router.method) return router.method;
        return 'get';
    }
    add(prefix: string, routeList: RouterType[] = []) {
        const router: RouterType[] = [];
        routeList.forEach((params) => {
            params.link = prefix + params.link;
            router.push(params);
        });
        if (!this.routes.length) {
            this.routes = router;
        } else {
            this.routes = [...this.routes, ...router];
        }
    }
    addGS(link: string, controller: any, modules: string) {
        const router: { link: string; modules: string; controller: any; action: string; method?: string }[] = [
            { link: link + "/getList", modules, controller, action: 'index' },
            { link: link + '/detail/:code([0-9]+)', modules, controller, action: 'detail' },
            { link: link + '/create', modules, controller, action: 'update', method: 'post' },
            { link: link + '/edit/:code([0-9]+)', modules, controller, action: 'update', method: 'post' },
            { link: link + '/copy', modules, controller, action: 'copy', method: 'post' },
            { link: link + '/import', modules, controller, action: 'import', method: 'post' },
            { link: link + '/export', modules, controller, action: 'export' },
            { link: link + '/delete/:code([0-9]+)', modules, controller, action: 'deleteone' },
            { link: link + '/delete', modules, controller, action: 'delete', method: 'post' },
        ];
        if (!this.routes.length) {
            this.routes = router;
        } else {
            this.routes = [...this.routes, ...router];
        }
    }
    getRouter() {
        return this.routes;
    }
}
export default Route;
