import { sidebar } from 'vuepress-theme-hope';

export const enSidebar = sidebar({
  '/en/': [
    '',
    {
      text: 'FAQ',
      link: 'faq',
    },
    'guide/how-to',
    {
      text: 'Guides',
      prefix: '/guide/',
      children: [
        {
          text: 'JPDB',
          icon: '/ico/jpdb.png',
          link: 'jpdb',
        },
        {
          text: 'How to focus',
          icon: '/ico/focus.svg',
          link: 'focus',
        },
        {
          text: 'AnkiCollab',
          icon: '/ico/collab.png',
          link: 'ankicollab',
        },
        {
          text: 'Managing time 🚧',
          icon: '/ico/timer.svg',
          link: 'timetracking',
        },
        {
          text: 'Handwriting 🚧',
          icon: '/ico/writing.svg',
          link: 'handwriting',
        },
        {
          text: 'MEXT 🚧',
          icon: '/ico/school.svg',
          link: 'mext',
        },
      ],
    },

    {
      text: 'Software',
      collapsible: true,
      prefix: '/software/',
      children: [
        {
          text: 'Introduction',
          icon: '/ico/',
          link: 'README.md',
        },
        {
          text: 'Yomitan',
          icon: '/ico/yomitan.svg',
          link: 'yomitan',
        },
        {
          text: 'Anki',
          icon: '/ico/anki.svg',
          link: 'anki',
        },
        {
          text: 'JL',
          icon: '/ico/jl.ico',
          link: 'jl',
        },
        {
          text: 'Memento',
          icon: '/ico/memento.ico',
          link: 'memento',
        },
        {
          text: 'MPV',
          icon: '/ico/mpv-icon.png',
          link: 'mpv',
        },
        {
          text: 'asbplayer',
          icon: '/ico/asb.png',
          link: 'asbplayer',
        },
        {
          text: 'Subtitles',
          icon: '/ico/subtitles.svg',
          link: 'subtitles',
        },
        {
          text: 'VNs and games',
          icon: '/ico/videogame.svg',
          link: 'vn',
        },
        {
          text: 'jidoujisho',
          icon: '/ico/jidoujisho.png',
          link: 'jidoujisho',
        },
        {
          text: 'ActivityWatch',
          icon: '/ico/aw.png',
          link: 'activitywatch',
        },
        {
          text: 'OCR tools',
          icon: '/ico/ocr.svg',
          link: 'ocr-tools',
        },
        {
          text: 'Other',
          icon: '/ico/random.svg',
          link: 'other',
        },
      ],
    },
    {
      text: 'FAQ',
      link: '/faq',
    },
    {
      text: 'Blog',
      link: '/blog',
    },
  ],

  '/software/': 'structure',
});
