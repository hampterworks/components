export const navigationLinks = [
  {type: 'link', name: 'Home', url: '/'},
  {
    type: 'subLink',
    name: 'Components',
    subLinks:[
      {url: '/components/input', name: 'Input'},
      {url: '/components/radio-checkbox', name: 'Radio/checkbox'},
      {url: '/components/typography', name: 'Typography'},
      {url: '/components/button', name: 'Button'},
      {url: '/components/select', name: 'Select'},
      {url: '/components/range', name: 'Range'},
      {url: '/components/breadcrumbs', name: 'Breadcrumbs'}
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
