// Smooth animation saat scroll
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    sections.forEach(sec => {
        const rect = sec.getBoundingClientRect();
        if(rect.top < window.innerHeight - 50){
            sec.classList.add('show');
        }
    });
});

// Smooth page transition saat load
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    if (document.getElementById("typing")) {
        typeEffect();
    }
});

// Typing Effect (khusus halaman index.html saja)
const typingText = "Mahasiswa | Esport Enthusiast";
let i = 0;
function typeEffect() {
    if (i < typingText.length) {
        document.getElementById("typing").innerHTML += typingText.charAt(i);
        i++;
        setTimeout(typeEffect, 100);
    }
}

// Modal untuk form hanya jika ada form
const contactForm = document.getElementById('contactForm');
if(contactForm){
    const modal = document.createElement('div');
    modal.id = "modal";
    modal.innerHTML = `
        <div class="modal-content">
            <p id="modal-message"></p>
            <button id="closeModal">OK</button>
        </div>
    `;
    document.body.appendChild(modal);

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if(name && email && message){
            document.getElementById("modal-message").innerText = `Terima kasih ${name}, pesan kamu sudah terkirim!`;
            modal.classList.add("show");
            this.reset();
        } else {
            document.getElementById("modal-message").innerText = "Tolong isi semua kolom!";
            modal.classList.add("show");
        }
    });

    document.addEventListener('click', (e) => {
        if(e.target.id === "closeModal") modal.classList.remove("show");
    });
}
