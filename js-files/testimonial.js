
//container section   
const customers = [
    {
      name: "Namrata Vairagad",
      image: "https://img.freepik.com/free-photo/portrait-man-cartoon-style_23-2151134160.jpg?size=626&ext=jpg&uid=R146697784&ga=GA1.1.992685107.1718858231&semt=ais_user",
      location: "SYMCA Chh.Sambhajinagar",
      testimonial: "Wandering through the lush greenery of our college forest brings a sense of calm and tranquility 🌲🌼 unlike any other. 🌈",
    },
    {
      name: "Sakshi Ambekar",
      image: "https://img.freepik.com/free-vector/hand-drawn-side-profile-cartoon-illustration_23-2150503812.jpg?size=626&ext=jpg&uid=R146697784&ga=GA1.1.992685107.1718858231&semt=ais_user",
      location: "SYMCA Chh.Sambhajinagar",
      testimonial: "The dense forest on campus is the perfect sanctuary 🌳✨ to reconnect with nature and discover true inner peace. 🌿💚",
    },
    {
      name: "Shiva Chavhan",
      image: "https://img.freepik.com/free-photo/portrait-man-cartoon-style_23-2151134012.jpg?size=626&ext=jpg&uid=R146697784&ga=GA1.1.992685107.1718858231&semt=ais_user",
      location: "SYMCA Chh.Sambhajinagar",
      testimonial: "The dense forest at college offers a breathtaking escape 🌞🌳, where every step leads to moments of peace and reflection. 🍃🧘‍♂️",
    },
    {
      name: "Shiv Thorhate",
      image: "https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100164.jpg?t=st=1719046094~exp=1719049694~hmac=29670c440f200e9e11612c82874614ebf1a643bbb4f43ef1f8f83f4c93714454&w=740",
      location: "SYMCA Chh.Sambhajinagar",
      testimonial: "Immerse yourself in the beauty of the college dense forest 🌿🌸—it's a place where stress melts away and serenity takes over. ☁️💖",
    },
    {
      name: "Harshada Sontakke",
      image: "https://img.freepik.com/free-vector/hand-drawn-side-profile-cartoon-illustration_23-2150517168.jpg?size=626&ext=jpg&uid=R146697784&ga=GA1.1.992685107.1718858231&semt=ais_user",
      location: "SYMCA Chh.Sambhajinagar",
      testimonial: "Exploring the college dense forest is not just an adventure 🏞️; it’s a journey to find the stillness and clarity within. 🌈🌿",
    },
    {
      name: "Bhavesh More",
      image: "https://img.freepik.com/free-vector/hand-drawn-side-profile-cartoon-illustration_23-2150503812.jpg?size=626&ext=jpg&uid=R146697784&ga=GA1.1.992685107.1718858231&semt=ais_user",
      location: "SYMCA Chh.Sambhajinagar",
      testimonial: "In the heart of the college dense forest, I found a hidden treasure 💎: my own inner peace amidst nature's beauty. 🌳💚",
    },
    {
      name: "Govinda Bhojane",
      image: "https://img.freepik.com/free-photo/portrait-man-cartoon-style_23-2151134160.jpg?size=626&ext=jpg&uid=R146697784&ga=GA1.1.992685107.1718858231&semt=ais_user",
      location: "SYMCA Chh.Sambhajinagar",
      testimonial: "The college dense forest invites you to wander and wonder 🌲✨, revealing the tranquility that lies within the embrace of its trees. 🌼🌿",
    },
    {
      name: "Shishir Sakhare",
      image: "https://img.freepik.com/free-photo/portrait-man-cartoon-style_23-2151134012.jpg?size=626&ext=jpg&uid=R146697784&ga=GA1.1.992685107.1718858231&semt=ais_user",
      location: "SYMCA Chh.Sambhajinagar",
      testimonial: "Every visit to the college dense forest renews my spirit 🌟💚, reminding me of the peace that nature so generously offers.🌳🍃",
    },
    {
      name: "Apur Vhyavhare",
      image: "https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100164.jpg?t=st=1719046094~exp=1719049694~hmac=29670c440f200e9e11612c82874614ebf1a643bbb4f43ef1f8f83f4c93714454&w=740",
      location: "LYCIVIL Chh.Sambhajinagar",
      testimonial: "The college dense forest is my go-to escape 🌳🍃, where I can breathe in the beauty of nature and exhale my worries. 🌈💨",
    }, 
    {
      name: "Seerat Kashmiri",
      image: "https://img.freepik.com/free-vector/hand-drawn-side-profile-cartoon-illustration_23-2150517168.jpg?size=626&ext=jpg&uid=R146697784&ga=GA1.1.992685107.1718858231&semt=ais_user",
      location: "SYMCA Chh.Sambhajinagar",
      testimonial: "Every corner of our college dense forest whispers tranquility 🌲🕊️, making it the perfect spot for reflection and rejuvenation. ✨🌿",
    },
  ];
  
  let count = 0;
  setInterval(() => {
    if (count === customers.length - 1) {
      count = 0;
    } else {
      count++;
    }
    change();
  }, 3000);
  
  let profile = document.querySelector(".profile");
  let testimonial = document.querySelector(".text");
  let details = document.querySelector(".details");
  
  function change() {
    profile.style.animation = "none"; // Reset the animation
    testimonial.style.animation = "none"; // Reset the animation
    details.style.animation = "none"; // Reset the animation
    profile.offsetHeight; // Trigger reflow
  
    profile.setAttribute("src", customers[count].image);
    testimonial.innerText = customers[count].testimonial;
    details.innerHTML = `<p class="name">${customers[count].name}</p>
                           <p class="city">${customers[count].location}</p>`;
  
    profile.style.animation = "translate 0.75s 1 ease-in forwards";
    testimonial.style.animation = "translate 0.75s 1 ease-in forwards";
    details.style.animation = "translate 0.75s 1 ease-in forwards";
  }
  
  change();


//   container sections ends here
