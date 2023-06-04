document.addEventListener("DOMContentLoaded", function() {
    // let Scrollbar = window.Scrollbar;

    const options = {
      damping: 0.08,
      renderByPixels: true,
      thumbMinSize: 5,
      syncCallbacks: true
    };
  
    let scrollbar = Scrollbar.init(document.querySelector('#scrollbar-container'), options);
 
    let navbar = document.querySelector("nav");
    scrollbar.addListener(function(status) {
        if (status.offset.y > 0) {
            navbar.classList.remove("bg-transparent");
            navbar.classList.add("bg-neutral-900/25");
        } else {
            navbar.classList.remove("bg-neutral-900/25");
            navbar.classList.add("bg-transparent");
        }
    });

    new SimpleLightbox('.gallery-images', {
        nav: true,
    })
    
    // const menu = document.querySelector("nav")
    // menu.querySelectorAll('a').forEach(function(link) {
    //         link.addEventListener('click', function(e) {
    //             e.preventDefault();
    //             const target = link.getAttribute("href")
    //             scrollbar.scrollIntoView(document.querySelector(target));    
    //     }) 
    // })
});