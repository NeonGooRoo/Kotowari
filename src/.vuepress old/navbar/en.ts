import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  {
    text: "Home",
    icon: "home",
    link: "/en/",
  },  
  {
    text: "For beginners",
    link: "/en/guide/how-to.md",
  },
  {
    text: "Guides",
    prefix: "/en/guide/",
    children: [
      {
        text: "JPDB",
        icon: "/ico/jpdb.png",
        link: "jpdb",
      },
      {
        text: "How to focus",
        icon: "/ico/focus.svg",
        link: "focus",
      },
      {
        text: "AnkiCollab",
        icon: "/ico/collab.png",
        link: "ankicollab",
      },  
      {
        text: "Managing time 🚧",
        icon: "/ico/timer.svg",
        link: "timetracking",
      },
      {
        text: "Handwriting 🚧",
        icon: "/ico/writing.svg",
        link: "handwriting",
      },
      {
        text: "MEXT 🚧",
        icon: "/ico/school.svg",
        link: "mext",
      },
    ],
  },
  {
    text: "Software",
    prefix: "/en/software/",
    link: "/en/software/",
  },
  {
    text: "Resources",
    link: "/en/resources",
  },
  {
    text: "FAQ",
    link: "faq"
  },
  {
    text: "Blog",
    link: "/en/blog/",
  },

]);
