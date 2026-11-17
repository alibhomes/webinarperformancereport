/* ============================================================
   betterhomes — Webinar Programme Review
   All report content lives here. Edit this file to update the
   report — no HTML changes needed.

   Data sources (17 Nov 2026): Zoom registration, attendee and
   Q&A reports for webinars W1–W6; Meta Ads via Supermetrics.
   W6 figures exclude 8 internal test registrations. Attendee
   counts exclude the host account and note-taker bots.
   ============================================================ */

const REPORT = {
  meta: {
    confidential: "CONFIDENTIAL — Internal only",
    title: "Dubai Property Market Webinar Programme Review",
    subtitle:
      "Understanding what drove growth, engagement and attendance — and what should change for W7.",
    edition: "W6 Results & W7 Recommendations",
    date: "November 2026",
  },

  /* 2. What We Learned This Month ------------------------------ */
  learnings: [
    {
      tone: "positive",
      headline: "Attendance rate hit a record",
      number: "42.2%",
      explanation:
        "Up from 34.6% in July and 30.8% in June. The reminder and topic fixes worked — people who registered actually came.",
    },
    {
      tone: "positive",
      headline: "The audience keeps coming back",
      number: "47% returning",
      explanation:
        "130 of 275 registrants had attended a previous session — by far the highest repeat rate the programme has seen.",
    },
    {
      tone: "positive",
      headline: "Pinterest became our top channel",
      number: "111 registrations",
      explanation:
        "A channel that barely featured before delivered 4 in 10 registrations — more than Meta, email and WhatsApp combined.",
    },
    {
      tone: "negative",
      headline: "New audience is shrinking",
      number: "145 new",
      explanation:
        "The fewest new contacts of any webinar. After a three-month pause, the top of the funnel needs reinvestment.",
    },
  ],

  /* 3. Programme Health Check ---------------------------------- */
  healthCheck: [
    {
      area: "Content Quality",
      status: "green",
      label: "Strong",
      note: "35-minute average watch time and 21 live questions — engagement held at record levels.",
    },
    {
      area: "Audience Growth",
      status: "red",
      label: "Biggest opportunity",
      note: "Only 145 new contacts, the lowest yet. The August–October pause cost momentum.",
    },
    {
      area: "Attendance Rate",
      status: "green",
      label: "Record high",
      note: "42.2% of registrants attended — the best show-up rate in programme history.",
    },
    {
      area: "International Expansion",
      status: "amber",
      label: "Mixed",
      note: "UK show-up slipped to 50% and paid UK ads were expensive this round. Keep warm, retest with a sharper hook.",
    },
    {
      area: "Audience Loyalty",
      status: "green",
      label: "Exceptional",
      note: "47% of registrants and over half of the room had attended before.",
    },
    {
      area: "Tracking & Attribution",
      status: "green",
      label: "Strong",
      note: "Every registration carried a source — Zoom, Meta and registration data reconcile.",
    },
  ],

  /* 4. W6 At A Glance ------------------------------------------ */
  kpis: [
    {
      label: "Registrants",
      value: "275",
      previous: "W5: 382",
      change: "−28%",
      direction: "down",
      tone: "negative",
    },
    {
      label: "Attendees",
      value: "116",
      previous: "W5: 132",
      change: "−12%",
      direction: "down",
      tone: "neutral",
      footnote: "Attendance fell far less than registrations — the funnel converted better.",
    },
    {
      label: "Attendance Rate",
      value: "42.2%",
      previous: "W5: 34.6%",
      change: "+7.6pp",
      direction: "up",
      tone: "positive",
    },
    {
      label: "Average Watch Time",
      value: "35.0 min",
      previous: "W5: 34.8 min",
      change: "+0.2 min",
      direction: "up",
      tone: "positive",
    },
    {
      label: "Watch Rate",
      value: "62.4%",
      previous: "W5: 59.0%",
      change: "+3.4pp",
      direction: "up",
      tone: "positive",
    },
    {
      label: "Questions Asked",
      value: "21",
      previous: "W4: 17",
      change: "+4",
      direction: "up",
      tone: "positive",
      footnote: "Compared with June — W5's Q&A log wasn't exported. Planned host prompts worked.",
    },
  ],
  kpiInsight:
    "The problem from June is half solved. A record 42% of registrants showed up and nearly half the room had been before — reminders, topic and loyalty are all working. What remains is volume: W6 added the fewest new contacts of any webinar, so W7 is about refilling the top of the funnel.",

  /* 5. Audience Growth Story ----------------------------------- */
  growth: {
    weeks: ["W1 · Apr", "W2 · Apr", "W3 · May", "W4 · Jun", "W5 · Jul", "W6 · Nov"],
    newRegs: [1058, 609, 371, 297, 287, 145],
    returningRegs: [0, 169, 150, 119, 95, 130],
    totals: [1058, 778, 521, 416, 382, 275],
    insights: [
      {
        title: "Loyalty at a record",
        text: "130 returning registrants — the highest ever, and the first time returns grew while totals fell.",
      },
      {
        title: "New acquisition fell",
        text: "Only 145 new contacts joined the list, half of July's number. This is the metric to fix in W7.",
      },
      {
        title: "Cadence matters",
        text: "No webinars ran from August to October. The three-month gap cost top-of-funnel momentum.",
      },
    ],
  },

  /* 6. Where Registrations Came From --------------------------- */
  sources: {
    rows: [
      { name: "Pinterest", count: 111, share: 40 },
      { name: "Email CRM", count: 49, share: 18 },
      { name: "Meta Paid Ads", count: 31, share: 11 },
      { name: "WhatsApp / Referral", count: 28, share: 10 },
      { name: "Agent Sharing", count: 19, share: 7 },
      { name: "Instagram Organic", count: 12, share: 4 },
      { name: "ChatGPT Ads", count: 9, share: 3 },
      { name: "Website Pop-Up", count: 8, share: 3 },
      { name: "PR / Media", count: 3, share: 1 },
      { name: "Other", count: 5, share: 2 },
    ],
    commentary: [
      {
        tone: "positive",
        title: "What worked",
        text: "Pinterest delivered 111 registrations and became the number one channel overnight. Email remained the engine behind the returning audience.",
      },
      {
        tone: "negative",
        title: "What didn't scale",
        text: "Meta paid ads delivered 31 registrations — 11% of the total, down from over half in June — and UK prospecting ads converted poorly.",
      },
      {
        tone: "amber",
        title: "What changes for W7",
        text: "Treat Pinterest as a core channel with proper budget and content, rebuild Meta prospecting creative, and formalise the agent-sharing programme that brought 19 registrations.",
      },
    ],
  },

  /* 7. Paid Media Learning -------------------------------------- */
  paidMedia: {
    keyMessage:
      "Meta played a supporting role this time. Retargeting earned its budget; cold UK prospecting did not.",
    phases: [
      {
        step: "Test",
        title: "UK prospecting re-test",
        spend: "AED 829",
        outcome: "3 registrations · AED 276 each",
        detail:
          "W4 validated UK intent, but this round showed cold UK ads need a sharper, UK-specific hook to pay back.",
      },
      {
        step: "Learning",
        title: "Worldwide lookalikes + retargeting",
        spend: "AED 2,717",
        outcome: "32 registrations · AED 85 blended",
        detail:
          "Retargeting warm audiences was the most efficient spend at AED 73 per registration; lookalikes held at AED 90.",
      },
      {
        step: "Decision",
        title: "Total Meta investment",
        spend: "AED 3,546",
        outcome: "Shift W7 budget to retargeting + Pinterest",
        detail:
          "Meta delivered 11% of registrations. Keep retargeting always-on, rebuild prospecting creative, and fund the channels that over-delivered.",
      },
    ],
  },

  /* 8. International Markets ------------------------------------ */
  markets: {
    note: "W6 ads targeted worldwide lookalikes plus the UK. A proper Singapore, Hong Kong or China push would need dedicated campaigns — and China specifically needs WeChat, Weibo or partner distribution.",
    groups: [
      {
        verdict: "Monitor",
        status: "amber",
        rows: [
          { market: "UK", regs: 12, attendees: 6, showUp: "50%" },
        ],
      },
      {
        verdict: "On hold",
        status: "amber",
        rows: [
          { market: "Singapore / Hong Kong", regs: 0, attendees: 0, showUp: "—" },
        ],
      },
      {
        verdict: "Paused",
        status: "red",
        rows: [
          { market: "Italy / China", regs: 0, attendees: 0, showUp: "—" },
        ],
      },
    ],
  },

  /* 9. Who Was In The Room -------------------------------------- */
  audience: {
    rows: [
      { segment: "Agents", count: 52, share: 44.8 },
      { segment: "Investors", count: 28, share: 24.1 },
      { segment: "Landlords", count: 14, share: 12.1 },
      { segment: "Buyers", count: 8, share: 6.9 },
      { segment: "Tenants", count: 8, share: 6.9 },
      { segment: "Sellers", count: 6, share: 5.2 },
    ],
    interpretation:
      "Investors grew to a quarter of the room, up from 15% in June — the Future Living topic pulled the right people. Agents remain the largest group; W7 should decide deliberately whether to lean into agent referrals or re-weight targeting toward end clients.",
  },

  /* 10. Building an Audience ------------------------------------ */
  audienceAsset: {
    metrics: [
      { value: "2,767", label: "unique registrants", sub: "across W1–W6" },
      { value: "47%", label: "returning registrations", sub: "a programme record in W6" },
      { value: "61", label: "repeat attendees in the room", sub: "the hottest list for sales follow-up" },
    ],
    keyMessage:
      "The webinar programme is creating an owned audience asset that can support future webinars, market updates, WhatsApp nurture and sales outreach.",
  },

  /* 11. Biggest Opportunity For W7 ------------------------------ */
  opportunity: {
    headline:
      "Attendance is no longer the bottleneck. At today's 42% show-up rate, every 100 new registrants produce 42 attendees — the fastest lever for W7 is new-audience acquisition.",
    steps: [
      { label: "Actual W6 attendees", value: "116" },
      { label: "If W7 restores July's new-contact volume", value: "~176" },
      { label: "Additional attendees", value: "+60", tone: "positive" },
      { label: "Growth opportunity", value: "+52%", tone: "positive" },
    ],
  },

  /* 12. Key Decisions For W7 ------------------------------------ */
  decisions: [
    {
      title: "Restore the monthly cadence",
      text: "The August–October gap preceded the steepest drop in new contacts. Lock W7 in for December and hold the rhythm.",
      tag: "Programme",
    },
    {
      title: "Double down on Pinterest",
      text: "It became the top channel overnight. Give it dedicated budget, fresh pins per webinar and proper tracking.",
      tag: "Media",
    },
    {
      title: "Rebuild Meta prospecting",
      text: "Keep retargeting always-on (AED 73 per registration) and relaunch prospecting with new creative and broader audiences.",
      tag: "Media",
    },
    {
      title: "Formalise agent sharing",
      text: "Agents brought 19 registrations informally. Give them share kits and tracked links, and recognise the top sharers.",
      tag: "Referral",
    },
    {
      title: "Work the 61 repeat attendees",
      text: "They have shown up twice or more. Route them to sales for personal follow-up within 48 hours of each session.",
      tag: "Sales",
    },
    {
      title: "Rethink UK paid",
      text: "Pause cold UK ads until there is a UK-specific hook. Serve the UK audience through email and retargeting meanwhile.",
      tag: "Media",
    },
    {
      title: "Keep the planned Q&A prompts",
      text: "21 questions, up from 17 in June — the scripted host prompts recommended after W4 are working.",
      tag: "Content",
    },
  ],

  /* 13. Final Thoughts ------------------------------------------ */
  finalThoughts: [
    "W6 delivered the strongest attendance rate in the programme's history and its most loyal audience to date. Nearly half of the registrants had been before, watch time held at the record levels set in June, and the session drew 21 live questions from a room where investors made up a quarter of attendees.",
    "The challenge has moved. Content, reminders and loyalty are working; acquisition is not. The three-month summer pause and a lighter paid push left W6 with the fewest new contacts of any webinar — and that, not the webinar itself, is what W7 needs to fix.",
    "With a monthly rhythm restored, Pinterest treated as a core channel, Meta rebuilt around what converts, and deliberate sales follow-up on the repeat attendees, the programme is well positioned to grow its audience again without losing the engagement it has earned.",
  ],
};
