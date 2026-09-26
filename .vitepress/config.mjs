import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Li",
  description: "Here is just nothing.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: '笔记目录', link: '/stm32' }
    ],

    sidebar: [
      {
        text: 'STM32',
        collapsed: true,
        items: [
          { 
            text: 'STM32F103C8T6',
            collapsed: true,
            items:[
              {
                text:'OLED',
                collapsed: true,
                items:
                [{text:'OLED字库',link:'/stm32/stm32f103/OLED/oled_font'}]
              }
            ],
          },
          { 
            text: 'STM32F407VET6', link: '/stm32' 
          }
        ],
      },

      {
        text:'FPGA',
        collapsed: true,
        items: [
          { text: 'FPGA', link: '/FPGA' }
        ]
      }
    ],

    
  }
})
