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
        text: 'STM32 嵌入式开发',
        items: [
          { text: '串口中断通信实验', link: '/stm32' } // 对应 stm32-uart.md
        ],
        text: '目录',
        items: [
          { text: 'STM32', link: '/stm32' },
          { text: 'Web setting', link: '/pages' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
