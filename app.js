
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