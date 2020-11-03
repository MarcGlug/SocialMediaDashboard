Vue.component('social-card', {
    props: ['social'],
    template: `
        <div class="text-center card mx-auto">
            <div class="flex justify-center">
                <img :src="social.logo" alt="logo facebook">  
                <p class="ml-3 text-bold">{{social.pseudo}}</p>
            </div>
            <div class="my-5">
                <p class="number">{{social.follower}}</p>
                <p class="follower">FOLLOWERS</p>
            </div>
            <div class="flex justify-center stat">
                <img :src="social.arrow" alt="arrow up">
                <p>{{social.evolution}} Today</p>
            </div>
        </div>
    `
})

var socialCard = new Vue({
    el: '#social-section',
    data: {
        socials: [
            {
                id:1,
                logo:'images/icon-facebook.svg',
                pseudo:'@nathanf',
                follower: '1987',
                arrow: 'images/icon-up.svg',
                evolution:'12'
            },
            {
                id:2,
                logo:'images/icon-twitter.svg',
                pseudo:'@nathanf',
                follower: '1044',
                arrow: 'images/icon-up.svg',
                evolution:'90'
            },
            {
                id:3,
                logo:'images/icon-instagram.svg',
                pseudo:'@realnathanf',
                follower: '11k',
                arrow: 'images/icon-up.svg',
                evolution:'1099'
            },
            {
                id:4,
                logo:'images/icon-youtube.svg',
                pseudo:'Nathan F.',
                follower: '8239',
                arrow: 'images/icon-down.svg',
                evolution:'144'
            }
        ]
    }
})

// ------------------------------------- OVERVIEW ------------------------------------------


var overviewCard = new Vue({
    el:"#overview-section",
    data: {
        socials: [
            {
                socialNetwork: [
                    {
                        id:0,
                        title: "Page Views",
                        logo: "images/icon-facebook.svg",
                        stat: "87",
                        evolution: "+3"
                    },
                    {
                        id:1,
                        title: "Likes",
                        logo: "images/icon-facebook.svg",
                        stat: "52",
                        evolution: "-2"
                    }
                ]
            },
            {
                socialNetwork: [
                   {
                       id:0,
                       title: "Profile Views",
                       logo: "images/icon-instagram.svg",
                       stat: "52k",
                       evolution: "+1375"
                   },
                   {
                       id:1,
                       title: "Likes",
                       logo: "images/icon-instagram.svg",
                       stat: "5462",
                       evolution: "+2257"
                   }
                ]
            },
            {
                socialNetwork: [
                {
                    id:0,
                    title: "Retweets",
                    logo: "images/icon-twitter.svg",
                    stat: "117",
                    evolution: "+303"
                },
                {
                    id:1,
                    title: "Likes",
                    logo: "images/icon-twitter.svg",
                    stat: "507",
                    evolution: "+553"
                }
             ]
            },
            {
                socialNetwork: [
                {
                    id:0,
                    title: "Total Views",
                    logo: "images/icon-youtube.svg",
                    stat: "1407",
                    evolution: "-12"
                },
                {
                    id:1,
                    title: "Likes",
                    logo: "images/icon-youtube.svg",
                    stat: "107",
                    evolution: "-12"
                }
             ],

            }
        ]
    },
    method:{

    }
})