import { defineUserConfig } from 'vuepress'
import { defaultTheme } from 'vuepress'
import mdEnhance from "vuepress-plugin-md-enhance";
import { shikiPlugin } from '@vuepress/plugin-shiki'

export default defineUserConfig({
  head: [
    ['link', { rel: "apple-touch-icon", sizes: "57x57", href: "/apple-icon-57x57.png" }],
    ['link', { rel: "apple-touch-icon", sizes: "60x60", href: "/apple-icon-60x60.png" }],
    ['link', { rel: "apple-touch-icon", sizes: "72x72", href: "/apple-icon-72x72.png" }],
    ['link', { rel: "apple-touch-icon", sizes: "76x76", href: "/apple-icon-76x76.png" }],
    ['link', { rel: "apple-touch-icon", sizes: "114x114", href: "/apple-icon-114x114.png" }],
    ['link', { rel: "apple-touch-icon", sizes: "120x120", href: "/apple-icon-120x120.png" }],
    ['link', { rel: "apple-touch-icon", sizes: "144x144", href: "/apple-icon-144x144.png" }],
    ['link', { rel: "apple-touch-icon", sizes: "152x152", href: "/apple-icon-152x152.png" }],
    ['link', { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-icon-180x180.png" }],
    ['link', { rel: "icon", type: "image/png", sizes: "192x192",  href: "/android-icon-192x192.png" }],
    ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" }],
    ['link', { rel: "icon", type: "image/png", sizes: "96x96", href: "/favicon-96x96.png" }],
    ['link', { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" }],
    ['link', { rel: "manifest", href: "/manifest.json" }],
    ['meta', { name: "msapplication-TileColor", content: "#ffffff" }],
    ['meta', { name: "msapplication-TileImage", content: "/ms-icon-144x144.png" }],
    ['meta', { name: "theme-color", content: "#ffffff" }],
  ],
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/': {
      lang: 'zh-CN', // 将会被设置为 <html> 的 lang 属性
      title: 'Thallium54\'s Wiki',
      description: '我的知识库'
    },
    '/en/': {
      lang: 'en-US', // 将会被设置为 <html> 的 lang 属性
      title: 'Thallium54\'s Wiki',
      description: 'My knowledge base'
    }
  },
  theme: defaultTheme({
    sidebarDepth: 2,
    locales: {
      '/': {
        selectLanguageName: '简体中文',
        selectText: '🌐Languages',
        navbar: [
          { text: '服务器', link: '/home-server/' },
          { text: 'LaTex', link: '/latex/' },
          { text: '算法竞赛', link: '/competitive-programming/' },
          { text: '电脑软件', link: '/software/' },
          { text: '食谱', link: '/cookbook/' },
          { text: '关于我', link: 'https://tgc54.com/zh/' },
        ],
        sidebar: {
          '/home-server/': [
            '/home-server/',
            {
              text: '通用',
              children: [
                'portainer',
                'nginx-proxy-manager',
                'wildcard-ssl',
              ],
              collapsible: false
            },
            {
              text: '应用程序',
              children: [
                'file-browser',
                'paperless-ngx'
              ],
              collapsible: false
            },
          ],
          '/latex/': [
            '/latex/',
            {
              text: '指令',
              children: [
                'pictures'
              ],
              collapsible: false
            }
          ],
          '/software/': [
            {
              text: '电脑软件',
              link: '/software/',
              children: [
                'rime',
                'docker',
                'git',
              ],
              collapsible: false
            }
          ],
          '/competitive-programming/': [
            '/competitive-programming/',
            {
              text: '数据结构',
              children: [
                'add-arithmetic-progression',
              ],
              collapsible: false
            },
            {
              text: '动态规划',
              children: [
                'knapsack-binary-optimization'
              ],
              collapsible: false
            },
          ],
          '/cookbook/': [
            {
              text: '食谱',
              link: '/cookbook/',
              children: [
                '鱼香肉丝.md',
                '香辣炒虾.md',
                '豉油鸡腿.md',
                '蒜香鸡腿.md',
                '海鲜煮丝瓜.md',
                '番茄土豆烧鸡腿.md',
              ],
              collapsible: false
            }
          ],
        },
      },
      '/en/': {
        lang: 'en-US',
        selectLanguageName: 'English',
        selectText: '🌐Languages',
        nav: [
          { text: 'Server', link: '/home-server/' },
          { text: 'About Me', link: 'https://tgc54.com' },
        ],
        sidebar: {
          '/en/home-server/': [
            '/en/home-server/',
            {
              text: 'Applications',
              children: [
                'paperless-ngx'
              ],
              collapsible: false
            },
          ],
        }
      }
    }
  }),
  plugins: [
    mdEnhance({
      tex: true,
    }),
    shikiPlugin({
        langs: ['yaml', 'cpp', 'bash', 'latex'],
        theme: 'nord'
    })
  ],
})