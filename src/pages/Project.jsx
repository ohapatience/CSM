import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiArrowRight, HiOutlineDocumentText } from "react-icons/hi2";
import PageHeroSection from "../components/PageHeroSection";

// ── Your case studies (listed top to bottom on the page) ────────────────────
// thumbnail: picture of slide 1 saved in the public folder, e.g. "/akwete.png".
//            Leave "" to show a placeholder until the picture is ready.
// details:   each block has a label and either text or a list of items.
// slidesUrl: your Canva link. Leave "" to hide the slides button.
const CASE_STUDIES = [
  {
    id: "akwete-pay",
    title: "Recovering 312 quiet merchants in Onitsha's main market",
    company: "Akwete Pay · South-East Region",
    thumbnail: "/akwete.png",
    summary:
      "Diagnosing why 13% of a merchant cluster went quiet, then running a fix-and-recover plan that tackles service problems before discounts.",
    tags: ["Retention", "Root-Cause Diagnosis", "Escalation", "Recovery Plan"],
    metrics: [
      { value: "2,400", label: "Merchants in the cluster" },
      { value: "312", label: "Inactive for 30 days" },
      { value: "21%", label: "Monthly volume decline" },
      { value: "40", label: "Merchants interviewed" },
    ],
    details: [
      {
        label: "The problem",
        text: "Between November 2025 and January 2026, 312 merchants in the Onitsha Main Market cluster made no transaction for 30 days. Normal inactivity is about 96 a quarter, so the current level is 3.25 times normal. Nobody had closed an account or returned a terminal, so the drop was easy to miss. Monthly cluster volume fell from ₦6.2bn to ₦4.9bn, a 21% decline.",
      },
      {
        label: "What the records showed",
        items: [
          "Transaction failures rose from 2% in October 2025 to 7% in December 2025.",
          "Some reversal tickets had been open for more than five days, with no clear owner.",
          "Ifeoma Superstores' volume fell from ₦48m to ₦17m a month, yet its terminal was still active, with three pending reversals worth ₦410,000.",
          "Head office believed a rival was undercutting Akwete and wanted to cut fees across the cluster.",
        ],
      },
      {
        label: "What merchants said",
        text: "My team interviewed 40 of the 312 inactive merchants and asked each one why they had switched. The reasons were:",
        items: [
          "Late settlement: 18 merchants (45%)",
          "Slow reversals: 11 merchants (27.5%)",
          "A rival's lower fee or free terminal: 7 merchants (17.5%)",
          "Other reasons, such as a faulty terminal or closed shop: 4 merchants (10%)",
        ],
      },
      {
        label: "The insight",
        text: "Most merchants left over service failures, not price. Competition explained under a fifth of the interviews. So the first response had to fix settlement and reversal problems, and discounts should only be used with commercial approval, when the evidence supports them. I used this as the operating rule: match the action to the verified cause.",
      },
      {
        label: "The recovery plan I designed",
        items: [
          "Workstream A, operational fixes: confirm achievable settlement and reversal standards with Finance, Operations and bank partners. Investigate the rise in failed transactions by terminal, time, and transaction type. Clear tickets older than five days and set up escalation contacts.",
          "Workstream B, merchant recovery: work through 312 merchants one by one using a six-step playbook: validate the record, prioritise, contact, diagnose, resolve, and reactivate.",
          "Priority order: missing settlements and reversals first, then technical and commercial cases.",
          "Both workstreams run in parallel, because outreach alone will not hold if merchants return to the same unresolved problems.",
        ],
      },
      {
        label: "The priority case: Ifeoma Superstores",
        items: [
          "Acknowledge: contact the owner, apologise for the disruption, and name one accountable person.",
          "Investigate: trace all three pending transactions with Operations Settlement and bank partners.",
          "Assign: give the case an Operations lead, a priority level, and an escalation route, with a realistic update time.",
          "Communicate: give specific progress updates until the cases close.",
          "Confirm: test the terminal and record the first successful transaction.",
          "Retain: follow up on day 7 and day 30, comparing activity with the merchant's own baseline.",
        ],
      },
      {
        label: "The 90-day cadence",
        items: [
          "Days 1 to 7: record the contact outcome, the confirmed root cause, and the next action. Assign an owner to all 312 accounts.",
          "Days 8 to 30: set baseline metrics, target at least 80% contact, and investigate old tickets.",
          "Days 31 to 60: resolve priority complaints, confirm fixes, and test terminals.",
          "Days 61 to 90: create growth plans for recovered merchants, and keep monitoring failure rate and usage.",
          "Review rhythm: critical financial cases daily, the KPI dashboard and decisions weekly, and campaign blockers twice a week.",
        ],
      },
      {
        label: "How success is measured",
        items: [
          "Contact rate: merchants successfully contacted ÷ 312.",
          "Root-cause coverage: merchants with a confirmed reason ÷ merchants contacted.",
          "Case resolution: cases closed with a verified outcome ÷ cases opened.",
          "Reactivation: previously inactive merchants completing a new successful transaction.",
          "30-day retention: reactivated merchants still meeting the activity definition at day 30.",
          "Failure rate and volume recovered, compared with each merchant's own baseline.",
        ],
      },
      {
        label: "Planned targets",
        text: "Initial planning target: reactivate 25% of the cohort (78 merchants) within 30 days, and recover at least 80% of Ifeoma Superstores' October 2025 baseline of ₦48m (about ₦38.4m). These are planning targets, to be revised once data quality and team capacity are checked. Once a merchant is recovered, the next step is growth: restore reliability, rebuild usage, then grow responsibly.",
      },
      {
        label: "Why it matters",
        text: "A contact attempt is not a recovery. A first successful transaction is reactivation, and sustained activity is retention. The plan is judged by verified outcomes and continued merchant activity, not by how many calls the team makes.",
      },
    ],
    slidesUrl: "https://canva.link/pht208zypu8xusa",
  },
  {
    id: "sunrise-mfb",
    title: "Turning a silent onboarding drop-off into a trust-building journey",
    company: "Sunrise Digital MFB · Lagos",
    thumbnail: "/sunrise.png",
    summary:
      "A four-week review of Sunrise Pocket, the bank's digital onboarding app, covering the onboarding funnel, customer feedback, and one customer's full journey, ending in three recommendations for the Board.",
    tags: ["Onboarding", "Voice of the Customer", "Journey Mapping", "Trust"],
    metrics: [
      { value: "5", label: "Onboarding stages mapped" },
      { value: "4", label: "Feedback channels reviewed" },
      { value: "4", label: "Customer stories analysed" },
      { value: "6 hrs", label: "Transfer delay, no explanation" },
    ],
    details: [
      {
        label: "The situation",
        text: "Sunrise Digital MFB, a Lagos microfinance bank serving market traders and small business owners, wanted to reach younger digital customers and cut banking hall queues. It had pushed account opening through its app, Sunrise Pocket. Customers were signing up, but many never funded their accounts. Our group stepped into the role of Head of Customer Experience for four weeks, with a brief to review the whole customer experience and present findings to the Board.",
      },
      {
        label: "Part A: Where onboarding fails",
        items: [
          "Stage 1, app download: customers installed the app and stopped. The root cause was too little proactive guidance after download. Fix: welcome messages, step-by-step instructions, and reminders for customers who stall.",
          "Stage 2, BVN and NIN verification: the biggest friction point. Stricter KYC rules, a hard-to-follow process, no on-screen guidance, and no auto-save meant customers had to re-enter details after an interruption. Fix: a progress indicator (for example, Step 2 of 5), plainer language, and auto-save, while keeping the regulatory checks.",
          "Stage 3, selfie and liveness check: strict liveness rules, technical glitches, and timeouts, made harder by poor lighting and language barriers. Fix: guidance in Yoruba, Hausa, and Igbo, environment tips such as \"move to a brighter location,\" and clearer on-screen prompts.",
          "Stage 4, account tiers and terms: jargon and long blocks of text confused customers. Fix: plain names and a short explanation of what each tier allows, for example \"Basic Account: suitable for everyday banking.\"",
          "Stage 5, first deposit: the minimum deposit was hard for some customers, and there was little confirmation or reason to use the app afterwards. Fix: an instant deposit receipt, a welcome message, and a short list of what to do next.",
        ],
      },
      {
        label: "Part B: Listening to customers",
        text: "Feedback reached the bank through four channels: customer care calls, app store reviews, social media comments, and informal notes from branch staff. Most of it was unsolicited and unstructured, so nobody owned the full picture. The risk is that patterns stay hidden, leadership only sees the loudest complaints, and the same problems keep returning.",
      },
      {
        label: "Part C: The moments that decide whether customers stay",
        items: [
          "Verification and liveness, where hope turns to frustration. Our recommendation: step-by-step on-screen guidance with progress shown, so the customer always knows where they are.",
          "The silent six-hour transfer delay. Mr Emeka Obi was left anxious with no explanation, then got no real help from customer care. Our recommendation: proactive status updates during any delay, so uncertainty is explained rather than left to grow.",
        ],
      },
      {
        label: "Part D: One root cause, not three problems",
        text: "The onboarding drop-offs, the scattered feedback, and Mr Obi's journey all share one underlying cause: the bank does not communicate proactively during moments of uncertainty. Customers were left guessing at verification, at tier choice, and during a delayed transfer. Silence, not a single broken step, was what turned hope into distrust.",
      },
      {
        label: "Our top three recommendations to the Board",
        items: [
          "1. Proactive status updates during every delay or pending step. Ranked first because it addresses the root cause shared by all three problems.",
          "2. A friendlier verification flow with progress indicators, plain language, and auto-save. Ranked second because verification is the largest drop-off point in the funnel.",
          "3. One consolidated feedback process across the four channels, reviewed by leadership every week. Ranked third because it protects the first two fixes by showing whether they work.",
        ],
      },
      {
        label: "How we would measure success",
        items: [
          "Funding rate: the share of customers who fund their account after accepting terms.",
          "Verification completion rate: the share of customers who finish BVN or NIN verification in a single session.",
          "Complaints about silent delays, tracked monthly across the four feedback channels.",
          "These are proposed measures. Baselines should be set from the bank's own data before targets are agreed.",
        ],
      },
    ],
    slidesUrl: "https://canva.link/uahqdxockm9yq9l",
  },
  {
    id: "okonkwo-bukkibooks",
    title: "Catching silent drop-offs before customers complain",
    company: "Okonkwo FinTech Solutions · BukkiBooks",
    thumbnail: "/okonkwo.png",
    summary:
      "A team project designing a proactive Customer Success early-warning system for BukkiBooks, a cloud accounting platform serving Nigerian SMEs, so that the team finds silent problems before customers complain.",
    tags: ["Health Scoring", "Priority Accounts", "CSM Triggers", "Early Warning"],
    metrics: [
      { value: "103", label: "Accounts health-scored" },
      { value: "21", label: "Flagged at-risk" },
      { value: "5 wks", label: "Silent drop caught" },
      { value: "1", label: "Renewed and upgraded" },
    ],
    details: [
      {
        label: "The situation",
        text: "BukkiBooks is a cloud accounting and invoicing platform for Nigerian SMEs, run by Okonkwo FinTech Solutions. A fashion retailer with three stores and an online shop had used it for eight months. Our Customer Success Executive reviewed usage dashboards weekly and noticed the retailer had stopped using Inventory Reconciliation for five weeks. The account still looked active, so nothing had been flagged.",
      },
      {
        label: "The problem",
        text: "The business had not stopped using BukkiBooks. An important feature had gone silent because a new store manager had never been trained, so staff went back to error-prone spreadsheets. The real question is not whether a customer is using the product, but whether they are getting value from it. Checking every account by hand each week would not scale as the customer base grew.",
      },
      {
        label: "What we did on the account",
        items: [
          "Booked a check-in call and found the root cause: an untrained new store manager, not a product fault.",
          "Retrained the team, shared a user guide, set a follow-up, and introduced the bulk-upload tool the CEO did not know existed.",
          "A separate support agent fixed an invoicing bug within a day, a different kind of help handled by Support.",
        ],
      },
      {
        label: "What the research showed",
        text: "We studied how Moniepoint, Paystack, and Bumpa use customer data to find accounts that need attention. Moniepoint's customer-facing teams use login frequency, transaction volume, feature adoption, support ticket trends, and engagement signals. Paystack gives merchants visibility of new and returning customers, failed and abandoned transactions, and customer history. Bumpa groups customers by behaviour and spending, so each group can get different follow-up. Our takeaway: a change in usage is a signal to investigate, not proof that a customer is at risk.",
      },
      {
        label: "What we proposed",
        items: [
          "Health score: a score for each account, based on activity, feature usage, transaction activity, usage trends, and support signals.",
          "Priority tiers: High (serious or multiple warning signals), Medium (concerning changes that need investigation), and Low (healthy usage).",
          "CSM triggers: for example, when an important feature such as Inventory Reconciliation has not been used for 35 days, the system creates a task for the CSM and sends a Slack notification.",
          "Segmentation: grouping accounts so that different types of customer receive different training, communication, or follow-up.",
        ],
      },
      {
        label: "How the system would work",
        text: "Usage data from Mixpanel flows through Zapier into HubSpot, where company records, support history, and billing come together. HubSpot's workflows then score the account, segment and prioritise it, create a task for the Customer Success team, and notify them on Slack. The system finds where attention is needed. The Customer Success team then investigates why, and decides what to do.",
      },
      {
        label: "How Customer Success and Support work together",
        items: [
          "Customer Success is proactive. It identifies abandoned features, books check-in calls, diagnoses root causes, and builds long-term relationships.",
          "Support is reactive. It fixes specific issues as they are reported and resolves tickets within agreed timelines.",
          "Shared working: when Support sees repeated problems with a feature, it resolves the immediate issue and informs Customer Success, which checks whether the problem is affecting adoption. Recurring product faults go to the product or technical team.",
        ],
      },
      {
        label: "Risks, and how we would address them",
        items: [
          "False positives: low usage can be normal for a low-volume business, seasonal, or caused by a feature no longer being relevant. The alert triggers an investigation, not an automatic conclusion.",
          "Human in the loop: the system detects and prioritises, the CSM investigates, the root cause is identified, and only then is action taken.",
          "Unverified thresholds: the warning levels (for example, 35 days) are starting points. Okonkwo should test them against 6 to 12 months of its own historical data and monitor missed and false alerts.",
        ],
      },
      {
        label: "How we would measure success",
        items: [
          "Feature adoption rate: customers using an important feature ÷ customers expected to use it × 100.",
          "Usage recovery rate: customers whose usage improved after intervention ÷ customers who received intervention × 100.",
          "Time to intervention: how quickly the team acts after an account is flagged.",
          "Renewal rate: customers renewed ÷ customers due for renewal × 100.",
          "Activity metrics, such as flagged customers contacted, show what the team did. Outcome metrics, such as usage recovery, show whether it worked.",
        ],
      },
      {
        label: "The result",
        text: "The retailer continued using BukkiBooks, and at year end renewed and upgraded. The owner said he stayed because someone was paying attention to how his business used the product.",
      },
    ],
    slidesUrl: "https://canva.link/hjtd1p0h5t35ntl",
  },
];

