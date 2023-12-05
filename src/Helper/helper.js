export function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex > 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}


// export const itemData = []
export const itemData = [
    {
        img: 'https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg',
        title: '1',
    },
    {
        img: 'https://imgv3.fotor.com/images/cover-photo-image/a-beautiful-girl-with-gray-hair-and-lucxy-neckless-generated-by-Fotor-AI.jpg',
        title: '2'
    },
    {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS92eisuWOx3tEjeW14mT9ACVgXDwIRBGtnww&usqp=CAU',
        title: '3'
    },
    {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCZlf5lc5tX-0gY-y94pGS0mQdL-D0lCH2OQ&usqp=CAU',
        title: '4'
    },
    {
        img: 'https://kinsta.com/wp-content/uploads/2020/08/tiger-jpg.jpg',
        title: '5'
    },
    {
        img: 'https://static.toiimg.com/photo/101094345.cms',
        title: 'ok'
    },
    {
        img: 'https://api.contentstack.io/v2/assets/575e4d1c0342dfd738264a1f/download?uid=bltada7771f270d08f6',
        title: 'si'
    },
    {
        img: 'https://tworcawprawie.pl/wp-content/uploads/2018/02/makak_naruto_ma%C5%82pie_selfie_David_Slater-1.jpg',
        title: 'si'
    },
    {
        img: 'https://i.pinimg.com/originals/74/55/c3/7455c312c2b170fffa3e5311d75b65b5.jpg'
    },
    {img: 'https://resize.indiatvnews.com/en/resize/newbucket/1080_-/2023/04/untitled-design-2023-04-24t183954-1682342061.jpg'},
    {img: 'https://storage.googleapis.com/cloud_image_bucket/11/aaa.bmp?Expires=1701881425&GoogleAccessId=cloud-storage-admin%40ageless-webbing-405115.iam.gserviceaccount.com&Signature=DM1zjzmhoar6dm491gmb9gCURco7XNmOnZjk%2BymlNn3mYPctCJz4K4p5qTA0b9I4jG%2Bm5FGXF1ZWAYmBlEAaSzDSc9172jgQkn%2F0cqZk7lVaEmhPeP0MJluh2SRALQDkQ9XGal%2BJPrbvckhIwYDiwkCIaqeCPIHAJO4s5EsWj%2Fb9P9tJykhVJmuI0GkCvvnEVrv%2BEu6T6PY2predgqNJLSKvGuAgL54mcwdj1tp9DRUQEcDHMkVyLE4sUY2hLqcQxem96BFgiw4B2AcEG%2FQbBJfnOUfBvp7eQdOYPyP7QEQ10EU8Vwr9lJNawLcCYUq6vpBqFrrIhlec6s3VqOVQ8Q%3D%3D'},


];