/**
 * @description the aim to create this config is to have
 *  a single source of truth for the routes defination.
 *  the reason we are not importing the Components here
 *  for the property `Component` is to avoid circular
 *  import dependencies error.
 *  Components will be assigned in config/routes.ts
 */
 export const routesConfig = {
    index: {
      id: 'index',
      name: 'Home',
      description: 'Home page',
      path: '/',
      path_string: () => {
        return `/`;
      },
      exact: true,
      isPrivate: false,
      Component: undefined,
      children:{
        admin: {
            id: 'admin',
            name: 'Admin Settings page',
            description: 'Admin Home page based on a route',
            path: '/admin',
            path_string: () => {
              return `/admin`;
            },
            exact: true,
            isPrivate: true,
            Component: undefined,
            children:{
                adminSetting: {
                    id: 'adminSetting',
                    name: 'Admin Settings page',
                    description: 'Org oR SP Admin page based on a route',
                    path: '/admin/:adminType',
                    path_string: (params) => {
                      return `/admin/${params.adminType}`;
                    },
                    exact: true,
                    isPrivate: true,
                    Component: undefined
                  },
            }
          },
        org: {
            id: 'org',
            name: 'Org Home',
            description: 'Org Home page with lists of orgs to select',
            path: '/org',
            path_string: () => {
              return `/org`;
            },
            exact: true,
            isPrivate: true,
            Component: undefined,
            children:{
                singleOrg: {
                    id: 'singleOrg',
                    name: 'Individual Org Home',
                    description: 'Indiviual Org Home page with lists of devices',
                    path: '/org/:orgId',
                    path_string: (params) => {
                      return `/org/${params.orgId}`;
                    },
                    exact: true,
                    isPrivate: true,
                    Component: undefined
                  },
            }
          },
          sp: {
            id: 'sp',
            name: 'SP Home',
            description: 'SP Home page with lists of Services to select',
            path: '/sp',
            path_string: () => {
              return `/sp`;
            },
            exact: true,
            isPrivate: true,
            Component: undefined,
            children:{
                singleSp: {
                    id: 'singleSp',
                    name: 'Individual SP Home',
                    description: 'Indiviual SP Home page with lists of Services',
                    path: '/sp/:spId',
                    path_string: (params) => {
                      return `/sp/${params.spId}`;
                    },
                    exact: true,
                    isPrivate: true,
                    Component: undefined
                  }
            }
          },
      }
    },
    
  };