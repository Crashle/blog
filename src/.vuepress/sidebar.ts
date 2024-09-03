import { sidebar } from 'vuepress-theme-hope';

export default sidebar({
    '/': [
        '',
        // {
        //     text: 'JavaScript',
        //     prefix: 'blog/js/',
        //     link: '/blog/js/',
        //     children: 'structure',
        // },
        // 'intro',
        // {
        //     text: '幻灯片',
        //     icon: 'person-chalkboard',
        //     link: 'https://plugin-md-enhance.vuejs.press/zh/guide/content/revealjs/demo.html',
        // },
    ],
    '/js': 'structure',
    '/css': 'structure',
    '/vue': 'structure',
    '/nodeJs': 'structure',
    '/blogger': 'structure',
    // '/UniApp': 'structure',
});
