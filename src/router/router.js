import Main from '@/views/Main.vue';

// 不作为Main组件的子页面展示的页面单独写，如下
export const loginRouter = {
    path: '/login',
    name: 'login',
    meta: {
        title: 'Login - 登录'
    },
    component: resolve => { require(['@/views/login.vue'], resolve); }
};

export const page404 = {
    path: '/*',
    name: 'error-404',
    meta: {
        title: '404-页面不存在'
    },
    component: resolve => { require(['@/views/error-page/404.vue'], resolve); }
};

export const page403 = {
    path: '/403',
    meta: {
        title: '403-权限不足'
    },
    name: 'error-403',
    component: resolve => { require(['@//views/error-page/403.vue'], resolve); }
};

export const page500 = {
    path: '/500',
    meta: {
        title: '500-服务端错误'
    },
    name: 'error-500',
    component: resolve => { require(['@/views/error-page/500.vue'], resolve); }
};

export const preview = {
    path: '/preview',
    name: 'preview',
    component: resolve => { require(['@/views/form/article-publish/preview.vue'], resolve); }
};

export const locking = {
    path: '/locking',
    name: 'locking',
    component: resolve => { require(['@/views/main-components/lockscreen/components/locking-page.vue'], resolve); }
};

// 作为Main组件的子页面展示但是不在左侧菜单显示的路由写在otherRouter里
export const otherRouter = {
    path: '/',
    name: 'otherRouter',
    redirect: '/home',
    component: Main,
    children: [
        { path: 'home', title: {i18n: 'home'}, name: 'home_index', component: resolve => { require(['@/views/home/home.vue'], resolve); } },
        { path: 'ownspace', title: '个人中心', name: 'ownspace_index', component: resolve => { require(['@/views/own-space/own-space.vue'], resolve); } },
        { path: 'order/:order_id', title: '订单详情', name: 'order-info', component: resolve => { require(['@/views/advanced-router/component/order-info.vue'], resolve); } }, // 用于展示动态路由
        { path: 'shopping', title: '购物详情', name: 'shopping', component: resolve => { require(['@/views/advanced-router/component/shopping-info.vue'], resolve); } }, // 用于展示带参路由
        { path: 'message', title: '消息中心', name: 'message_index', component: resolve => { require(['@/views/message/message.vue'], resolve); } },
        { path: 'newAccount', title: '新建账户', name: 'new-account', component: resolve => {require(['@/views/system-settings/new-account.vue'], resolve); } }
    ]
};

