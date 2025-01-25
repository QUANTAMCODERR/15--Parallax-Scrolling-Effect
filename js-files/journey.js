document.querySelectorAll('.journey-carousel').forEach((carousel) => {
  let currentIndex = 0;
  const mediaItems = carousel.querySelectorAll('.carousel-img, .carousel-video');
  const labels = carousel.querySelectorAll('.carousel-label');
  const totalMedia = mediaItems.length;
  let timeoutId; // Store the timeout to clear when switching manually

  function showMedia(index) {
    // Clear any existing timeout to avoid conflicts
    clearTimeout(timeoutId);

    // Hide all media items and labels in this carousel
    mediaItems.forEach((media) => {
      media.style.display = 'none';
      if (media.tagName === 'VIDEO') {
        media.pause(); // Pause video
        media.currentTime = 0; // Reset to the start
      }
    });

    labels.forEach((label) => {
      label.style.display = 'none';
    });

    // Show the current media item and its label
    const currentMedia = mediaItems[index];
    const currentLabel = labels[index];

    currentMedia.style.display = 'block';
    currentLabel.style.display = 'block';

    if (currentMedia.tagName === 'VIDEO') {
      // If the current media is a video
      currentMedia.play();
      timeoutId = setTimeout(nextMedia, 20000); // Change after 20 seconds or video end
      currentMedia.addEventListener('ended', nextMedia, { once: true });
    } else {
      // If it's an image, change after 5 seconds
      timeoutId = setTimeout(nextMedia, 5000);
    }
  }

  function nextMedia() {
    // Update index to the next media item, looping back if necessary
    currentIndex = (currentIndex + 1) % totalMedia;
    showMedia(currentIndex);
  }

  // Initialize the carousel by showing the first media item
  showMedia(currentIndex);
});
