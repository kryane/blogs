module.exports = {
    title: 'kryane的博客',
    description: '分享日常',
    theme: 'reco',
    base: '/blogs/',
    themeConfig: {
        author: "kryane",
        logo: "/avatar.jpg",
        authorAvatar: "/avatar.jpg",
        subSidebar: 'auto',
        type: "blog",
        nav: [
            {
                text: "首页",
                link: "/"
            },
            {
                text: "kryane的博客",
                items: [
                    {
                        text: "掘金",
                        link: "https://juejin.cn/user/233526039432445"
                    },
                    {
                        text: "Github",
                        link: "https://github.com/Xusssyyy"
                    }
                ]
            }
        ],
        // 博客配置
        blogConfig: {
            category: {
                location: 2, // 在导航栏菜单中所占的位置，默认2
                text: "博客", // 默认文案 “分类”
            },
            tag: {
                location: 4, // 在导航栏菜单中所占的位置，默认4
                text: "Tag", // 默认文案 “标签”
            },
        },
    },
    locales: {
        "/": {
            lang: "zh-CN",
        },
    },
    plugins: [
        // 樱花效果
        [
            "sakura",
            {
                num: 20, // 默认数量
                show: true, //  是否显示
                zIndex: -1, // 层级
                img: {
                    replace: false, // false 默认图 true 换图 需要填写httpUrl地址
                },
            },
        ],
        // 鼠标点击效果
        [
            "cursor-effects",
            {
                size: 4, // size of the particle, default: 2
                shape: "star", // ['star' | 'circle'], // shape of the particle, default: 'star'
                zIndex: 999999999, // z-index property of the canvas, default: 999999999
            },
        ],
        // 音乐播放器
        [
            "@vuepress-reco/vuepress-plugin-bgm-player",
            {
                audios: [
                    {
                        name: "Rain",
                        artist: "秦基博",
                        url: "https://webfs.ali.kugou.com/202302242103/0494ed683d2894fce3cb5a3d53872908/v2/a0d0ca618339925af4a3dde2f9e7095c/G144/M03/1E/01/MIcBAFvTh9iAUftpAEeSAKi-LH4765.mp3",
                        cover: "https://www.barben.cn/wp-content/uploads/2019/09/2019092915060470.jpeg",
                    },
                    {
                        name: "想去海边",
                        artist: "夏日入侵企画",
                        url: "http://m701.music.126.net/20230224214415/f097924a82011ae2cb07c34db0c842e8/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/14096442961/0219/71c6/d867/eca80101c2239842e0929e3c06e8ca8e.mp3",
                        cover:
                            "https://p1.music.126.net/sLWN-iePq4ESOMPER0IWgQ==/109951164602081973.jpg",
                    },
                ],
                autoplay: true,
                // 是否默认缩小
                autoShrink: true,
                // 缩小时缩为哪种模式
                shrinkMode: "float",
                // 悬浮窗样式
                floatStyle: { bottom: "20px", "z-index": "999999" },
            },
        ],
    ],
}