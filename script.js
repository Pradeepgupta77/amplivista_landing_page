

//logos slider section start

document.addEventListener("DOMContentLoaded", function () {
    function smoothScroll() {
        const upWrappers = document.querySelectorAll(".upscroll .carousel-wrapper");
        upWrappers.forEach(wrapper => {
            let speed = 0.5;
            let scrolling = true;
            let top = 0;
            let itemHeight = wrapper.children[0].offsetHeight;

            // Clone the images to make scrolling continuous
            Array.from(wrapper.children).forEach(child => {
                wrapper.appendChild(child.cloneNode(true));
            });

            function scrollUp() {
                function animateScroll() {
                    if (scrolling) {
                        top -= speed;
                        wrapper.style.transform = `translateY(${top}px)`;

                        if (Math.abs(top) >= itemHeight * wrapper.children.length / 2) {
                            top = 0;
                            wrapper.style.transform = "translateY(0px)";
                        }
                        requestAnimationFrame(animateScroll);
                    }
                }
                animateScroll();
            }

            scrollUp();

            wrapper.addEventListener("mouseenter", () => scrolling = false);
            wrapper.addEventListener("mouseleave", () => {
                scrolling = true;
                scrollUp();
            });
        });

        const downWrappers = document.querySelectorAll(".downscroll .carousel-wrapper");
        downWrappers.forEach(wrapper => {
            let speed = 0.5;
            let scrolling = true;
            let itemHeight = wrapper.children[0].offsetHeight;
            let top = -itemHeight;

            // Clone the images and prepend
            let originalChildren = Array.from(wrapper.children);
            originalChildren.reverse().forEach(child => {
                wrapper.insertBefore(child.cloneNode(true), wrapper.firstChild);
            });
            wrapper.style.transform = `translateY(${top}px)`;

            function scrollDown() {
                function animateScroll() {
                    if (scrolling) {
                        top += speed;
                        wrapper.style.transform = `translateY(${top}px)`;

                        if (top >= 0) {
                            top = -itemHeight * wrapper.children.length / 2;
                            wrapper.style.transform = `translateY(${top}px)`;
                        }
                        requestAnimationFrame(animateScroll);
                    }
                }
                animateScroll();
            }

            scrollDown();

            wrapper.addEventListener("mouseenter", () => scrolling = false);
            wrapper.addEventListener("mouseleave", () => {
                scrolling = true;
                scrollDown();
            });
        });
    }

    smoothScroll();
});


//logos slider section End

// cash studay section start 

  // Grab buttons
  const btnCashOne = document.getElementById('cash_one');
  const btnCashTwo = document.getElementById('cash_two');
  const btnCashThree = document.getElementById('cash_three');

  // Grab images
  const imgCashOne = document.getElementById('cash_one_img');
  const imgCashTwo = document.getElementById('cash_two_img');
  const imgCashThree = document.getElementById('cash_three_img');

  // Function to hide all images
  function hideAllImages() {
    imgCashOne.style.display = 'none';
    imgCashTwo.style.display = 'none';
    imgCashThree.style.display = 'none';
  }

  // Show only Cash One image by default
  hideAllImages();
  imgCashOne.style.display = 'block';

  // Add click events
  btnCashOne.addEventListener('click', () => {
    hideAllImages();
    imgCashOne.style.display = 'block';
  });

  btnCashTwo.addEventListener('click', () => {
    hideAllImages();
    imgCashTwo.style.display = 'block';
  });

  btnCashThree.addEventListener('click', () => {
    hideAllImages();
    imgCashThree.style.display = 'block';
  });


// cash studay section End 


// faq open close start
const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');

    question.addEventListener('click', () => {
      faqItems.forEach(i => {
        if (i !== item) i.classList.remove('active');
      });
      item.classList.toggle('active');
    });
  }); 
// faq open close End 