import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Li",
  description: "Here is just nothing.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'STM32笔记', link: '/stm32' }
    ],

    sidebar: [
      {
        text: 'STM32 嵌入式开发',
        items: [
          { text: '串口中断通信实验', link: '/stm32' } // 对应 stm32-uart.md
        ],
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
