document.querySelectorAll('.memories-carousel').forEach((carousel) => {
    let currentIndex = 0;
    const mediaItems = carousel.querySelectorAll('.carousel-img');
    const labels = carousel.querySelectorAll('.carousel-label');
    const totalMedia = mediaItems.length;
  
    function showMedia(index) {
      // Hide all media items and labels in this carousel
      mediaItems.forEach((media) => media.style.display = 'none');
      labels.forEach((label) => label.style.display = 'none');
  
      // Show the current media item and its label
      mediaItems[index].style.display = 'block';
      labels[index].style.display = 'block';
  
      // Change media after 10 seconds
      setTimeout(nextMedia, 10000);
    }
  
    function nextMedia() {
      currentIndex = (currentIndex + 1) % totalMedia;
      showMedia(currentIndex);
    }
  
    // Initialize the carousel
    showMedia(currentIndex);
  });
  