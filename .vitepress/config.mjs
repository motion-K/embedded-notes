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
        text: '目录',
        items: [
          //STM32部分
          { 
            text: 'STM32', 
            item: [
              {text: '串口中断通信实验', link: '/stm32' }
            ],
          },
          //个人网页
          { 
            text: '个人网页', link: '/pages' 
          },
          //FPGA部分
          { 
            text: 'FPGA(未开始)', link: '/FPGA' 
          }
        ]
      }
    ],

    
  }
})
