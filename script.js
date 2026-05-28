(() => {
  const doc = document;

  function setupThemeToggle() {
    const toggleButtons = doc.querySelectorAll(".btn-sidebar[aria-pressed]");
    toggleButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const pressed = button.getAttribute("aria-pressed") === "true";
        button.setAttribute("aria-pressed", String(!pressed));
      });
    });
  }

  function setupDashboardFilters() {
    const dashboardRoot = doc.querySelector("[data-dashboard-root]");
    if (!dashboardRoot) return;

    const filterToggles = Array.from(doc.querySelectorAll("[data-dashboard-toggle]"));
    const cards = Array.from(doc.querySelectorAll(".dashboard-filter-card"));
    const statusEl = doc.getElementById("dashboard-filter-status");
    if (!filterToggles.length || !cards.length) return;

    function getActiveFilters() {
      return filterToggles
        .filter((input) => input.checked)
        .map((input) => input.value);
    }

    function updateStatus(activeFilters) {
      if (!statusEl) return;
      if (activeFilters.length === 0) {
        statusEl.textContent = "Nenhum filtro ligado - exibindo todos os cards.";
        return;
      }
      statusEl.textContent = `${activeFilters.length} filtro(s) ligado(s).`;
    }

    function applyFilters() {
      const activeFilters = getActiveFilters();
      cards.forEach((card) => {
        const tags = (card.dataset.filterTags || "")
          .split(",")
          .map((tag) => tag.trim())
          .filter(Boolean);
        const visible =
          activeFilters.length === 0 ||
          activeFilters.some((selectedFilter) => tags.includes(selectedFilter));
        card.classList.toggle("card-is-hidden", !visible);
      });
      updateStatus(activeFilters);
    }

    filterToggles.forEach((input) => {
      input.addEventListener("change", applyFilters);
    });
    applyFilters();
  }

  function setupFormValidation() {
    const formCadastro = doc.getElementById("form-cadastro");
    const formLogin = doc.getElementById("form-login");
    const formFeedback = doc.getElementById("form-feedback");
    if (!formCadastro || !formLogin || !formFeedback) return;

    const tituloOriginal = document.title;

    function marcarErro(inputEl, msgEl, mensagem) {
      if (!inputEl || !msgEl) return;
      inputEl.setAttribute("aria-invalid", "true");
      msgEl.textContent = mensagem;
      msgEl.classList.add("visible");
    }

    function limparErro(inputEl, msgEl) {
      if (!inputEl || !msgEl) return;
      inputEl.removeAttribute("aria-invalid");
      msgEl.textContent = "";
      msgEl.classList.remove("visible");
    }

    formCadastro.addEventListener("submit", function (e) {
      e.preventDefault();

      const nome = doc.getElementById("nome-cadastro");
      const email = doc.getElementById("email-cadastro");
      const consent = doc.getElementById("consentimento");
      const erroNome = doc.getElementById("erro-nome");
      const erroEmail = doc.getElementById("erro-email");
      const erroConsent = doc.getElementById("erro-consentimento");
      const msgErro = doc.getElementById("erro-cadastro");
      const listaErr = doc.getElementById("lista-erros-cadastro");
      const msgSuc = doc.getElementById("sucesso-cadastro");

      const erros = [];
      let primeiroCampoInvalido = null;

      [nome, email, consent].forEach((el) => el?.removeAttribute("aria-invalid"));
      [erroNome, erroEmail, erroConsent].forEach((el) => {
        if (!el) return;
        el.textContent = "";
        el.classList.remove("visible");
      });

      if (!nome?.value.trim() || nome.value.trim().split(" ").length < 2) {
        marcarErro(nome, erroNome, "Informe seu nome completo (nome e sobrenome).");
        erros.push("Nome completo inválido.");
        primeiroCampoInvalido = primeiroCampoInvalido || nome;
      } else {
        limparErro(nome, erroNome);
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email?.value.trim() || !emailRegex.test(email.value.trim())) {
        marcarErro(email, erroEmail, "Informe um e-mail válido (ex.: nome@dominio.com).");
        erros.push("E-mail inválido.");
        primeiroCampoInvalido = primeiroCampoInvalido || email;
      } else {
        limparErro(email, erroEmail);
      }

      if (!consent?.checked) {
        marcarErro(consent, erroConsent, "É necessário aceitar o consentimento para cadastrar.");
        erros.push("Consentimento não marcado.");
        primeiroCampoInvalido = primeiroCampoInvalido || consent;
      } else {
        limparErro(consent, erroConsent);
      }

      if (erros.length > 0) {
        document.title = "Alguns dados estão incorretos no formulário. Por favor, corrija. | " + tituloOriginal;
        if (listaErr) {
          listaErr.innerHTML = "";
          erros.forEach((erro) => {
            const li = doc.createElement("li");
            li.textContent = erro;
            listaErr.appendChild(li);
          });
        }
        if (msgErro) msgErro.style.display = "block";
        if (msgSuc) msgSuc.style.display = "none";
        primeiroCampoInvalido?.focus();
      } else {
        document.title = tituloOriginal;
        if (msgErro) msgErro.style.display = "none";
        if (msgSuc) msgSuc.style.display = "block";
        this.reset();
        msgSuc?.focus();
      }
    });

    formLogin.addEventListener("submit", (e) => {
      e.preventDefault();
      const usuario = doc.getElementById("usuario")?.value.trim() || "";
      const senha = doc.getElementById("senha")?.value || "";
      const msgErr = doc.getElementById("erro-login");

      if (!usuario || senha.length < 8) {
        document.title = "Erro de login. Verifique suas credenciais. | " + tituloOriginal;
        if (msgErr) msgErr.style.display = "block";
        doc.getElementById(usuario ? "senha" : "usuario")?.focus();
      } else {
        document.title = tituloOriginal;
        if (msgErr) msgErr.style.display = "none";
        alert("Login simulado com sucesso! (Em produção, o servidor processaria a autenticação.)");
      }
    });

    formFeedback.addEventListener("submit", function (e) {
      e.preventDefault();
      const comentario = doc.getElementById("comentario-feedback");
      const erroComent = doc.getElementById("erro-comentario");
      const sucesso = doc.getElementById("sucesso-feedback");

      if (!comentario?.value.trim()) {
        document.title = "Campo comentário obrigatório. Por favor, corrija. | " + tituloOriginal;
        marcarErro(comentario, erroComent, "O comentário é obrigatório.");
        comentario?.focus();
      } else {
        document.title = tituloOriginal;
        limparErro(comentario, erroComent);
        if (sucesso) sucesso.style.display = "block";
        this.reset();
        sucesso?.focus();
      }
    });

    ["nome-cadastro", "email-cadastro", "consentimento"].forEach((id) => {
      doc.getElementById(id)?.addEventListener("input", () => {
        document.title = tituloOriginal;
      });
    });
  }

  /* ═══════════════════════════════════════════════
     CHART.JS — Inicialização dos gráficos
     Substitui os SVGs estáticos por gráficos
     interativos com tooltips e animações.
  ═══════════════════════════════════════════════ */
  function initCharts() {
    if (typeof Chart === "undefined") return;

    /* ─── Cores do design system ─── */
    const BLUE_MID = "#1a5fa8";
    const BLUE_LIGHT = "#b8cee8";
    const BLUE_PALE = "#dce8f5";
    const TEXT_PRIMARY = "#0d1f36";
    const TEXT_MUTED = "#8ea8bf";

    /* ─── Plugin: texto central nos donuts ─── */
    const centerTextPlugin = {
      id: "centerText",
      afterDraw(chart) {
        const { centerText } = chart.config.options.plugins || {};
        if (!centerText || !centerText.display) return;

        const { ctx, chartArea: { top, bottom, left, right } } = chart;
        const cx = (left + right) / 2;
        const cy = (top + bottom) / 2;
        const size = Math.min(right - left, bottom - top);

        ctx.save();

        /* Valor principal */
        ctx.font = `800 ${size * 0.2}px Inter, sans-serif`;
        ctx.fillStyle = centerText.color || BLUE_MID;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(centerText.value || "", cx, cy - size * 0.04);

        /* Rótulo abaixo */
        if (centerText.label) {
          ctx.font = `600 ${size * 0.075}px Inter, sans-serif`;
          ctx.fillStyle = TEXT_MUTED;
          ctx.letterSpacing = "0.08em";
          ctx.fillText(centerText.label, cx, cy + size * 0.11);
        }

        ctx.restore();
      },
    };

    Chart.register(centerTextPlugin);

    /* ─── Configuração padrão dos tooltips ─── */
    const tooltipDefaults = {
      backgroundColor: "rgba(15, 29, 46, 0.92)",
      titleFont: { family: "Inter, sans-serif", size: 12, weight: "700" },
      bodyFont: { family: "Inter, sans-serif", size: 12 },
      padding: 10,
      cornerRadius: 8,
      displayColors: true,
      boxPadding: 4,
    };

    /* ─── Animação padrão ─── */
    const animDefaults = {
      duration: 900,
      easing: "easeOutQuart",
    };

    /* ═════════════════════════════════════
       1) Donut — Informalidade Geral (31,5%)
    ═════════════════════════════════════ */
    const ctxGeral = doc.getElementById("chart-informalidade-geral");
    if (ctxGeral) {
      new Chart(ctxGeral, {
        type: "doughnut",
        data: {
          labels: ["Informal", "Formal"],
          datasets: [{
            data: [31.5, 68.5],
            backgroundColor: [BLUE_MID, BLUE_PALE],
            borderWidth: 0,
            hoverOffset: 6,
          }],
        },
        options: {
          responsive: true,
          maintainAspectRatio: true,
          cutout: "76%",
          layout: { padding: 8 },
          animation: animDefaults,
          plugins: {
            legend: { display: false },
            tooltip: {
              ...tooltipDefaults,
              callbacks: {
                label: (ctx) => `${ctx.label}: ${ctx.parsed}%`,
              },
            },
            centerText: {
              display: true,
              value: "31,5%",
              label: "GERAL",
              color: BLUE_MID,
            },
          },
        },
      });
    }

    /* ═════════════════════════════════════
       2) Donut — Informalidade Doméstico (75%)
    ═════════════════════════════════════ */
    const ctxDomestico = doc.getElementById("chart-informalidade-domestico");
    if (ctxDomestico) {
      new Chart(ctxDomestico, {
        type: "doughnut",
        data: {
          labels: ["Informal", "Formal"],
          datasets: [{
            data: [75, 25],
            backgroundColor: [BLUE_MID, BLUE_PALE],
            borderWidth: 0,
            hoverOffset: 6,
          }],
        },
        options: {
          responsive: true,
          maintainAspectRatio: true,
          cutout: "76%",
          layout: { padding: 8 },
          animation: animDefaults,
          plugins: {
            legend: { display: false },
            tooltip: {
              ...tooltipDefaults,
              callbacks: {
                label: (ctx) => `${ctx.label}: ${ctx.parsed}%`,
              },
            },
            centerText: {
              display: true,
              value: "75%",
              label: "DOMÉSTICO",
              color: BLUE_MID,
            },
          },
        },
      });
    }

    /* ═════════════════════════════════════
       3) Donut — Status MEI (62/28/10)
    ═════════════════════════════════════ */
    const ctxMei = doc.getElementById("chart-mei");
    if (ctxMei) {
      new Chart(ctxMei, {
        type: "doughnut",
        data: {
          labels: ["Não Possui", "Possui", "Já Teve"],
          datasets: [{
            data: [62, 28, 10],
            backgroundColor: [BLUE_MID, BLUE_LIGHT, BLUE_PALE],
            borderWidth: 0,
            hoverOffset: 6,
          }],
        },
        options: {
          responsive: true,
          maintainAspectRatio: true,
          cutout: "58%",
          layout: { padding: 8 },
          animation: animDefaults,
          plugins: {
            legend: { display: false },
            tooltip: {
              ...tooltipDefaults,
              callbacks: {
                label: (ctx) => `${ctx.label}: ${ctx.parsed}%`,
              },
            },
            centerText: { display: false },
          },
        },
      });
    }

    /* ═════════════════════════════════════
       4) Barras Horizontais — Horas Semanais
    ═════════════════════════════════════ */
    const ctxHoras = doc.getElementById("chart-horas");
    if (ctxHoras) {
      new Chart(ctxHoras, {
        type: "bar",
        data: {
          labels: ["Formal", "Informal"],
          datasets: [{
            data: [30, 40],
            backgroundColor: [BLUE_MID, BLUE_LIGHT],
            borderRadius: 6,
            barThickness: 18,
          }],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          indexAxis: "y",
          animation: animDefaults,
          scales: {
            x: {
              max: 50,
              ticks: {
                callback: (v) => `${v}h`,
                font: { family: "Inter, sans-serif", size: 10 },
                color: TEXT_MUTED,
              },
              grid: { color: "rgba(221,230,239,0.5)" },
            },
            y: {
              ticks: {
                font: { family: "Inter, sans-serif", size: 11, weight: "600" },
                color: TEXT_PRIMARY,
              },
              grid: { display: false },
            },
          },
          plugins: {
            legend: { display: false },
            tooltip: {
              ...tooltipDefaults,
              callbacks: {
                label: (ctx) => `${ctx.parsed.x}h/semana`,
              },
            },
          },
        },
      });
    }

    /* ═════════════════════════════════════
       5) Barras Horizontais — Salário Mensal
    ═════════════════════════════════════ */
    const ctxSalario = doc.getElementById("chart-salario");
    if (ctxSalario) {
      new Chart(ctxSalario, {
        type: "bar",
        data: {
          labels: ["Formal", "Informal"],
          datasets: [{
            data: [2450, 1120],
            backgroundColor: [BLUE_MID, BLUE_LIGHT],
            borderRadius: 6,
            barThickness: 18,
          }],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          indexAxis: "y",
          animation: animDefaults,
          scales: {
            x: {
              max: 3000,
              ticks: {
                callback: (v) =>
                  `R$ ${v.toLocaleString("pt-BR")}`,
                font: { family: "Inter, sans-serif", size: 10 },
                color: TEXT_MUTED,
              },
              grid: { color: "rgba(221,230,239,0.5)" },
            },
            y: {
              ticks: {
                font: { family: "Inter, sans-serif", size: 11, weight: "600" },
                color: TEXT_PRIMARY,
              },
              grid: { display: false },
            },
          },
          plugins: {
            legend: { display: false },
            tooltip: {
              ...tooltipDefaults,
              callbacks: {
                label: (ctx) =>
                  `R$ ${ctx.parsed.x.toLocaleString("pt-BR")}`,
              },
            },
          },
        },
      });
    }

    /* ═════════════════════════════════════
       6) Barras Verticais — Canal de Aquisição
    ═════════════════════════════════════ */
    const ctxCanal = doc.getElementById("chart-canal");
    if (ctxCanal) {
      new Chart(ctxCanal, {
        type: "bar",
        data: {
          labels: ["Indicação", "Outros"],
          datasets: [{
            data: [85.7, 14.3],
            backgroundColor: [BLUE_MID, BLUE_LIGHT],
            borderRadius: 6,
            barThickness: 150,
          }],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          animation: animDefaults,
          scales: {
            y: {
              max: 100,
              ticks: {
                callback: (v) => `${v}%`,
                font: { family: "Inter, sans-serif", size: 10 },
                color: TEXT_MUTED,
              },
              grid: { color: "rgba(221,230,239,0.5)" },
            },
            x: {
              ticks: {
                font: { family: "Inter, sans-serif", size: 11, weight: "600" },
                color: TEXT_PRIMARY,
              },
              grid: { display: false },
            },
          },
          plugins: {
            legend: { display: false },
            tooltip: {
              ...tooltipDefaults,
              callbacks: {
                label: (ctx) => `${ctx.label}: ${ctx.parsed.y}%`,
              },
            },
          },
        },
      });
    }
  }

  setupThemeToggle();
  setupDashboardFilters();
  setupFormValidation();
  initCharts();
})();
