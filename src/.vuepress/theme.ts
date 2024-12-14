import { hopeTheme } from "vuepress-theme-hope";
import { enNavbar, ruNavbar } from "./navbar/index.js";
import { enSidebar, ruSidebar } from "./sidebar/index.js";

export default hopeTheme({
  hostname: "https://vuepress-theme-hope-docs-demo.netlify.app",

  author: {
    name: "NeonGooRoo",
    url: "https://t.me/neongooroo",
  },

  favicon: "/favicon.ico",
  
  iconAssets: "fontawesome-with-brands",

  logo: "/logo.png",

  repo: "neongooroo/kotowari",

  docsDir: "src",

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



  // These features are enabled for demo, only preserve features you need here
  markdown: {
    align: true,
    attrs: true,
    codeTabs: true,
    component: true,
    demo: true,
    figure: true,
    gfm: true,
    imgLazyload: true,
    imgSize: true,
    include: true,
    mark: true,
    plantuml: true,
    spoiler: true,
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
    tasklist: true,
    vPre: true,

    // uncomment these if you need TeX support
    // math: {
    //   // install katex before enabling it
    //   type: "katex",
    //   // or install mathjax-full before enabling it
    //   type: "mathjax",
    // },

    // install chart.js before enabling it
    // chartjs: true,

    // install echarts before enabling it
    // echarts: true,

    // install flowchart.ts before enabling it
    // flowchart: true,

    // install mermaid before enabling it
    // mermaid: true,

    // playground: {
    //   presets: ["ts", "vue"],
    // },

    // install @vue/repl before enabling it
    // vuePlayground: true,

    // install sandpack-vue3 before enabling it
    // sandpack: true,

    // install @vuepress/plugin-revealjs and uncomment these if you need slides
    // revealjs: {
    //   plugins: ["highlight", "math", "search", "notes", "zoom"],
    // },
  },

  plugins: {
    // Note: This is for testing ONLY!
    // You MUST generate and use your own comment service in production.


    blog: {
      // Treat files in the /blog and /en/blog directories as blog posts
      filter: (page) =>
        page.filePathRelative?.startsWith("blog/") ||
        page.filePathRelative?.startsWith("en/blog/"),
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


    // Install @vuepress/plugin-pwa and uncomment these if you want a PWA
    // pwa: {
    //   favicon: "/favicon.ico",
    //   cacheHTML: true,
    //   cacheImage: true,
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
  },
});
