Vue.component('social-card', {
    props: ['social'],
    template: `
        <div class="text-center card mx-auto mb-6">
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
                <p><span>{{social.evolution}}</span> Today</p>
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