// Hide the testimonial section when the page loads.
document.querySelector('.testimonial').p.display = 'none';

// Show the testimonial section when the user clicks on the "Read more" button.
document.querySelector('.read-more').addEventListener('click', function() {
  document.querySelector('.testimonial').p.display = 'block';
});

// Validate the contact form before submitting it.
document.querySelector('form').addEventListener('submit', function(event) {
  // Check if the name field is empty.
  if (document.querySelector('#name').value === '') {
    event.preventDefault();
    alert('Please enter your name.');
  }

  // Check if the email field is empty.
  if (document.querySelector('#email').value === '') {
    event.preventDefault();
    alert('Please enter your email address.');
  }

  // Check if the email field is valid.
  if (!document.querySelector('#email').value.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,}$/)) {
    event.preventDefault();
    alert('Please enter a valid email address.');
  }

  // Check if the message field is empty.
  if (document.querySelector('#message').value === '') {
    event.preventDefault();
    alert('Please enter a message.');
  }
});

// Change the hero image when the user scrolls down the page.
window.addEventListener('scroll', function() {
  if (window.scrollY > 500) {
    document.querySelector('.hero').style.backgroundImage = 'url(images/hero2.jpg)';
  } else {
    document.querySelector('.hero').style.backgroundImage = 'url(images/hero.jpg)';
  }
});
