
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

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !counted) {
        counted = true;
        startCounting();
      }
    });
  }, { threshold: 0.3 });

  counters.forEach(counter => observer.observe(counter));