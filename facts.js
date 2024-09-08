const images = [
    "ig-1.jpg",
    "ig-3.jpg",
    "ig-2.jpg",
    "ig-4.jpg",
    "ig-5.jpg",
    "ig-6.jpg",
    "ig-7.jpg",
    "ig-8.jpg",
    "ig-9.jpg",
    "ig-10.jpg",
    "ig-11.jpg",
    "ig-12.jpg",
    "ig-13.jpg",
    "ig-14.jpg",
    "ig-15.jpg",
    "ig-16.jpg",
    "ig-17.jpg",
    "ig-18.jpg",
    "ig-19.jpg",
    "ig-20.jpg",
];

function generateRandomNumber() {
    const randomNumber = Math.floor(Math.random() * 20) + 1;
    const image = images[randomNumber - 1]; 
    document.getElementById('fact-image').src = image; 
}
