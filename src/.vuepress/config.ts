import { defineUserConfig } from 'vuepress';

import theme from './theme.js';

export default defineUserConfig({
    base: '/blog/',

    lang: 'zh-CN',
    title: '萩萩萩🌴的小站',
    description: '即使慢，驰而不息，纵会落后，纵会失败，但必须能够到达他所向的目标。',

    theme,

    // 和 PWA 一起启用
    // shouldPrefetch: false,
});
