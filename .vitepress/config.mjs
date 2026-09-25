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
        items: [
          { text: 'STM32', link: '/stm32' },
          { text: '个人网页', link: '/pages' },
          { text: 'FPGA(未开始)', link: '/FPGA' }
        ],
      },
      
      {
        text:'FPGA',
        items: [
          { text: 'FPGA', link: '/FPGA' }
        ]
      }
    ],

    
  }
})
