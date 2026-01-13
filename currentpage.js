  window.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".nav-btn");
    const buttons_mob = document.querySelectorAll(".nav-btn-mob");
    const currentPage = window.location.pathname.split("/").pop();

    buttons.forEach(btn => {
      const link = btn.getAttribute("onclick");
      if (link && link.includes(currentPage)) {
        btn.classList.add("active");
      }
    });

    buttons_mob.forEach(btn => {
      const link = btn.getAttribute("onclick");
      if (link && link.includes(currentPage)) {
        btn.classList.add("active");
      }
    });
  });


  document.addEventListener('contextmenu', function(e) {
            e.preventDefault();
        });

