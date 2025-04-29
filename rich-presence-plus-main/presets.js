/*
/  This is only when 'dev' mode is activated. Check https://github.com/xkawu/rich-presence-plus for help
*/

const preset = async () => {
    return {
        details: "Rich Presence +",
        state: "› Selfmade businessman",
        largeImageKey: "https://cdn3.emoji.gg/emojis/9588-silver-star.png",
        buttons: [
            {
                label: "Rich Presence +",
                url: "https://github.com/xkawu/rich-presence-plus",
            },
            {
                label: "StarkTrade ? Contact me !",
                url: "https://www.instagram.com/bilal._ea/",
            },
        ],
    };
};

const preset2 = async () => {
    return {
        details: "Rich Presence +",
        state: "› MuayThaï & Side Hustle",
        largeImageKey: "https://cdn3.emoji.gg/emojis/9588-silver-star.png",
        buttons: [
            {
                label: "Rich Presence +",
                url: "https://github.com/xkawu/rich-presence-plus",
            },
            {
                label: "StarkTrade ? Contact me !",
                url: "https://www.instagram.com/bilal._ea/",
            },
        ],
    };
};

module.exports = { preset, preset2 };
