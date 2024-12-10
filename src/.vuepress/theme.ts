import { hopeTheme } from "vuepress-theme-hope";
import { enNavbar, ruNavbar } from "./navbar/index.js";
import { enSidebar, ruSidebar } from "./sidebar/index.js";
import sociallink from "./components/sociallink.js";



export default hopeTheme({

  
  hostname: "https://vuepress-theme-hope-docs-demo.netlify.app",

  author: {
    name: "NeonGooRoo",
    url: "https://t.me/neongooroo",
  },

  favicon: "/favicon.ico",

  iconAssets: "fontawesome-with-brands",

  start: ["Brand"],
  center: ["Links"],
  end: ["Language", "sociallink", "Repo", "Outlook", "Search"],


  logo: "/ico/logo.png",

  repo: "neongooroo/kotowari",

  docsDir: "src",

  print: false,

  navbarLayout: {
    start: ["Brand"],
    center: ["Links"],
    end: ["Language", "Repo", "Outlook", "Search"],
  },

  locales: {
    "/en/": {

      navbar: enNavbar,

      sidebar: enSidebar,


      displayFooter: true,

      metaLocales: {
        editLink: "Edit this page on GitHub",
      },
    },



    "/": {

      navbar: ruNavbar,

      sidebar: ruSidebar,

      displayFooter: true,

      metaLocales: {
        editLink: "Редактировать данную страницу на GitHub",
      },
    },
  },

  encrypt: {
    config: {
      "/demo/encrypt.html": ["1234"],
      "/en/demo/encrypt.html": ["1234"],
    },
  },

  
  plugins: {
    
    blog: true,

    searchPro: {
        
      locales: {
        "/": {
          lang: "ru-RU",
        },

        "/en/": {
          lang: "en-US",
        },
      },
    
  },



    copyright: {
      global: false,
      author: "NeonGooRoo",
      license: "MIT",


      
    },
    comment: {
      provider: "Giscus",
      repo: "neongooroo/kotowari",
      repoId: "R_kgDOLRM99A",
      category: "General",
      categoryId: "DIC_kwDOLRM99M4Cdyoi",
      mapping: "title",
    },

    components: {
      components: ["Badge", "VPCard", "Share",
      "VidStack",],
    },

    mdEnhance: {
      align: true,
      attrs: true,
      codetabs: true,
      component: true,
      demo: true,
      figure: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      mark: true,
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
      

/*
    docsearch: {
      appId: "",
      apiKey: "",
      indexName: "",
      locales: {
        '/': {
          placeholder: '',
          translations: {
            button: {
              buttonText: '',
            },
          },
        },
        '/en/': {
          placeholder: 'Search Documentation',
          translations: {
            button: {
              buttonText: 'Search Documentation',
            },
          },
        },
      },
    }, */

      ///revealJs: {
      ///  plugins: ["highlight", "math", "search", "notes", "zoom"],
      ///  },


      // install chart.js before enabling it
      // chart: true,

      // insert component easily

      // install echarts before enabling it
      // echarts: true,

      // install flowchart.ts before enabling it
      // flowchart: true,

      // gfm requires mathjax-full to provide tex support
      // gfm: true,

      // install katex before enabling it
      // katex: true,

      // install mathjax-full before enabling it
      // mathjax: true,

      // install mermaid before enabling it
      // mermaid: true,

      // playground: {
      //   presets: ["ts", "vue"],
      // },



      // install @vue/repl before enabling it
      // vuePlayground: true,

      // install sandpack-vue3 before enabling it
      // sandpack: true,
    },

  },
});



    // install @vuepress/plugin-pwa and uncomment these if you want a PWA
    // pwa: {
    //   favicon: "/favicon.ico",
    //   cacheHTML: true,
    //   cachePic: true,
    //   appendBase: true,
    //   apple: {
    //     icon: "/assets/icon/apple-icon-152.png",
    //     statusBarColor: "black",
    //   },
    //   msTile: {
    //     image: "/assets/icon/ms-icon-144.png",
    //     color: "#ffffff",
    //   },
    //   manifest: {
    //     icons: [
    //       {
    //         src: "/assets/icon/chrome-mask-512.png",
    //         sizes: "512x512",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-mask-192.png",
    //         sizes: "192x192",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-192.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },
    //     ],
    //     shortcuts: [
    //       {
    //         name: "Demo",
    //         short_name: "Demo",
    //         url: "/demo/",
    //         icons: [
    //           {
    //             src: "/assets/icon/guide-maskable.png",
    //             sizes: "192x192",
    //             purpose: "maskable",
    //             type: "image/png",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },