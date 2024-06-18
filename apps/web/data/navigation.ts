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
      {url: '/components/range', name: 'Range'}
    ]
  },
  {
    type: 'subLink',
    name: 'Hooks',
    subLinks:[
      {url: '/', name: 'Click outside'}
    ]
  }
]
