export const getBrowserRoutes=(routes)=>{
    let route;
    if(Object.keys(routes).length){
        return Object.keys(routes).map(key=>{
            route=routes[key];
            const {path,Component}=route;
            let routeObj={
                path,
                element:(<Component/>),
            }
            if(route?.children && Object.keys(route?.children).length){
                routeObj['children']=getBrowserRoutes(route.children);
            };
            return routeObj;
        });
    }
    return [];
}