function toggleNav() {
    var sidebar = document.getElementById("mySidebar");
    if (sidebar.style.width === "250px") {
        sidebar.style.width = "0";
    } else {
        sidebar.style.width = "250px";
    }
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
}

document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('.scroll-section');
    let rafScheduled = false;

    function revealSections() {
        rafScheduled = false;

        for (const section of sections) {
            const sectionTop = section.getBoundingClientRect().top;
            const sectionHeight = section.getBoundingClientRect().height;

            if (sectionTop <= (Window.innerHeight ||
document.documentElement.clientHeight) * 0.7){
                section.classList.add('visible');
            } else {
                section.classList.remove('visible');
            }
        }
    }

    function requestAnimation() {
        if (rafScheduled) return;
        rafScheduled = true;
        requestAnimationFrame(revealSections);
    }

    window.addEventListener('scroll', requestAnimation);
    revealSections();
});
