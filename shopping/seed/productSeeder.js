var Product = require('../models/product');

var mongoose = require ('mongoose');

mongoose.connect('localhost:27017/shopping');

var products = [
    new Product ({
        imagePath: 'https://img.discogs.com/7FWDVnUDnVvDuzybUsjMuPqKKsM=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-8194425-1459328708-4198.jpeg.jpg',
        title: 'Derek Carr ‎– Knoe 5/1',
        description: 'Tracklist A1	Dancefloor A2 Epidemic B1 Planet Jump B2 Synapse 136',
        price: '€19.99'
    }),
    new Product ({
        imagePath: 'https://img.discogs.com/7FWDVnUDnVvDuzybUsjMuPqKKsM=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-8194425-1459328708-4198.jpeg.jpg',
        title: 'Derek Carr ‎– Knoe 5/1',
        description: 'Tracklist A1	Dancefloor A2 Epidemic B1 Planet Jump B2 Synapse 136',
        price: '€19.99'
    }),
    new Product ({
        imagePath: 'https://img.discogs.com/7FWDVnUDnVvDuzybUsjMuPqKKsM=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-8194425-1459328708-4198.jpeg.jpg',
        title: 'Derek Carr ‎– Knoe 5/1',
        description: 'Tracklist A1	Dancefloor A2 Epidemic B1 Planet Jump B2 Synapse 136',
        price: '€19.99'
    }),
    new Product ({
        imagePath: 'https://img.discogs.com/7FWDVnUDnVvDuzybUsjMuPqKKsM=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-8194425-1459328708-4198.jpeg.jpg',
        title: 'Derek Carr ‎– Knoe 5/1',
        description: 'Tracklist A1	Dancefloor A2 Epidemic B1 Planet Jump B2 Synapse 136',
        price: '€19.99'
    }),
    new Product ({
        imagePath: 'https://img.discogs.com/7FWDVnUDnVvDuzybUsjMuPqKKsM=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-8194425-1459328708-4198.jpeg.jpg',
        title: 'Derek Carr ‎– Knoe 5/1',
        description: 'Tracklist A1	Dancefloor A2 Epidemic B1 Planet Jump B2 Synapse 136',
        price: '€19.99'
    }),
    new Product ({
        imagePath: 'https://img.discogs.com/7FWDVnUDnVvDuzybUsjMuPqKKsM=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-8194425-1459328708-4198.jpeg.jpg',
        title: 'Derek Carr ‎– Knoe 5/1',
        description: 'Tracklist A1	Dancefloor A2 Epidemic B1 Planet Jump B2 Synapse 136',
        price: '€19.99'
    })
];

var done = 0;
for (var i = 0; i < products.length; i++) {
    products[i].save(function(err, result){
        done++;
        if (done === products.length) {
            exit();
        }
    });

}

function exit () {
    mongoose.disconnect();
}