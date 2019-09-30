export default class ImageService {
    data = [
        {   id: 1, 
            name: 'Computer science', 
            imageLink: 'https://www.rider.edu/sites/default/files/styles/scale1920x1344/public/feature_hero_template_1920.jpg?itok=vF5EVhX2'
        },

        {   id: 2,
            name: 'Books', 
            imageLink: 'https://images.hellogiggles.com/uploads/2018/08/09140304/picture-of-books-about-books-photo.jpg'
        },

        {   id: 3,
            name: 'Chamomile', 
            imageLink: 'https://www.imgonline.com.ua/examples/bee-on-daisy.jpg'
        },

        {   id: 4,
            name: 'Shark', 
            imageLink: 'https://i.ytimg.com/vi/A7Fji3IgNfw/maxresdefault.jpg'
        },

        {   id: 5,
            name: 'School', 
            imageLink: 'http://explorevenango.com/wp-content/uploads/2015/04/utica-elementary-school-020.jpg'
        },

        {   id: 6,
            name: 'Kyiv city', 
            imageLink: 'https://lonelyplanetimages.imgix.net/a/g/hi/t/a6469f3993128cbcdde6e2b0a90aa1d3-kyiv.jpg?sharp=10&vib=20&w=1200'
        },

        {   id: 7,
            name: 'Lviv city', 
            imageLink: 'http://s.inyourpocket.com/gallery/110568.jpg'
        },

        {   id: 8,
            name: 'Friends', 
            imageLink: 'https://cdn.lifehack.org/wp-content/uploads/2014/04/friends-tv-versability-lifehack-Brian-Penny.jpg'
        },

        {   id: 9,
            name: 'Tasty food', 
            imageLink: 'https://s-media-cache-ak0.pinimg.com/736x/f9/2d/d3/f92dd3871ab7c1684c5597b35bd13109.jpg'
        },

        {   id: 10,
            name: 'Apple', 
            imageLink: 'https://grist.files.wordpress.com/2014/10/red-apple.jpg?w=1024&h=576&crop=1'
        },

        {   id: 11, 
            name: 'Mountains', 
            imageLink: 'https://c.pxhere.com/photos/6b/9d/austria_tyrol_mountains_light_shadow_sidewalk_alpine_hiking-1042340.jpg!d'
        },

        {   id: 12, 
            name: 'Empire State building', 
            imageLink: 'https://maxqubit.files.wordpress.com/2012/05/dsc_6916.jpg'
        },

        {   id: 13, 
            name: 'New York city', 
            imageLink: 'http://dirty-mag.com/v2/wp-content/uploads/2012/06/AP-Photo.jpeg'
        },

        {   id: 14, 
            name: 'London city', 
            imageLink: 'https://s3-eu-west-1.amazonaws.com/ee-content/media/3295/london-big-ben-1920-x-1080.jpg'
        },

        {   id: 15, 
            name: 'Ocean', 
            imageLink: 'http://ucsdnews.ucsd.edu/news_uploads/ucsd-scma-hero.jpg'
        }

    ];

    getImage() {
        return new Promise((resolve, reject) => {
          setTimeout(()=> {
            resolve(this.data)
            reject(new Error('Somthing bad happened!'));
          }, 700);
        });
      }
};
