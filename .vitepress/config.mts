import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "My Awesome Project",
  description: "study",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
      { text: 'Clean', link: '/clean-code' }
    ],

    sidebar: [
      {
        text: '코드 잘짜기!',
        items: [
          { text: 'Clean', link: '/clean-code' }
        ]
      },
      {
        text: '모던리액트딥다이브',
        items: [
          { text: '리액트와 상태 관리 라이브러리', link: 'modern/' },
          { text: 'React 랜더링', link: '/' },
          { text: 'Reflow와 Repaint', link: '/modern/reflow' },
          { text: '구조 분해 할당', link: '/' },
          { text: '서버사이드', link: '/modern/serverside' },
          { text: '', link: '/' },
        ]
      },

    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