// 作为Main组件的子页面展示并且在左侧菜单显示的路由写在appRouter里
export const appRouter = [
    // {
    //     path: '/shen-no-one',
    //     icon: 'ionic',
    //     title: '深一号',
    //     name: 'shenNoOne',
    //     component: Main,
    //     children: [
    //         { path: 'selfBusiness', title: '核心工厂', name: 'shen-self-business', icon: 'disc', component: resolve => { require(['@/views/shen-no-one/self-business.vue'], resolve); } },
    //         { path: 'factoryAnalyze', title: '工厂分析', name: 'shen-factory-analyze', icon: 'flash', component: resolve => { require(['@/views/shen-no-one/factory-analyze.vue'], resolve); } },
    //         { path: 'loanManagement', title: '借款管理', name: 'shen-loan-management', icon: 'flash', component: resolve => { require(['@/views/shen-no-one/loan-management.vue'], resolve); } },
    //         { path: 'infoManagement', title: '信息类别', name: 'shen-info-management', icon: 'information', component: resolve => { require(['@/views/shen-no-one/info-management.vue'], resolve); } },
    //         { path: 'downstreamBusiness', title: '下游客户', name: 'shen-downstream-business', icon: 'arrow-graph-down-right', component: resolve => { require(['@/views/shen-no-one/downstream-business.vue'], resolve); } },
    //         { path: 'upstreamBusiness', title: '上游客户', name: 'shen-upstream-business', icon: 'arrow-graph-up-right', component: resolve => { require(['@/views/shen-no-one/upstream-business.vue'], resolve); } },
    //         { path: 'majorEvent', title: '重大事件', name: 'shen-major-event', icon: 'flash', component: resolve => { require(['@/views/shen-no-one/major-event.vue'], resolve); } }

    //         // { path: 'index', title: '深一号', name: 'riskmap_index', component: resolve => { require(['@/views/business-market/risk-map.vue'], resolve); } }
    //     ]
    // }
    // {
    //     path: '/order-management',
    //     icon: 'eye',
    //     title: '订单管理',
    //     name: 'orderManagement',
    //     component: Main,
    //     children: [
    //         { path: 'orderList', title: '订单列表', name: 'order-list', icon: 'table', component: resolve => { require(['@/views/order/order-list.vue'], resolve); } },
    //         { path: 'systemAudit', title: '系统自动审核', name: 'system-audit', icon: 'images', component: resolve => { require(['@/views/test-component/tabs.vue'], resolve); } }
    //     ]
    // }

    // aircompressor 
    // {
    //     path: '/devices-monitor',
    //     icon: 'settings',
    //     title: '设备监控',
    //     name: 'devicesMonitor',
    //     component: Main,
    //     children: [
    //         { path: 'ac', title: '空压机监控', name: 'air-compressor', icon: 'edit', component: resolve => { require(['@/views/my-components/draggable-list/draggable-list.vue'], resolve); } },
    //         { path: 'gss', title: '气源站监控', name: 'gas-supply-station', icon: 'code-download', component: resolve => { require(['@/views/tables/exportable-table.vue'], resolve); } }
    //     ]
    // },
    // {
    //     path: '/fault-slarm',
    //     icon: 'settings',
    //     title: '故障报警',
    //     name: 'faultSlarm',
    //     component: Main,
    //     children: [
    //         { path: 'fault', title: '故障报警', name: 'fault', icon: 'edit', component: resolve => { require(['@/views/my-components/draggable-list/draggable-list.vue'], resolve); } },
    //     ]
    // },
    // {
    //     path: '/maintain-slarm',
    //     icon: 'settings',
    //     title: '保养预警',
    //     name: 'maintainSlarm',
    //     component: Main,
    //     children: [
    //         { path: 'fault', title: '保养预警', name: 'fault', icon: 'edit', component: resolve => { require(['@/views/my-components/draggable-list/draggable-list.vue'], resolve); } },
    //     ]
    // },
    // {
    //     path: '/devices-management',
    //     icon: 'settings',
    //     title: '设备管理',
    //     name: 'devicesManagement',
    //     component: Main,
    //     children: [
    //         { path: 'monitor', title: '采集器配置', name: 'monitor', icon: 'edit', component: resolve => { require(['@/views/my-components/draggable-list/draggable-list.vue'], resolve); } },
    //         { path: 'ac', title: '空压机管理', name: 'ac-management', icon: 'search', component: resolve => { require(['@/views/tables/searchable-table.vue'], resolve); } },
    //         { path: 'gss', title: '气源站管理', name: 'gss-management', icon: 'code-download', component: resolve => { require(['@/views/tables/exportable-table.vue'], resolve); } }
    //     ]
    // },
    // {
    //     path: '/customer-management',
    //     icon: 'settings',
    //     title: '客户管理',
    //     name: 'customerManagement',
    //     component: Main,
    //     children: [
    //         { path: 'customer', title: '客户管理', name: 'customer-management', icon: 'edit', component: resolve => { require(['@/views/my-components/draggable-list/draggable-list.vue'], resolve); } },
    //     ]
    // },
    {
        path: '/system-settings',
        icon: 'settings',
        title: '系统设置',
        name: 'systemSettings',
        component: Main,
        children: [
            { path: 'account-management', title: '账户管理', name: 'account-management', icon: 'edit', component: resolve => { require(['@/views/system-settings/account-management.vue'], resolve); } },
            { path: 'login-record', title: '登录记录', name: 'lgoing-record', icon: 'search', component: resolve => { require(['@/views/tables/searchable-table.vue'], resolve); } },
            { path: 'user-info', title: '个人信息', name: 'user-info', icon: 'code-download', component: resolve => { require(['@/views/tables/exportable-table.vue'], resolve); } }
        ]
    }

    // hide
    // {
    //     path: '/international',
    //     icon: 'earth',
    //     title: {i18n: 'international'},
    //     name: 'international',
    //     component: Main,
    //     hide: true,
    //     children: [
    //         { path: 'index', title: {i18n: 'international'}, name: 'international_index', component: resolve => { require(['@/views/international/international.vue'], resolve); } }
    //     ]
    // },
    // {
    //     path: '/component',
    //     icon: 'social-buffer',
    //     name: 'component',
    //     title: '组件',
    //     component: Main,
    //     hide: true,
    //     children: [
    //         {
    //             path: 'text-editor',
    //             icon: 'compose',
    //             name: 'text-editor',
    //             title: '富文本编辑器',
    //             component: resolve => { require(['@/views/my-components/text-editor/text-editor.vue'], resolve); }
    //         },
    //         {
    //             path: 'md-editor',
    //             icon: 'pound',
    //             name: 'md-editor',
    //             title: 'Markdown编辑器',
    //             component: resolve => { require(['@/views/my-components/markdown-editor/markdown-editor.vue'], resolve); }
    //         },
    //         {
    //             path: 'image-editor',
    //             icon: 'crop',
    //             name: 'image-editor',
    //             title: '图片预览编辑',
    //             component: resolve => { require(['@/views/my-components/image-editor/image-editor.vue'], resolve); }
    //         },
    //         {
    //             path: 'draggable-list',
    //             icon: 'arrow-move',
    //             name: 'draggable-list',
    //             title: '可拖拽列表',
    //             component: resolve => { require(['@/views/my-components/draggable-list/draggable-list.vue'], resolve); }
    //         },
    //         {
    //             path: 'area-linkage',
    //             icon: 'ios-more',
    //             name: 'area-linkage',
    //             title: '城市级联',
    //             component: resolve => { require(['@/views/my-components/area-linkage/area-linkage.vue'], resolve); }
    //         },
    //         {
    //             path: 'file-upload',
    //             icon: 'android-upload',
    //             name: 'file-upload',
    //             title: '文件上传',
    //             component: resolve => { require(['@/views/my-components/file-upload/file-upload.vue'], resolve); }
    //         },
    //         {
    //             path: 'count-to',
    //             icon: 'arrow-graph-up-right',
    //             name: 'count-to',
    //             title: '数字渐变',
    //             component: resolve => { require(['@/views/my-components/count-to/count-to.vue'], resolve); }
    //         }
    //         // {
    //         //     path: 'clipboard-page',
    //         //     icon: 'clipboard',
    //         //     name: 'clipboard-page',
    //         //     title: '一键复制',
    //         //     component: resolve => { require(['@/views/my-components/clipboard/clipboard.vue'], resolve); }
    //         // }
    //     ]
    // },
    // {
    //     path: '/form',
    //     icon: 'android-checkbox',
    //     name: 'form',
    //     title: '表单编辑',
    //     component: Main,
    //     hide: true,
    //     children: [
    //         { path: 'artical-publish', title: '文章发布', name: 'artical-publish', icon: 'compose', component: resolve => { require(['@/views/form/article-publish/article-publish.vue'], resolve); } },
    //         { path: 'workflow', title: '工作流', name: 'workflow', icon: 'arrow-swap', component: resolve => { require(['@/views/form/work-flow/work-flow.vue'], resolve); } }

    //     ]
    // },
    // {
    //     path: '/charts',
    //     icon: 'ios-analytics',
    //     name: 'charts',
    //     title: '图表',
    //     component: Main,
    //     children: [
    //         { path: 'pie', title: '饼状图', name: 'pie', icon: 'ios-pie', component: resolve => { require('@/views/access/access.vue') },
    //         { path: 'histogram', title: '柱状图', name: 'histogram', icon: 'stats-bars', component: resolve => { require('@/views/access/access.vue') }

    //     ]
    // },
    // {
    //     path: '/tables',
    //     icon: 'ios-grid-view',
    //     name: 'tables',
    //     title: '表格',
    //     component: Main,
    //     hide: true,
    //     children: [
    //         { path: 'dragableTable', title: '可拖拽排序', name: 'dragable-table', icon: 'arrow-move', component: resolve => { require(['@/views/tables/dragable-table.vue'], resolve); } },
    //         { path: 'editableTable', title: '可编辑表格', name: 'editable-table', icon: 'edit', component: resolve => { require(['@/views/tables/editable-table.vue'], resolve); } },
    //         { path: 'searchableTable', title: '可搜索表格', name: 'searchable-table', icon: 'search', component: resolve => { require(['@/views/tables/searchable-table.vue'], resolve); } },
    //         { path: 'exportableTable', title: '表格导出数据', name: 'exportable-table', icon: 'code-download', component: resolve => { require(['@/views/tables/exportable-table.vue'], resolve); } },
    //         { path: 'table2image', title: '表格转图片', name: 'table-to-image', icon: 'images', component: resolve => { require(['@/views/tables/table-to-image.vue'], resolve); } }
    //     ]
    // },
    // {
    //     path: '/advanced-router',
    //     icon: 'ios-infinite',
    //     name: 'advanced-router',
    //     title: '高级路由',
    //     component: Main,
    //     hide: true,
    //     children: [
    //         { path: 'mutative-router', title: '动态路由', name: 'mutative-router', icon: 'link', component: resolve => { require(['@/views/advanced-router/mutative-router.vue'], resolve); } },
    //         { path: 'argument-page', title: '带参页面', name: 'argument-page', icon: 'android-send', component: resolve => { require(['@/views/advanced-router/argument-page.vue'], resolve); } }
    //     ]
    // },
    // {
    //     path: '/error-page',
    //     icon: 'android-sad',
    //     title: '错误页面',
    //     name: 'errorpage',
    //     component: Main,
    //     hide: true,
    //     children: [
    //         { path: 'index', title: '错误页面', name: 'errorpage_index', component: resolve => { require(['@/views/error-page/error-page.vue'], resolve); } }
    //     ]
    // }

];

// 所有上面定义的路由都要写在下面的routers里
export const routers = [
    loginRouter,
    otherRouter,
    preview,
    locking,
    ...appRouter,
    page500,
    page403,
    page404
];
