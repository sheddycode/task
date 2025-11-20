
// ANIMATION SCRIPT //

  const cards = document.querySelectorAll('.card');

  function revealCards() {
    const windowHeight = window.innerHeight;

    cards.forEach((card, index) => {
      const cardTop = card.getBoundingClientRect().top;

      if (cardTop < windowHeight - 50) {
        setTimeout(() => {
          card.classList.remove("opacity-0", "translate-y-10");
        }, index * 150); // stagger animation
      }
    });
  }

  window.addEventListener('scroll', revealCards);
  window.addEventListener('load', revealCards);




  const sidebar = document.getElementById("sidebar");
  const backdrop = document.getElementById("backdrop");
  const menuBtn = document.getElementById("menuBtn");
  const closeBtn = document.getElementById("closeBtn");

  function openSidebar() {
    sidebar.classList.remove("-translate-x-full");
    backdrop.classList.remove("hidden");
    menuBtn.classList.add("hidden");
    closeBtn.classList.remove("hidden");
  }

  function closeSidebar() {
    sidebar.classList.add("-translate-x-full");
    backdrop.classList.add("hidden");
    closeBtn.classList.add("hidden");
    menuBtn.classList.remove("hidden");
  }

  menuBtn.addEventListener("click", openSidebar);
  closeBtn.addEventListener("click", closeSidebar);
  backdrop.addEventListener("click", closeSidebar);

  // Function for Number counts
   const counters = document.querySelectorAll('.count-up');
  let counted = false;

  const startCounting = () => {
    counters.forEach(counter => {
      const target = +counter.getAttribute('data-target');
      const speed = 200;

      const step = () => {
        const count = +counter.innerText;
        const increment = target / speed;

        if (count < target) {
          counter.innerText = Math.ceil(count + increment);
          requestAnimationFrame(step);
        } else {
          counter.innerText = target;
        }
      };

      step();
    });
  };

  // Trigger immediately when the counters *touch* the viewport
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !counted) {
        counted = true;
        startCounting();
      }
    });
  }, {
    threshold: 0   // fires instantly when element enters the viewport
  });

  counters.forEach(counter => observer.observe(counter));

  // Images Slides Script 
   const slides = document.querySelectorAll('.slide');
  let index = 0;

  function showSlide() {
    slides.forEach((slide, i) => {
      slide.style.opacity = i === index ? '1' : '0';
    });

    index = (index + 1) % slides.length;
  }

  showSlide();
  setInterval(showSlide, 4000); // changes every 4 seconds

  // scripts for dropdown menu icon
  // === DESKTOP DROPDOWNS ===
const featuresIcon = document.getElementById('featuresDropdownIcon');
const featuresMenu = document.getElementById('featuresDropdownMenu');

const pricingIcon = document.getElementById('pricingDropdownIcon');
const pricingMenu = document.getElementById('pricingDropdownMenu');

featuresIcon.addEventListener('click', (e) => {
  e.stopPropagation(); // prevent closing immediately
  featuresMenu.classList.toggle('hidden');
  featuresIcon.classList.toggle('ri-arrow-up-s-line');
  featuresIcon.classList.toggle('ri-arrow-down-s-line');
});

pricingIcon.addEventListener('click', (e) => {
  e.stopPropagation();
  pricingMenu.classList.toggle('hidden');
  pricingIcon.classList.toggle('ri-arrow-up-s-line');
  pricingIcon.classList.toggle('ri-arrow-down-s-line');
});

// Close desktop dropdowns if clicked outside
document.addEventListener('click', () => {
  featuresMenu.classList.add('hidden');
  featuresIcon.classList.remove('ri-arrow-up-s-line');
  featuresIcon.classList.add('ri-arrow-down-s-line');

  pricingMenu.classList.add('hidden');
  pricingIcon.classList.remove('ri-arrow-up-s-line');
  pricingIcon.classList.add('ri-arrow-down-s-line');
});


// === SIDEBAR DROPDOWNS ===
const sidebarIcons = document.querySelectorAll('.sidebar-dropdown-icon');

sidebarIcons.forEach(icon => {
  icon.addEventListener('click', (e) => {
    e.stopPropagation(); // prevent closing when clicking icon
    const menu = icon.closest('li').querySelector('.sidebar-dropdown-menu');
    menu.classList.toggle('hidden');
    icon.classList.toggle('ri-arrow-up-s-line');
    icon.classList.toggle('ri-arrow-down-s-line');
  });
});

// Close sidebar dropdowns if clicked outside
document.addEventListener('click', () => {
  document.querySelectorAll('.sidebar-dropdown-menu').forEach(menu => menu.classList.add('hidden'));
  document.querySelectorAll('.sidebar-dropdown-icon').forEach(icon => {
    icon.classList.remove('ri-arrow-up-s-line');
    icon.classList.add('ri-arrow-down-s-line');
  });
});
