const gallery = document.querySelector('.gallery');
const lightbox = document.querySelector('.lightbox');
const lightboxImg = document.querySelector('.lightbox-img');
const lightboxCaption = document.querySelector('.lightbox-caption');

const images = [
    { src: 'images/justice league.jpg', hdSrc: 'images/justice league.jpg', caption: '"Unite the League: Heroes from different corners of the universe assemble to save the world from an apocalyptic threat, wielding their unique powers in an epic battle for justice and redemption."' },
      { src: 'images/Batman.jpg', hdSrc: 'images/Batman.jpg', caption: 'Darkness rises in Gotham as the Caped Crusader battles his inner demons while confronting the citys most sinister villains, seeking to restore hope and justice to its shadowy streets' },
      { src: 'images/superman vs batman.jpg', hdSrc: 'images/superman vs batman.jpg', caption: 'Two icons collide: Batman versus Superman, epic clash' },
      { src: 'images/joker.jpg', hdSrc: 'images/joker.jpg', caption: 'Descending into madness: The Jokers chilling journey through chaos and darkness' },
      { src: 'images/shazam.jpg', hdSrc: 'images/shazam.jpg', caption: 'Discovering true power: Shazam embraces heroism with a spark of magic' },
      { src: 'images/black adam.jpg', hdSrc: 'images/black adam.jpg', caption: 'Rising from the shadows: Black Adams quest for vengeance ignites a storm of power' },
      { src: 'images/deadpool.jpg', hdSrc: 'images/deadpool.jpg', caption: 'Merc with a Mouth: Deadpools chaotic antics and razor-sharp wit redefine heroism' },
      { src: 'images/flash - 4.jpeg', hdSrc: 'images/flash - 4.jpeg', caption: ' Speeding into action: The Flash races against time to protect the multiverse.' },
      { src: 'images/green_lantern - 1.webp', hdSrc: 'images/green_lantern - 1.webp', caption: 'Embracing the light: Green Lanterns fearless willpower illuminates the darkness of space' },
      { src: 'images/Suicide_Squad.jpg', hdSrc: 'images/Suicide_Squad.jpg', caption: 'Task Force X unleashed: Suicide Squads unlikely heroes face deadly missions for redemption' },
      { src: 'images/dark knight.webp', hdSrc: 'images/dark knight.webp', caption: 'Guardian of Gotham: The Dark Knight rises to confront the citys darkest threats with unyielding determination' },
      { src: 'images/smaville.jpg', hdSrc: 'images/smaville.jpg', caption: 'Small town, big heroes: Smallvilles residents navigate extraordinary challenges in a world of superpowers.' },
       { src: 'images/sons-of-the-forest-.avif', hdSrc: 'images/sons-of-the-forest-.avif', caption: 'Venturing into the unknown: Sons of the Forest embark on a journey filled with mystery and danger in the heart of the wilderness' }
    ];


images.forEach(image => {
    const img = document.createElement('img');
    img.src = image.src;
    img.dataset.hdSrc = image.hdSrc;
    img.dataset.caption = image.caption;
    gallery.appendChild(img);
});

gallery.addEventListener('click', event => {
    if (event.target.tagName === 'IMG') {
        lightboxImg.src = event.target.dataset.hdSrc;
        lightboxCaption.textContent = event.target.dataset.caption;
        lightbox.classList.add('visible');
    }
});

lightbox.addEventListener('click', () => {
    lightbox.classList.remove('visible');
});

lightboxImg.onerror = () => {
    console.error('Failed to load image:', lightboxImg.src);
};