// ── Thumbnail (slide 1 picture, or a placeholder) ────────────────────────────
function Thumbnail({ study }) {
  return (
    <div
      className="relative aspect-video overflow-hidden"
      style={{ borderBottom: "1px solid rgba(42,96,87,0.4)" }}
    >
      {study.thumbnail ? (
        <img
          src={study.thumbnail}
          alt={study.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      ) : (
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            background: "linear-gradient(145deg, #1C3F39 0%, #0D2622 100%)",
          }}
        >
          <span
            className="text-6xl font-black"
            style={{
              fontFamily: "var(--font-heading)",
              color: "rgba(201,243,29,0.45)",
            }}
          >
            {study.company.charAt(0)}
          </span>
        </div>
      )}

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, rgba(10,30,27,0.7), transparent 55%)",
        }}
      />

      {study.slidesUrl && (
        <a
          href={study.slidesUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open slides for ${study.title}`}
          className="absolute inset-0 z-10"
        />
      )}
    </div>
  );
}

// ── Detail block: text or a list of items ────────────────────────────────────
function DetailBlock({ label, text, items }) {
  return (
    <div>
      <p
        className="text-xs font-bold tracking-[0.2em] uppercase mb-2"
        style={{ color: "#C9F31D", fontFamily: "var(--font-heading)" }}
      >
        {label}
      </p>
      {text && (
        <p className="text-sm leading-relaxed mb-2" style={{ color: "#7FB3AE" }}>
          {text}
        </p>
      )}
      {items && (
        <ul className="flex flex-col gap-2">
          {items.map((item) => (
            <li
              key={item}
              className="flex gap-3 text-sm leading-relaxed"
              style={{ color: "#7FB3AE" }}
            >
              <span
                className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0"
                style={{ background: "#C9F31D" }}
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

// ── Case study card ──────────────────────────────────────────────────────────
function CaseCard({ study, isOpen, onToggle, index }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4 }}
      className="group rounded-3xl overflow-hidden"
      style={{
        background: "rgba(20,50,45,0.55)",
        border: isOpen
          ? "1px solid rgba(201,243,29,0.4)"
          : "1px solid rgba(42,96,87,0.4)",
        boxShadow: "0 4px 32px rgba(0,0,0,0.18)",
      }}
    >
      <Thumbnail study={study} />

      <div className="p-7 md:p-9">
        <p
          className="text-xs font-bold tracking-[0.2em] uppercase mb-3"
          style={{ color: "#7FB3AE", fontFamily: "var(--font-heading)" }}
        >
          {study.company}
        </p>

        <div className="flex flex-wrap gap-2 mb-5">
          {study.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-lg text-xs font-semibold"
              style={{
                background: "rgba(201,243,29,0.08)",
                border: "1px solid rgba(201,243,29,0.25)",
                color: "#C9F31D",
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        <h3
          className="font-black leading-tight mb-3"
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(1.3rem, 2.5vw, 1.8rem)",
            color: "var(--white)",
            letterSpacing: "-0.02em",
          }}
        >
          {study.title}
        </h3>

        <p className="text-sm leading-relaxed mb-7" style={{ color: "#7FB3AE" }}>
          {study.summary}
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-7">
          {study.metrics.map((m) => (
            <div
              key={m.label}
              className="rounded-2xl p-4"
              style={{
                background: "rgba(13,38,34,0.6)",
                border: "1px solid rgba(42,96,87,0.4)",
              }}
            >
              <p
                className="text-2xl md:text-3xl font-black leading-none mb-2"
                style={{ fontFamily: "var(--font-heading)", color: "#C9F31D" }}
              >
                {m.value}
              </p>
              <p
                className="text-[11px] uppercase tracking-widest"
                style={{ color: "#4A7A73" }}
              >
                {m.label}
              </p>
            </div>
          ))}
        </div>

        <button
          onClick={onToggle}
          className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase"
          style={{ color: "#C9F31D", fontFamily: "var(--font-heading)" }}
        >
          {isOpen ? "Hide case study" : "View case study"}
          <motion.span
            animate={{ rotate: isOpen ? 90 : 0 }}
            transition={{ duration: 0.3 }}
            className="inline-flex"
          >
            <HiArrowRight size={14} />
          </motion.span>
        </button>

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              key="details"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <div
                className="grid gap-7 pt-8 mt-8"
                style={{ borderTop: "1px solid rgba(42,96,87,0.3)" }}
              >
                {study.details.map((block) => (
                  <DetailBlock
                    key={block.label}
                    label={block.label}
                    text={block.text}
                    items={block.items}
                  />
                ))}

                {study.slidesUrl && (
                  <a
                    href={study.slidesUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 w-fit px-5 py-3 rounded-xl text-xs font-bold tracking-widest uppercase"
                    style={{
                      border: "1px solid #C9F31D",
                      color: "#C9F31D",
                      fontFamily: "var(--font-heading)",
                    }}
                  >
                    <HiOutlineDocumentText size={16} />
                    View full slides
                  </a>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

// ── Page ─────────────────────────────────────────────────────────────────────
const CaseStudies = () => {
  const [openId, setOpenId] = useState(null);

  return (
    <>
      <PageHeroSection
        label="Case Studies"
        title="Real results from customer success work."
        titleHighlight="results."
        subtitle="How I onboard, engage, and retain customers, and the outcomes that followed."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Case Studies" }]}
        pattern="dots"
        align="left"
        badge="Open to work"
      />

      <section
        className="relative overflow-hidden section"
        style={{ background: "#0D2622" }}
      >
        <div className="wrapper relative z-10">
          <div className="grid grid-cols-1 gap-6">
            {CASE_STUDIES.map((study, i) => (
              <CaseCard
                key={study.id}
                study={study}
                index={i}
                isOpen={openId === study.id}
                onToggle={() => setOpenId(openId === study.id ? null : study.id)}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CaseStudies;