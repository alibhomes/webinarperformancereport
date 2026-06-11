/* ============================================================
   betterhomes — Webinar Programme Review
   All report content lives here. Edit this file to update the
   report — no HTML changes needed.
   ============================================================ */

const REPORT = {
  meta: {
    confidential: "CONFIDENTIAL — Internal only",
    title: "Dubai Property Market Webinar Programme Review",
    subtitle:
      "Understanding what drove growth, engagement and attendance — and what should change for W5.",
    edition: "W4 Results & W5 Recommendations",
    date: "June 2026",
  },

  /* 2. What We Learned This Month ------------------------------ */
  learnings: [
    {
      tone: "positive",
      headline: "Content quality improved",
      number: "38.2 min",
      explanation:
        "Average watch time was the highest of any webinar so far. People who joined stayed almost to the end.",
    },
    {
      tone: "negative",
      headline: "Attendance volume declined",
      number: "128 attendees",
      explanation:
        "Down from 197 in W3. Fewer people registered, and fewer of those showed up. This is the problem to fix.",
    },
    {
      tone: "positive",
      headline: "UK market validated",
      number: "69% show-up",
      explanation:
        "The UK test delivered 9 attendees from 13 registrations — strong enough to scale with confidence in W5.",
    },
    {
      tone: "positive",
      headline: "Audience loyalty is increasing",
      number: "29% returning",
      explanation:
        "Nearly 1 in 3 registrants had attended before. The series is building a repeat audience, not one-off leads.",
    },
  ],

  /* 3. Programme Health Check ---------------------------------- */
  healthCheck: [
    {
      area: "Content Quality",
      status: "green",
      label: "Strong",
      note: "Best watch time and watch rate recorded to date.",
    },
    {
      area: "Audience Growth",
      status: "amber",
      label: "Stabilising",
      note: "Registrations fell again, but the decline is slowing.",
    },
    {
      area: "Attendance Rate",
      status: "red",
      label: "Biggest opportunity",
      note: "30.8% vs 38.1% in W3 — reminders and topic urgency need work.",
    },
    {
      area: "International Expansion",
      status: "green",
      label: "Positive",
      note: "UK validated; Singapore and Hong Kong show early intent.",
    },
    {
      area: "Audience Loyalty",
      status: "green",
      label: "Strong",
      note: "29% of registrants returned for another session.",
    },
    {
      area: "Tracking & Attribution",
      status: "amber",
      label: "Improve",
      note: "Source data doesn't fully reconcile — clean UTMs before W5.",
    },
  ],

  /* 4. W4 At A Glance ------------------------------------------ */
  kpis: [
    {
      label: "Registrants",
      value: "416",
      previous: "W3: 517",
      change: "−20%",
      direction: "down",
      tone: "negative",
    },
    {
      label: "Attendees",
      value: "128",
      previous: "W3: 197",
      change: "−35%",
      direction: "down",
      tone: "negative",
    },
    {
      label: "Attendance Rate",
      value: "30.8%",
      previous: "W3: 38.1%",
      change: "−7.3pp",
      direction: "down",
      tone: "negative",
    },
    {
      label: "Average Watch Time",
      value: "38.2 min",
      previous: "W3: 28.4 min",
      change: "+35%",
      direction: "up",
      tone: "positive",
    },
    {
      label: "Watch Rate",
      value: "69.5%",
      previous: "W3: 54.6%",
      change: "+14.9pp",
      direction: "up",
      tone: "positive",
    },
    {
      label: "Questions Asked",
      value: "17",
      previous: "W3: 27",
      change: "−37%",
      direction: "down",
      tone: "neutral",
      footnote: "Smaller room, not lower interest — questions per attendee held steady.",
    },
  ],
  kpiInsight:
    "The decline in attendance should not be read as reduced content relevance. The people who attended watched more of the webinar than any previous audience, which means the challenge sits at the top of the funnel.",

  /* 5. Audience Growth Story ----------------------------------- */
  growth: {
    weeks: ["W1", "W2", "W3", "W4"],
    newRegs: [1058, 609, 371, 297],
    returningRegs: [0, 169, 150, 119],
    totals: [1058, 778, 521, 416],
    insights: [
      {
        title: "Still acquiring",
        text: "Even at its lowest volume, W4 added 297 new contacts to the database.",
      },
      {
        title: "Decline is slowing",
        text: "Registrations fell 20% — a softer drop than the 33% decline from W2 to W3.",
      },
      {
        title: "Loyalty holding",
        text: "The repeat audience has settled at around 29% of every registration list.",
      },
    ],
  },

  /* 6. Where Registrations Came From --------------------------- */
  sources: {
    rows: [
      { name: "Meta Paid Ads", count: 215, share: 52 },
      { name: "Email CRM", count: 123, share: 30 },
      { name: "Instagram Organic", count: 35, share: 8 },
      { name: "WhatsApp / Referral", count: 21, share: 5 },
      { name: "Website Pop-Up", count: 12, share: 3 },
      { name: "Other / Unknown", count: 10, share: 2 },
    ],
    commentary: [
      {
        tone: "positive",
        title: "What worked",
        text: "Meta paid ads delivered over half of all registrations and was the right engine for testing new international audiences quickly.",
      },
      {
        tone: "negative",
        title: "What didn't scale enough",
        text: "Email held its ground as a retention channel, but organic, referral and the website together produced fewer than 70 registrations.",
      },
      {
        tone: "amber",
        title: "What changes for W5",
        text: "Lock UTM naming before launch so every registration has a clean source, and give WhatsApp sharing a deliberate push through agents.",
      },
    ],
  },

  /* 7. Paid Media Learning -------------------------------------- */
  paidMedia: {
    keyMessage:
      "W4 paid media should be read as a learning sprint, not a pure lead-generation campaign.",
    phases: [
      {
        step: "Test",
        title: "Narrow UK & Italy audiences",
        spend: "AED 1,601",
        outcome: "Insufficient scale",
        detail:
          "Audience definitions were too narrow to deliver volume or a confident read.",
      },
      {
        step: "Learning",
        title: "Broader international setup",
        spend: "AED 1,474",
        outcome: "Improved UK / SG / HK signal",
        detail:
          "Opening up the targeting surfaced real intent in the UK, Singapore and Hong Kong.",
      },
      {
        step: "Decision",
        title: "Total international learning spend",
        spend: "AED 3,075",
        outcome: "Spend against validated segments in W5",
        detail:
          "Keep the broader structure, separate UAE always-on from international tests, and define success metrics before launch.",
      },
    ],
  },

  /* 8. International Markets ------------------------------------ */
  markets: {
    note: "China cannot be judged through standard Meta or LinkedIn channels. A proper China test would require WeChat, Weibo or partner distribution.",
    groups: [
      {
        verdict: "Scale",
        status: "green",
        rows: [
          { market: "UK", regs: 13, attendees: 9, showUp: "69%" },
        ],
      },
      {
        verdict: "Monitor",
        status: "amber",
        rows: [
          { market: "Singapore", regs: 3, attendees: 2, showUp: "67%" },
          { market: "Hong Kong", regs: 2, attendees: 2, showUp: "100%" },
        ],
      },
      {
        verdict: "Pause",
        status: "red",
        rows: [
          { market: "Italy", regs: 3, attendees: 1, showUp: "33%" },
          { market: "China / Shanghai", regs: 0, attendees: 0, showUp: "—" },
        ],
      },
    ],
  },

  /* 9. Who Was In The Room -------------------------------------- */
  audience: {
    rows: [
      { segment: "Agents", count: 34, share: 26.6 },
      { segment: "Other", count: 21, share: 16.4 },
      { segment: "Investors", count: 19, share: 14.8 },
      { segment: "Landlords", count: 17, share: 13.3 },
      { segment: "Unclassified", count: 16, share: 12.5 },
      { segment: "Buyers", count: 12, share: 9.4 },
      { segment: "Sellers", count: 7, share: 5.5 },
      { segment: "Tenants", count: 2, share: 1.6 },
    ],
    interpretation:
      "Agents remain the largest segment. This is useful for referral reach, but W5 should push harder on investors, buyers and landlords if the objective is direct commercial acquisition.",
  },

  /* 10. Building an Audience ------------------------------------ */
  audienceAsset: {
    metrics: [
      { value: "2,335", label: "unique registrants", sub: "across W1–W4" },
      { value: "827", label: "unique attendees", sub: "the strongest pool for sales follow-up" },
      { value: "29%", label: "returning registrations", sub: "repeat audience in W4" },
    ],
    keyMessage:
      "The webinar programme is creating an owned audience asset that can support future webinars, market updates, WhatsApp nurture and sales outreach.",
  },

  /* 11. Biggest Opportunity For W5 ------------------------------ */
  opportunity: {
    headline:
      "The fastest growth lever is increasing attendance rate above 35%, not necessarily increasing media spend.",
    steps: [
      { label: "Actual W4 attendees", value: "128" },
      { label: "If W4 had matched W3's attendance rate", value: "158" },
      { label: "Additional attendees", value: "+30", tone: "positive" },
      { label: "Growth opportunity", value: "+23%", tone: "positive" },
    ],
  },

  /* 12. Key Decisions For W5 ------------------------------------ */
  decisions: [
    {
      title: "Scale UK targeting",
      text: "Give the UK its own ad set, creative hook and reminder timing aligned to UK working hours.",
      tag: "Media",
    },
    {
      title: "Continue Singapore & Hong Kong testing",
      text: "Keep both in the plan at controlled spend. Judge them on attendance quality, not volume.",
      tag: "Media",
    },
    {
      title: "Pause Italy",
      text: "Park the market until there is a better message and time-zone hypothesis.",
      tag: "Media",
    },
    {
      title: "Refresh the webinar topic",
      text: "Package W5 as a timely mid-year Dubai market check with a sharper investor and buyer promise.",
      tag: "Content",
    },
    {
      title: "Strengthen the reminder sequence",
      text: "Confirmation, 24-hour, 4-hour, 30-minute and live-now messages — across email and WhatsApp.",
      tag: "Lifecycle",
    },
    {
      title: "Improve source attribution",
      text: "Lock UTM naming and source mapping before launch so W5 decisions come from clean data.",
      tag: "Tracking",
    },
    {
      title: "Define post-webinar sales tracking",
      text: "Agree lead-quality rules before launch and log call outcomes within 48 hours of the session.",
      tag: "Sales",
    },
  ],

  /* 13. Final Thoughts ------------------------------------------ */
  finalThoughts: [
    "W4 delivered the strongest engagement metrics achieved by the webinar programme to date. The data suggests the content remains valuable and that attendees continue to find the sessions useful.",
    "The next stage of growth will not come from changing the webinar itself. It will come from improving audience acquisition, increasing attendance rates and building a stronger commercial follow-up process.",
    "With a refreshed topic, improved reminder cadence and focused investment in validated international markets such as the UK, the programme is well positioned to return to growth while maintaining the engagement levels achieved in W4.",
  ],
};
