import { defineConfig } from 'vitepress'
import anchor from 'markdown-it-anchor'
import imageFigures from 'markdown-it-image-figures';
import Giscus from '@giscus/vue';



// https://vitepress.dev/reference/site-config 
export default defineConfig({

    lang: 'ru-RU',
    title: "NeonGoo.Ru",
    head: [
      ['link', { rel: 'icon', href: '/favicon.ico' }],
      [
        'script',
        { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-G6HDTB0VXG' }
      ],
      [
        'script',
        {},
        ` window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
      
        gtag('config', 'G-G6HDTB0VXG');`
      ]
    ],
  
  
    description: 'Японский легко и с удовольствием',
  


  themeConfig: 
  
  {
    
    
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Японский с удовольствием', link: '/how-to' },
      {
        text: 'Гайды', 
        items: [
          { text: 'JPDB', link: '/jpdb-guide' },
          { text: 'Для начинающих', link: '/how-to' },
          { text: 'Как фокусироваться', link: '/focus' },
          { text: 'Вести учет времени', link: '/activitywatch' },
          { text: 'Письмо', link: '/handwriting' },
        ]
      },
      { 
        text: 'Софт', 
        items: [
          { text: 'Введение', link: '/software' },
          { text: 'Yomichan', link: '/yomichan' },
          { text: 'Anki', link: '/anki' },
          { text: 'JL', link: '/jl' },
          { text: 'MPV', link: '/mpv' },
          { text: 'ASB Player', link: '/asbplayer' },
          { text: 'Субтитры', link: '/subtitles' },
          { text: 'Видеоигры', link: '/vn' },
          { text: 'OCR инструменты', link: '/ocr-tools' },
          { text: 'Прочее', link: '/other' },
          
        ] 
     },
     { text: 'Ресурсы', link: '/resources' }
      
    ],
    


    sidebar: [
      {
        text: 'Навигация по сайту',
        items: [
          { text: 'Для начинающих', link: '/how-to' },
        ]
      },
     { 
      text: 'Софт', 
      items: [
        { text: 'Введение', link: '/software' },
        { text: 'Yomichan', link: '/yomichan' },
        { text: 'Anki', link: '/anki' },
        { text: 'JL', link: '/jl' },
        { text: 'MPV', link: '/mpv' },
        { text: 'ASB Player', link: '/asbplayer' },
        { text: 'Субтитры', link: '/subtitles' },
        { text: 'Видеоигры', link: '/vn' },
        { text: 'OCR инструменты', link: '/ocr-tools' },
        { text: 'Прочее', link: '/other' },
        
      ] 
   },
   { 
    text: 'Гайды', 
    items: [
      { text: 'JPDB', link: '/jpdb-guide' },
      { text: 'Для начинающих', link: '/how-to' },
      { text: 'Как фокусироваться', link: '/focus' },
      { text: 'Вести учет времени', link: '/activitywatch' },
      { text: 'Письмо', link: '/handwriting' },
      
    ] 
 },
    { text: 'Ресурсы', link: '/resources' },
    ],

    socialLinks: [

      {
        icon: {
          svg: '<svg height="32" viewBox="0 0 32 32" width="32" xmlns="http://www.w3.org/2000/svg"><path d="m16 .5c-8.563 0-15.5 6.938-15.5 15.5s6.938 15.5 15.5 15.5c8.563 0 15.5-6.938 15.5-15.5s-6.938-15.5-15.5-15.5zm7.613 10.619-2.544 11.988c-.188.85-.694 1.056-1.4.656l-3.875-2.856-1.869 1.8c-.206.206-.381.381-.781.381l.275-3.944 7.181-6.488c.313-.275-.069-.431-.482-.156l-8.875 5.587-3.825-1.194c-.831-.262-.85-.831.175-1.231l14.944-5.763c.694-.25 1.3.169 1.075 1.219z"/></svg>'


        },
        link: 'https://t.me/kurutteiru',
        ariaLabel: 'cool link'
      },
      {
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 127.14 96.36"><path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z"/></svg>'


        },
        link: 'https://discord.gg/XKKJ9jMMfW',
        ariaLabel: 'cool link'
      },
      { icon: 'github', link: 'https://github.com/NeonGooRoo/NeonGooRu' },
      {
        icon: {
          svg: '<svg fill="#000000" width="800px" height="800px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M256 416c114.9 0 208-93.1 208-208S370.9 0 256 0 48 93.1 48 208s93.1 208 208 208zM233.8 97.4V80.6c0-9.2 7.4-16.6 16.6-16.6h11.1c9.2 0 16.6 7.4 16.6 16.6v17c15.5.8 30.5 6.1 43 15.4 5.6 4.1 6.2 12.3 1.2 17.1L306 145.6c-3.8 3.7-9.5 3.8-14 1-5.4-3.4-11.4-5.1-17.8-5.1h-38.9c-9 0-16.3 8.2-16.3 18.3 0 8.2 5 15.5 12.1 17.6l62.3 18.7c25.7 7.7 43.7 32.4 43.7 60.1 0 34-26.4 61.5-59.1 62.4v16.8c0 9.2-7.4 16.6-16.6 16.6h-11.1c-9.2 0-16.6-7.4-16.6-16.6v-17c-15.5-.8-30.5-6.1-43-15.4-5.6-4.1-6.2-12.3-1.2-17.1l16.3-15.5c3.8-3.7 9.5-3.8 14-1 5.4 3.4 11.4 5.1 17.8 5.1h38.9c9 0 16.3-8.2 16.3-18.3 0-8.2-5-15.5-12.1-17.6l-62.3-18.7c-25.7-7.7-43.7-32.4-43.7-60.1.1-34 26.4-61.5 59.1-62.4zM480 352h-32.5c-19.6 26-44.6 47.7-73 64h63.8c5.3 0 9.6 3.6 9.6 8v16c0 4.4-4.3 8-9.6 8H73.6c-5.3 0-9.6-3.6-9.6-8v-16c0-4.4 4.3-8 9.6-8h63.8c-28.4-16.3-53.3-38-73-64H32c-17.7 0-32 14.3-32 32v96c0 17.7 14.3 32 32 32h448c17.7 0 32-14.3 32-32v-96c0-17.7-14.3-32-32-32z"/></svg>'


        },
        link: 'https://www.donationalerts.com/r/neongooroo',

        ariaLabel: 'cool link'
      },


      
    ],
    search: {
      provider: 'local'
    },
    

  }
  
})
