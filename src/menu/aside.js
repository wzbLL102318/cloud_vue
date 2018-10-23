// 菜单 侧边栏
export default [
  { path: '/index', title: '首页', icon: 'home' },
  {
    title: '绑定邮箱-手机',
    icon: 'folder-o',
    children: [
      { path: '/bind-email', title: '绑定', icon: 'envelope-o' }
    ]
  },
  {
    title: '空菜单演示',
    icon: 'folder-o',
    children: [
      {
        title: '正在开发 1',
        children: [
          { title: '正在开发 1-1' },
          { title: '正在开发 1-2' }
        ]
      }
    ]
  }
]