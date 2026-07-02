/* Speak To Learn — Static build behavior */
(function () {
  "use strict";

  // ==== Ano no footer ====
  var yr = document.getElementById("year");
  if (yr) yr.textContent = new Date().getFullYear();

  // ==== Header scroll + floating CTA (mobile) ====
  var header = document.getElementById("site-header");
  var floatingCta = document.getElementById("floating-cta");
  function onScroll() {
    if (header) header.classList.toggle("is-scrolled", window.scrollY > 12);
    if (floatingCta) {
      var heroBtn = document.querySelector("#top .btn-primary");
      var show = false;
      if (heroBtn) {
        show = heroBtn.getBoundingClientRect().bottom < 0;
      } else {
        show = window.scrollY > 400;
      }
      floatingCta.classList.toggle("is-visible", show);
    }
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // ==== Reveal on scroll ====
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add("is-visible");
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
  }

  // ==== FAQ accordion ====
  var faqItems = document.querySelectorAll("#faq-list .faq-item");
  faqItems.forEach(function (item) {
    var btn = item.querySelector(".faq-q");
    if (!btn) return;
    btn.addEventListener("click", function () {
      var willOpen = !item.classList.contains("open");
      faqItems.forEach(function (i) {
        i.classList.remove("open");
        var b = i.querySelector(".faq-q");
        if (b) b.setAttribute("aria-expanded", "false");
      });
      if (willOpen) {
        item.classList.add("open");
        btn.setAttribute("aria-expanded", "true");
      }
    });
  });

  // ==== Depoimentos: carrossel WhatsApp ====
  var testimonials = [
    { text: "O curso Intensivo foi sensacional!\nEm 2 meses conseguimos aprender uma quantidade enorme de expressões, palavras novas, melhoramos a fala e a escuta, melhoramos a leitura e a habilidade de interpretar as histórias do livro que estávamos usando, e também entender oque funciona e oque não funciona na prática em uma conversa.\nE tudo isso pelo método natural, oque com certeza foi oque fez com que nosso aprendizado fosse tão proveitoso em pouco tempo. Aprendemos os significados das palavras como um nativo realmente aprende, sem traduções.", time: "16:06" },
    { text: "Estou gostando muito das aulas!\nCreio que são as melhores aulas de inglês que já tive.\nO método, as conversações, estão me ajudando muito!", time: "09:31" },
    { text: "Gostaria de dar o meu feedback sobre o curso e dizer que achei muito legal e proveitoso.\nO uso do livro 'English by Nature Method' foi um ponto super positivo, pois ele ensina por níveis e sem tradução, tudo direto na língua que estávamos aprendendo, o inglês. Além disso, o ambiente e o compromisso de ter as aulas regularmente dão muito ânimo para estudar, ainda mais compartilhando a jornada com outras pessoas. Para completar, a professora, por morar atualmente nos EUA, conseguiu nos dar muitas dicas valiosas, já que ela mesma passou por esse processo de aprender inglês.", time: "08:20" },
    { text: "Está sendo uma experiência muito legal!\nO professor e os colegas são excelentes.\nE o livro utilizado em aula é muito instrutivo.\nEu penso que é uma aula excelente para qualquer nível, desde quem sabe pouco até quem tem um inglês consolidado.", time: "10:12" },
    { text: "Tanto as aulas do professor Marco, quanto da professora Nicole, têm sido muito boas para o meu inglês:\nÉ perceptível a mudança na minha pronúncia e uma facilidade maior em se expressar; e também pude ver a mesma evolução nos meus colegas de ambas as turmas.\nSão abordagens diferentes de cada professor, mas elas se complementaram muito bem para mim.", time: "18:42" },
    { text: "As aulas são muito boas.\nO que mais está ajudando é o professor Pedro nos estimular a conversar.\nEu inclusive falei para o prof. que entrei na aula com o intuito de melhorar o inglês, colocar de uma forma mais prática.\nE o professor nos coloca para conversar e isso é muito bom!", time: "15:55" },
    { text: "Oi, boa tarde!\nEu estou gostando muito das aulas, do professor e da turma! 😁", time: "09:41" },
    { text: "É a primeira vez que estou acessando o inglês pelo Método Natural, que é proposto pela Speak To Learn. Tanto o método como o material são ótimos. A professora ministra as aulas com excelência e didática.\nEstou amando o curso!", time: "16:14" },
    { text: "Minha experiência tem sido excelente, superando minhas expectativas desde o início.\nFico muito feliz em perceber minha evolução em tão pouco tempo.\nA professora Marya é extremamente atenciosa, e estou realmente encantada com a turma.", time: "15:48" },
    { text: "Olá!!!! Tudo bem ☺️\nEstou gostando das aulas.\nA professora Marya é muito atenciosa e tem sempre paciência em nos explicar tudo, quantas vezes for necessário.", time: "15:45" },
    { text: "Em relação as aulas estou gostando muito!\nO professor é muito bom e a aula rende bem, e o método é muito eficaz!\nEm pouco tempo consegui desenferrujar meu inglês.", time: "14:20" },
    { text: "Está indo tudo bem, as aulas são muito proveitosas!\nConsigo notar claramente o vocabulário sendo aumentado e conversar em inglês começa a ser bem mais tranquilo!", time: "16:02" }
  ];

  var track = document.getElementById("testimonials-track");
  var dotsWrap = document.getElementById("testimonials-dots");
  var carousel = document.getElementById("testimonials-carousel");
  if (track && dotsWrap && carousel) {
    var checkSvg = '<svg width="14" height="10" viewBox="0 0 16 11" fill="none" aria-hidden="true"><path d="M11.07.65 5.16 6.56 3.5 4.9 2.45 5.95l2.71 2.71L12.12 1.7zM15.02.65 9.11 6.56 7.93 5.4l-1.06 1.06 2.24 2.24L16.07 1.7z" fill="#53bdeb"/></svg>';
    var bgLetters = "";
    for (var b = 0; b < 20; b++) bgLetters += "<span>feedback</span>";

    function esc(s) {
      return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    }

    var slidesHtml = testimonials.map(function (t) {
      return (
        '<div class="carousel-slide"><div class="carousel-slide-inner">' +
          '<article class="wa-card">' +
            '<div class="wa-bg" aria-hidden="true">' + bgLetters + '</div>' +
            '<div class="wa-bubble-wrap"><div class="wa-bubble">' +
              '<p>' + esc(t.text) + '</p>' +
              '<div class="wa-meta"><span>' + esc(t.time) + '</span>' + checkSvg + '</div>' +
            '</div></div>' +
          '</article>' +
        '</div></div>'
      );
    }).join("");
    track.innerHTML = slidesHtml;

    var dotsHtml = "";
    for (var i = 0; i < testimonials.length; i++) {
      dotsHtml += '<button type="button" data-idx="' + i + '" aria-label="Ir para slide ' + (i + 1) + '"></button>';
    }
    dotsWrap.innerHTML = dotsHtml;

    var index = 0;
    var total = testimonials.length;
    var dotButtons = dotsWrap.querySelectorAll("button");

    function render() {
      track.style.transform = "translateX(-" + (index * 100) + "%)";
      dotButtons.forEach(function (d, di) { d.classList.toggle("is-active", di === index); });
    }
    function go(dir) { index = (index + dir + total) % total; render(); }
    function goTo(n) { index = ((n % total) + total) % total; render(); }

    var prev = carousel.querySelector(".carousel-nav.prev");
    var next = carousel.querySelector(".carousel-nav.next");
    if (prev) prev.addEventListener("click", function () { go(-1); });
    if (next) next.addEventListener("click", function () { go(1); });
    dotButtons.forEach(function (d) {
      d.addEventListener("click", function () { goTo(parseInt(d.getAttribute("data-idx"), 10)); });
    });

    // touch swipe
    var startX = null, deltaX = 0;
    var viewport = carousel.querySelector(".carousel-viewport");
    if (viewport) {
      viewport.addEventListener("touchstart", function (e) { startX = e.touches[0].clientX; deltaX = 0; }, { passive: true });
      viewport.addEventListener("touchmove", function (e) { if (startX !== null) deltaX = e.touches[0].clientX - startX; }, { passive: true });
      viewport.addEventListener("touchend", function () {
        if (Math.abs(deltaX) > 50) go(deltaX < 0 ? 1 : -1);
        startX = null; deltaX = 0;
      });
    }

    render();
  }
})();
