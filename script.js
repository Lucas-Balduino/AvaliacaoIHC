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

  setupThemeToggle();
  setupDashboardFilters();
  setupFormValidation();
})();
