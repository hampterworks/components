export const navigationLinks = [
  {type: 'link', name: 'Home', url: '/'},
  {
    type: 'subLink',
    name: 'Components',
    subLinks:[
      {url: '/library/input', name: 'Input'},
      {url: '/library/radio-checkbox', name: 'Radio/checkbox'},
      {url: '/library/typography', name: 'Typography'},
      {url: '/library/button', name: 'Button'},
      {url: '/library/select', name: 'Select'},
      {url: '/library/range', name: 'Range'},
      {url: '/library/breadcrumbs', name: 'Breadcrumbs'},
      {url: '/library/notifications', name: 'Notifications'},
    ]
  },
  {
    type: 'subLink',
    name: 'Hooks',
    subLinks:[
      {url: '/hooks/click-outside', name: 'Click outside'}
    ]
  },
  {type: 'link', name: 'github', url: 'https://github.com/hampterworks/components'}
]
