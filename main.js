document.addEventListener("DOMContentLoaded", function () {
  // Navbar toggle untuk responsif
  const togglebtn = document.querySelector(".togglebtn");
  const nav = document.querySelector(".navlinks");

  togglebtn.addEventListener("click", function () {
    this.classList.toggle("click");
    nav.classList.toggle("open");
  });

  // Ketik animasi dengan Typed.js
  new Typed(".input", {
    strings: ["Videographer", "Desainer Grafis"],
    typeSpeed: 70,
    backSpeed: 55,
    loop: true,
  });

  // Konten yang akan diganti berdasarkan tombol menu
  const heroText = document.querySelector(".hero-text");

  const content = {
    about: `
            <h5>Hi I'm <span class="input">Videographer</span></h5>
            <h1>Ilham Wailissa</h1>
            <p>Saya adalah seorang videografer dan desainer grafis yang senang mengubah ide menjadi visual yang kuat. Saya membuat video sinematik dan desain grafis yang menarik untuk menyampaikan cerita, menginspirasi audiens, dan menghidupkan identitas brand. Dengan kreativitas, ketelitian, dan semangat, setiap karya saya hadir sebagai pengalaman visual yang berkesan!</p>
            <div class="btn-group">
                <a href="#" class="btn active">Download CV</a>
                <a href="#" class="btn">Contact</a>
            </div>
            
            <div class="social">
  <!-- Instagram -->
  <a href="https://www.instagram.com/ilhamw2107" target="_blank">
    <i class="fa-brands fa-instagram"></i>
  </a>

  <!-- YouTube -->
  <a href="https://www.youtube.com/@ilhamcraft7325" target="_blank">
    <i class="fa-brands fa-youtube"></i>
  </a>

  <!-- TikTok -->
  <a href="https://www.tiktok.com/@iwailissanz21" target="_blank">
    <i class="fa-brands fa-tiktok"></i>
  </a>
</div>
        `,
    portofolio: `
    <h2>My Portofolio</h2>
    <p>Berikut adalah beberapa karya saya dalam videografi dan fotografi.</p>
    <div class="portofolio-grid">
        <!-- Video Projects -->
        <div class="portofolio-item">
            <video controls src="Video1.mp4"></video>
            <p>Video Cinematic 1</p>
        </div>
        <div class="portofolio-item">
            <video controls src="Video2.mp4"></video>
            <p>Video Cinematic 2</p>
        </div>
        <div class="portofolio-item">
            <video controls src="Video3.mp4"></video>
            <p>Video Cinematic 3</p>
        </div>
        <div class="portofolio-item">
            <video controls src="Video4.mp4"></video>
            <p>Video Cinematic 4</p>
        </div>

        <!-- Photo Projects -->
        <div class="portofolio-item">
            <img src="photoproject1.jpeg" alt="Photo 1" />
            <p>POSTER BANNER</p>
        </div>
        <div class="portofolio-item">
            <img src="photoproject2.jpeg" alt="Photo 2" />
            <p>POSTER BANNER 2</p>
        </div>
        <div class="portofolio-item">
            <img src="photoproject3.jpeg" alt="Photo 3" />
            <p>KEMASAN PRODUCT</p>
        </div>
        <div class="portofolio-item">
            <img src="photoproject4.jpeg" alt="Photo 4" />
            <p>LOGO</p>
        </div>
    </div>
`,
    blog: `<h2>Blog</h2><p>Selamat datang di blog saya. Di sini saya menulis tentang videografi dan desain grafis</p>`,
    contact: `<h2>Contact Me</h2><p>Silakan hubungi saya melalui sosial media di bawah ini.</p>
    <div class="social">
  <!-- Instagram -->
  <a href="https://www.instagram.com/ilhamwailissa" target="_blank">
    <i class="fa-brands fa-instagram"></i>
  </a>

  <!-- YouTube -->
  <a href="https://www.youtube.com/@ilhamwailissa" target="_blank">
    <i class="fa-brands fa-youtube"></i>
  </a>

  <!-- TikTok -->
  <a href="https://www.tiktok.com/@ilhamwailissa" target="_blank">
    <i class="fa-brands fa-tiktok"></i>
  </a>
</div>
`,
  };

  // Tambahkan event listener ke setiap menu
  document.querySelectorAll(".navlinks li a").forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const target = this.textContent.trim().toLowerCase();
      if (content[target]) {
        heroText.innerHTML = content[target];
        if (target === "home") {
          new Typed(".input", {
            strings: ["Videographer", "Photographer", "Desainer Grafis"],
            typeSpeed: 70,
            backSpeed: 55,
            loop: true,
          });
        }
      }
    });
  });
});
