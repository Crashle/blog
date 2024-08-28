import { sidebar } from 'vuepress-theme-hope';

export default sidebar({
    '/': [
        '',
        {
            text: 'JavaScript',
            prefix: 'blogs/javascript/',
            link: 'blogs/javascript/',
            children: 'structure',
        },
        {
            text: 'CSS',
            prefix: 'blogs/css/',
            link: 'blogs/css/',
            children: 'structure',
        },
        {
            text: '如何使用',
            icon: 'laptop-code',
            prefix: 'demo/',
            link: 'demo/',
            children: 'structure',
        },
        {
            text: '文章',
            icon: 'book',
            prefix: 'posts/',
            children: 'structure',
        },
        'intro',
        // {
        //     text: '幻灯片',
        //     icon: 'person-chalkboard',
        //     link: 'https://plugin-md-enhance.vuejs.press/zh/guide/content/revealjs/demo.html',
        // },
    ],
});
