/* ============================================================
   betterhomes — Webinar Programme Review
   Renders all sections from REPORT (data.js).
   Reusable components: KPI card, insight card, status card,
   decision card, bar chart, donut chart.
   ============================================================ */

(function () {
  "use strict";

  const $ = (id) => document.getElementById(id);

  const COLORS = {
    navy: "#1f343f",
    navySoft: "#46606e",
    green: "#1a9e6e",
    red: "#d05353",
    amber: "#d9921f",
    grey: "#aeb9c6",
    line: "#e4e9ef",
    ink: "#1d2733",
    inkSoft: "#5a6878",
  };

  const ARROWS = {
    up: '<svg viewBox="0 0 12 12" aria-hidden="true" fill="currentColor"><path d="M6 1.5 11 8H7v2.5H5V8H1z"/></svg>',
    down: '<svg viewBox="0 0 12 12" aria-hidden="true" fill="currentColor"><path d="M6 10.5 1 4h4V1.5h2V4h4z"/></svg>',
  };

  /* ---------- Component builders ---------- */

  function learningCard(item) {
    return `
      <article class="card learning-card learning-card--${item.tone}">
        <h3>${item.headline}</h3>
        <span class="num">${item.number}</span>
        <p>${item.explanation}</p>
      </article>`;
  }

  function statusCard(item) {
    return `
      <article class="card status-card">
        <div class="status-card__head">
          <span class="status-card__area">${item.area}</span>
          <span class="pill pill--${item.status}">${item.label}</span>
        </div>
        <p class="status-card__note">${item.note}</p>
      </article>`;
  }

  function kpiCard(item) {
    const arrow = ARROWS[item.direction] || "";
    const foot = item.footnote
      ? `<p class="kpi-card__foot">${item.footnote}</p>`
      : "";
    return `
      <article class="card kpi-card">
        <p class="kpi-card__label">${item.label}</p>
        <p class="kpi-card__value">${item.value}</p>
        <div class="kpi-card__meta">
          <span class="delta delta--${item.tone}">${arrow}${item.change}</span>
          <span class="kpi-card__prev">${item.previous}</span>
        </div>
        ${foot}
      </article>`;
  }

  function miniCard(item) {
    return `
      <article class="card mini-card mini-card--${item.tone}">
        <h3>${item.title}</h3>
        <p>${item.text}</p>
      </article>`;
  }

  function flowCard(item) {
    return `
      <article class="card flow-card">
        <span class="flow-card__step">${item.step}</span>
        <h3>${item.title}</h3>
        <span class="flow-card__spend">${item.spend}</span>
        <span class="flow-card__outcome">${item.outcome}</span>
        <p>${item.detail}</p>
      </article>`;
  }

  function marketGroup(group) {
    const rows = group.rows
      .map(
        (r) => `
        <div class="market-row">
          <p class="market-row__name">${r.market}</p>
          <div class="market-row__stats">
            <span><strong>${r.regs}</strong> registrations</span>
            <span><strong>${r.attendees}</strong> attendees</span>
            <span><strong>${r.showUp}</strong> show-up</span>
          </div>
        </div>`
      )
      .join("");
    return `
      <article class="card market-card market-card--${group.status}">
        <div class="market-card__head">${group.verdict}</div>
        <div class="market-card__body">${rows}</div>
      </article>`;
  }

  function decisionCard(item, i) {
    return `
      <article class="card decision-card">
        <span class="decision-card__num">0${i + 1}</span>
        <div class="decision-card__top">
          <h3>${item.title}</h3>
          <span class="tag">${item.tag}</span>
        </div>
        <p>${item.text}</p>
      </article>`;
  }

  /* ---------- Render static sections ---------- */

  const m = REPORT.meta;
  $("heroConfidential").textContent = m.confidential;
  $("reportTitle").textContent = m.title;
  $("heroEdition").textContent = m.edition;
  $("heroSubtitle").textContent = m.subtitle;
  $("heroDate").textContent = m.date;
  $("footerMeta").textContent = `${m.confidential} · ${m.date}`;

  $("learningCards").innerHTML = REPORT.learnings.map(learningCard).join("");
  $("healthCards").innerHTML = REPORT.healthCheck.map(statusCard).join("");
  $("kpiCards").innerHTML = REPORT.kpis.map(kpiCard).join("");
  $("kpiInsight").textContent = REPORT.kpiInsight;
  $("growthInsights").innerHTML = REPORT.growth.insights
    .map((g) => miniCard({ tone: "positive", title: g.title, text: g.text }))
    .join("");
  $("sourceCommentary").innerHTML = REPORT.sources.commentary
    .map(miniCard)
    .join("");
  $("paidKeyMessage").textContent = REPORT.paidMedia.keyMessage;
  $("paidFlow").innerHTML = REPORT.paidMedia.phases
    .map(flowCard)
    .join('<div class="flow__arrow" aria-hidden="true">→</div>');
  $("marketGroups").innerHTML = REPORT.markets.groups.map(marketGroup).join("");
  $("marketsNote").textContent = REPORT.markets.note;
  $("audienceInterpretation").textContent = REPORT.audience.interpretation;
  $("assetMetrics").innerHTML = REPORT.audienceAsset.metrics
    .map(
      (x) => `
      <div class="asset-metric">
        <span class="value">${x.value}</span>
        <span class="label">${x.label}</span>
        <span class="sub">${x.sub}</span>
      </div>`
    )
    .join("");
  $("assetMessage").textContent = REPORT.audienceAsset.keyMessage;
  $("opportunityHeadline").textContent = REPORT.opportunity.headline;
  $("opportunityCalc").innerHTML = REPORT.opportunity.steps
    .map(
      (s) => `
      <div class="calc__step${s.tone === "positive" ? " calc__step--positive" : ""}">
        <span class="label">${s.label}</span>
        <span class="value">${s.value}</span>
      </div>`
    )
    .join("");
  $("decisionCards").innerHTML = REPORT.decisions.map(decisionCard).join("");
  $("finalThoughts").innerHTML = REPORT.finalThoughts
    .map((p) => `<p>${p}</p>`)
    .join("");

  /* ---------- Charts ---------- */

  if (typeof Chart !== "undefined") {
    Chart.defaults.font.family =
      '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';
    Chart.defaults.color = COLORS.inkSoft;
    Chart.defaults.plugins.tooltip.backgroundColor = COLORS.navy;
    Chart.defaults.plugins.tooltip.padding = 12;
    Chart.defaults.plugins.tooltip.cornerRadius = 8;

    /* Growth: stacked bar — new vs returning */
    new Chart($("growthChart"), {
      type: "bar",
      data: {
        labels: REPORT.growth.weeks,
        datasets: [
          {
            label: "New registrants",
            data: REPORT.growth.newRegs,
            backgroundColor: COLORS.navy,
            borderRadius: 6,
            maxBarThickness: 90,
          },
          {
            label: "Returning registrants",
            data: REPORT.growth.returningRegs,
            backgroundColor: COLORS.green,
            borderRadius: 6,
            maxBarThickness: 90,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: { stacked: true, grid: { display: false } },
          y: {
            stacked: true,
            grid: { color: COLORS.line },
            border: { display: false },
            ticks: { precision: 0 },
          },
        },
        plugins: {
          legend: {
            position: "bottom",
            labels: { usePointStyle: true, pointStyle: "circle", padding: 20 },
          },
          tooltip: {
            callbacks: {
              footer: (items) => {
                const i = items[0].dataIndex;
                return `Total: ${REPORT.growth.totals[i].toLocaleString()}`;
              },
            },
          },
        },
      },
    });

    /* Sources: horizontal bar */
    new Chart($("sourceChart"), {
      type: "bar",
      data: {
        labels: REPORT.sources.rows.map((r) => r.name),
        datasets: [
          {
            data: REPORT.sources.rows.map((r) => r.count),
            backgroundColor: REPORT.sources.rows.map((r, i) =>
              i === 0 ? COLORS.green : COLORS.navy
            ),
            borderRadius: 6,
            maxBarThickness: 28,
          },
        ],
      },
      options: {
        indexAxis: "y",
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            grid: { color: COLORS.line },
            border: { display: false },
            ticks: { precision: 0 },
          },
          y: { grid: { display: false } },
        },
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              label: (ctx) => {
                const row = REPORT.sources.rows[ctx.dataIndex];
                return ` ${row.count} registrations (${row.share}%)`;
              },
            },
          },
        },
      },
    });

    /* Audience: donut */
    const donutColors = [
      COLORS.navy,
      COLORS.grey,
      COLORS.green,
      "#3e7cb1",
      "#cfd8e3",
      COLORS.amber,
      "#7fb5a0",
      COLORS.red,
    ];
    new Chart($("audienceChart"), {
      type: "doughnut",
      data: {
        labels: REPORT.audience.rows.map((r) => r.segment),
        datasets: [
          {
            data: REPORT.audience.rows.map((r) => r.count),
            backgroundColor: donutColors,
            borderColor: "#ffffff",
            borderWidth: 2,
            hoverOffset: 8,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: "62%",
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              label: (ctx) => {
                const row = REPORT.audience.rows[ctx.dataIndex];
                return ` ${row.count} attendees (${row.share}%)`;
              },
            },
          },
        },
      },
    });

    /* Custom legend for the donut */
    $("audienceLegend").innerHTML = REPORT.audience.rows
      .map(
        (r, i) => `
        <li>
          <span class="dot" style="background:${donutColors[i]}"></span>
          <span class="name">${r.segment}</span>
          <span class="val">${r.count} · ${r.share}%</span>
        </li>`
      )
      .join("");
  }

  /* ---------- Navigation behaviour ---------- */

  const navToggle = $("navToggle");
  const navLinks = document.querySelector(".topnav__links");

  navToggle.addEventListener("click", () => {
    const open = navLinks.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(open));
  });

  navLinks.addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
      navLinks.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });

  /* Highlight the section currently in view */
  const sections = [...document.querySelectorAll("section[id]")];
  const links = [...navLinks.querySelectorAll("a")];
  const linkFor = (id) => links.find((a) => a.getAttribute("href") === `#${id}`);

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const link = linkFor(entry.target.id);
        if (!link) return;
        if (entry.isIntersecting) {
          links.forEach((a) => a.classList.remove("is-active"));
          link.classList.add("is-active");
        }
      });
    },
    { rootMargin: "-30% 0px -60% 0px" }
  );
  sections.forEach((s) => observer.observe(s));
})();
