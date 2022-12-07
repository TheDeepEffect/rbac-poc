export const ROLES = {
  ECSU: "ec-superadmin",
  ECAD: "ec-admin",
  ORGOWN: "org-owner",
  ORGAD: "org-admin",
  ORGUSER: "org-user",
  SPAD: "sp-admin",
  SPUSER: "sp-user",
};

export const defaultPermissions = {
  [ROLES.ECSU]: [
    {
      id: "adminSetting",
      path: "/admin/:adminType",
      actions: {
        CREATE: true,
        READ: true,
        UPDATE: true,
        DELETE: true,
      },
    },
    {
      id: "admin",
      path: "/admin",
      actions: {
        CREATE: true,
        READ: true,
        UPDATE: true,
        DELETE: true,
      },
    },
    {
      id: "singleOrg",
      path: "/org/:orgId",
      actions: {
        CREATE: true,
        READ: true,
        UPDATE: true,
        DELETE: true,
      },
    },
    {
      id: "org",
      path: "/org",
      actions: {
        CREATE: true,
        READ: true,
        UPDATE: true,
        DELETE: true,
      },
    },
    {
      id: "singleSp",
      path: "/sp/:spId",
      actions: {
        CREATE: true,
        READ: true,
        UPDATE: true,
        DELETE: true,
      },
    },
    {
      id: "sp",
      path: "/sp",
      actions: {
        CREATE: true,
        READ: true,
        UPDATE: true,
        DELETE: true,
      },
    },
  ],
  [ROLES.ECAD]: [
    {
      id: "adminSetting",
      path: "/admin/:adminType",
      actions: {
        CREATE: false,
        READ: true,
        UPDATE: true,
        DELETE: false,
      },
    },
    {
      id: "admin",
      path: "/admin",
      actions: {
        CREATE: false,
        READ: true,
        UPDATE: true,
        DELETE: false,
      },
    },

    {
      id: "org",
      path: "/org",
      actions: {
        CREATE: true,
        READ: true,
        UPDATE: true,
        DELETE: true,
      },
    },
    {
      id: "singleSp",
      path: "/sp/:spId",
      actions: {
        CREATE: true,
        READ: true,
        UPDATE: true,
        DELETE: true,
      },
    },
    {
      id: "sp",
      path: "/sp",
      actions: {
        CREATE: true,
        READ: true,
        UPDATE: true,
        DELETE: true,
      },
    },
  ],
  [ROLES.ORGOWN]: [
    {
      id: "adminSetting",
      path: "/admin/:adminType",
      actions: {
        CREATE: true,
        READ: true,
        UPDATE: true,
        DELETE: true,
      },
    },
    // {  No Access to this page so removing this from array
    //   id: "admin",
    //   path: "/admin",
    //   actions: {
    //     CREATE: true,
    //     READ: true,
    //     UPDATE: true,
    //     DELETE: true,
    //   },
    // },
    {
      id: "singleOrg",
      path: "/org/:orgId",
      actions: {
        CREATE: true,
        READ: true,
        UPDATE: true,
        DELETE: true,
      },
    },
    {
      id: "org",
      path: "/org",
      actions: {
        CREATE: false,
        READ: true,
        UPDATE: false,
        DELETE: false,
      },
    },
    // { No Access to this page so removing this from array
    //   id: "singleSp",
    //   path: "/sp/:spId",
    //   actions: {
    //     CREATE: true,
    //     READ: true,
    //     UPDATE: true,
    //     DELETE: true,
    //   },
    // },
    // {
    //   id: "sp",
    //   path: "/sp",
    //   actions: {
    //     CREATE: true,
    //     READ: true,
    //     UPDATE: true,
    //     DELETE: true,
    //   },
    // },
  ],
  [ROLES.ORGAD]: [
    {
      id: "adminSetting",
      path: "/admin/:adminType",
      actions: {
        CREATE: false,
        READ: true,
        UPDATE: true,
        DELETE: false,
      },
    },
    // {  No Access to this page so removing this from array
    //   id: "admin",
    //   path: "/admin",
    //   actions: {
    //     CREATE: true,
    //     READ: true,
    //     UPDATE: true,
    //     DELETE: true,
    //   },
    // },
    {
      id: "singleOrg",
      path: "/org/:orgId",
      actions: {
        CREATE: true,
        READ: true,
        UPDATE: true,
        DELETE: true,
      },
    },
    {
      id: "org",
      path: "/org",
      actions: {
        CREATE: false,
        READ: true,
        UPDATE: false,
        DELETE: false,
      },
    },
    // { No Access to this page so removing this from array
    //   id: "singleSp",
    //   path: "/sp/:spId",
    //   actions: {
    //     CREATE: true,
    //     READ: true,
    //     UPDATE: true,
    //     DELETE: true,
    //   },
    // },
    // {
    //   id: "sp",
    //   path: "/sp",
    //   actions: {
    //     CREATE: true,
    //     READ: true,
    //     UPDATE: true,
    //     DELETE: true,
    //   },
    // },
  ],
  [ROLES.ORGUSER]: [
    // {  No Access to this page so removing this from array
    //   id: "adminSetting",
    //   path: "/admin/:adminType",
    //   actions: {
    //     CREATE: false,
    //     READ: true,
    //     UPDATE: true,
    //     DELETE: false,
    //   },
    // },
    // {
    //   id: "admin",
    //   path: "/admin",
    //   actions: {
    //     CREATE: true,
    //     READ: true,
    //     UPDATE: true,
    //     DELETE: true,
    //   },
    // },
    {
      id: "singleOrg",
      path: "/org/:orgId",
      actions: {
        CREATE: false,
        READ: true,
        UPDATE: true,
        DELETE: true,
      },
    },
    {
      id: "org",
      path: "/org",
      actions: {
        CREATE: false,
        READ: true,
        UPDATE: false,
        DELETE: false,
      },
    },
    // { No Access to this page so removing this from array
    //   id: "singleSp",
    //   path: "/sp/:spId",
    //   actions: {
    //     CREATE: true,
    //     READ: true,
    //     UPDATE: true,
    //     DELETE: true,
    //   },
    // },
    // {
    //   id: "sp",
    //   path: "/sp",
    //   actions: {
    //     CREATE: true,
    //     READ: true,
    //     UPDATE: true,
    //     DELETE: true,
    //   },
    // },
  ],
  [ROLES.SPAD]: [
    {
      id: "adminSetting",
      path: "/admin/:adminType",
      actions: {
        CREATE: true,
        READ: true,
        UPDATE: true,
        DELETE: true,
      },
    },
    // {  No Access to this page so removing this from array
    //   id: "admin",
    //   path: "/admin",
    //   actions: {
    //     CREATE: true,
    //     READ: true,
    //     UPDATE: true,
    //     DELETE: true,
    //   },
    // },
    // {
    //   id: "singleOrg",
    //   path: "/org/:orgId",
    //   actions: {
    //     CREATE: true,
    //     READ: true,
    //     UPDATE: true,
    //     DELETE: true,
    //   },
    // },
    // {
    //   id: "org",
    //   path: "/org",
    //   actions: {
    //     CREATE: false,
    //     READ: true,
    //     UPDATE: false,
    //     DELETE: false,
    //   },
    // },
    {
      id: "singleSp",
      path: "/sp/:spId",
      actions: {
        CREATE: true,
        READ: true,
        UPDATE: true,
        DELETE: true,
      },
    },
    {
      id: "sp",
      path: "/sp",
      actions: {
        CREATE: false,
        READ: true,
        UPDATE: false,
        DELETE: false,
      },
    },
  ],
  [ROLES.SPUSER]: [
    // { No Access to this page so removing this from array
    //   id: "adminSetting",
    //   path: "/admin/:adminType",
    //   actions: {
    //     CREATE: true,
    //     READ: true,
    //     UPDATE: true,
    //     DELETE: true,
    //   },
    // },
    // {
    //   id: "admin",
    //   path: "/admin",
    //   actions: {
    //     CREATE: true,
    //     READ: true,
    //     UPDATE: true,
    //     DELETE: true,
    //   },
    // },
    // {
    //   id: "singleOrg",
    //   path: "/org/:orgId",
    //   actions: {
    //     CREATE: true,
    //     READ: true,
    //     UPDATE: true,
    //     DELETE: true,
    //   },
    // },
    // {
    //   id: "org",
    //   path: "/org",
    //   actions: {
    //     CREATE: false,
    //     READ: true,
    //     UPDATE: false,
    //     DELETE: false,
    //   },
    // },
    {
      id: "singleSp",
      path: "/sp/:spId",
      actions: {
        CREATE: false,
        READ: true,
        UPDATE: true,
        DELETE: false,
      },
    },
    {
      id: "sp",
      path: "/sp",
      actions: {
        CREATE: false,
        READ: true,
        UPDATE: false,
        DELETE: false,
      },
    },
  ],
};

export const mockUsers = [
  {
    name: "Robin",
    role: ROLES.SPUSER,
    permissions: defaultPermissions?.[ROLES.SPUSER],
  },
];
