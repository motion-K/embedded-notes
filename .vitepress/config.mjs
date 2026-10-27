import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Li",
  description: "Here is just nothing.",
  srcExclude: ["STYLE.md"],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: '笔记目录', link: '/stm32/stm32f103/OLED/oled_font' }
    ],

    sidebar: [
      /*/////////// 单片机  //////////////// */
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
            text: 'STM32F407VET6', link: '/stm32/stm32f407' 
          }
        ],
      },
      /*/////////// FPGA  //////////////// */
      {
        text:'FPGA',
        collapsed: true,
        items: [
          { text: 'FPGA', link: '/FPGA' }
        ]
      },
      /*/////////// 嵌入式  //////////////// */
      {
        text:'嵌入式',
        collapsed: true,
        items: [
          { text: '嵌入式学习', link: '/嵌入式学习/单片机结构' }
        ]
      },
      /*/////////// 个人静态网页 //////////// */
      {
        text:'网页配置',
        collapsed: true,
        items: [
          { text: '网页配置', link: '/pages' }
        ]
      },
      /*////////////  PCB  ////////////*/
      {
        text:'PCB',
        collapsed: true,
        items: [
          { text: 'PCB设计', link: '/PCB/PCB布线' }
        ]
      }
    ],

    
  }
})
