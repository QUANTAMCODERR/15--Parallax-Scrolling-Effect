document.querySelectorAll('.journey-carousel').forEach((carousel) => {
  let currentIndex = 0;
  const mediaItems = carousel.querySelectorAll('.carousel-img, .carousel-video');
  const labels = carousel.querySelectorAll('.carousel-label'); // All labels corresponding to images/videos
  const totalMedia = mediaItems.length;

  function showMedia(index) {
    // Hide all media items and labels in this carousel
    mediaItems.forEach((media) => {
      media.style.display = 'none';
      if (media.tagName === 'VIDEO') {
        media.pause(); // Pause all videos
        media.currentTime = 0; // Reset video to the beginning
      }
    });

    labels.forEach((label) => {
      label.style.display = 'none'; // Hide all labels
    });

    // Show the current media item and its label
    const currentMedia = mediaItems[index];
    const currentLabel = labels[index]; // Get the corresponding label for the current media

    currentMedia.style.display = 'block';
    currentLabel.style.display = 'block'; // Show the label for the current media

    if (currentMedia.tagName === 'VIDEO') {
      // If it's a video, autoplay it and change after 10 seconds
      currentMedia.play();
      currentMedia.addEventListener('ended', nextMedia, { once: true }); // Move to next after video ends
      setTimeout(nextMedia, 20000); // Ensure transition happens after 10 seconds
    } else {
      // If it's an image, change after 5 seconds
      setTimeout(nextMedia, 10000);
    }
  }

  function nextMedia() {
    // Update index to the next item, or reset to the first
    currentIndex = (currentIndex + 1) % totalMedia;
    showMedia(currentIndex);
  }

  // Initialize the carousel by showing the first media item
  showMedia(currentIndex);
});
