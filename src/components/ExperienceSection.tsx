import { Timeline } from "./ui/timeline";

const ExperienceSection = () => {
  const data = [
    {
      title: "Nov 2025 - Jan 2026",
      content: (
        <div className="space-y-4">
          <div className="flex flex-col gap-2">
            <h4 className="text-2xl font-bold text-black">Intern - Business Ops</h4>
            <span className="text-black/60 font-medium">PW (Physics Wallah)</span>
          </div>
          <div className="space-y-2">
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-sm text-neutral-600">
                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-black shrink-0" />
                Supported end-to-end operations for launching courses with creators at PW Skills.
              </li>
              <li className="flex items-start gap-2 text-sm text-neutral-600">
                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-black shrink-0" />
                Used N8N to automate workflow and repetitive tasks.
              </li>
              <li className="flex items-start gap-2 text-sm text-neutral-600">
                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-black shrink-0" />
                Analyzed performance data from 10,000+ learners for operational improvements.
              </li>
              <li className="flex items-start gap-2 text-sm text-neutral-600">
                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-black shrink-0" />
                Coordinated cross-functional teams to track timelines and ensure on-time course delivery.
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: "Jul - Oct 2025",
      content: (
        <div className="space-y-4">
          <div className="flex flex-col gap-2">
            <h4 className="text-2xl font-bold text-black">Intern - Strategy & Growth</h4>
            <span className="text-black/60 font-medium">PW (Physics Wallah)</span>
          </div>
          <div className="space-y-2">
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-sm text-neutral-600">
                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-black shrink-0" />
                Conducted targeted outreach for partnership with a 100% completion rate on assigned contact pipelines.
              </li>
              <li className="flex items-start gap-2 text-sm text-neutral-600">
                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-black shrink-0" />
                Performed market research and partnership scouting that identified 5+ national & 1 international government partnership opportunity.
              </li>
              <li className="flex items-start gap-2 text-sm text-neutral-600">
                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-black shrink-0" />
                Drafted 2 Memoranda of Understanding (MoUs) to establish formal collaboration opportunities.
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: "Jul - Aug 2025",
      content: (
        <div className="space-y-4">
          <div className="flex flex-col gap-2">
            <h4 className="text-2xl font-bold text-black">Team Lead - Ad Wars: boAt Campaign</h4>
            <span className="text-black/60 font-medium">Sem Theme Challenge | YouTube & Instagram</span>
          </div>
          <div className="space-y-2">
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-sm text-neutral-600">
                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-black shrink-0" />
                Led end-to-end production of an Ad Campaign for boAt Lifestyle (India's no 1 Audio Earwear Brand).
              </li>
              <li className="flex items-start gap-2 text-sm text-neutral-600">
                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-black shrink-0" />
                Managed a cross-functional 4-person team (creative, production, social).
              </li>
              <li className="flex items-start gap-2 text-sm text-neutral-600">
                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-black shrink-0" />
                Campaign achieved ~9K views within 36 hours and recorded the 2nd-highest engagement in likes across 8 competing entries.
              </li>
              <li className="flex items-start gap-2 text-sm text-neutral-600">
                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-black shrink-0" />
                Received appraisal from the CEO of The Career Trek Co. and the Co-founder of Bright So for brand alignment and production quality.
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: "Mar 2025",
      content: (
        <div className="space-y-4">
          <div className="flex flex-col gap-2">
            <h4 className="text-2xl font-bold text-black">Project Lead - The Quirky Store</h4>
            <span className="text-black/60 font-medium">End Sem Challenge</span>
          </div>
          <div className="space-y-2">
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-sm text-neutral-600">
                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-black shrink-0" />
                Launched a cash-positive pop-up store. Oversaw product sourcing, finance management, and operations execution.
              </li>
              <li className="flex items-start gap-2 text-sm text-neutral-600">
                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-black shrink-0" />
                Secured the 3rd-highest pitch funding, generated ₹23,000 in 15 hours.
              </li>
              <li className="flex items-start gap-2 text-sm text-neutral-600">
                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-black shrink-0" />
                Ranked #2 in revenue & profitability amongst 9 competing teams.
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: "Jan - Mar 2025",
      content: (
        <div className="space-y-4">
          <div className="flex flex-col gap-2">
            <h4 className="text-2xl font-bold text-black">Team Lead - spign.shop</h4>
            <span className="text-black/60 font-medium">D2C cushions brand | Bootcamp Challenge</span>
          </div>
          <div className="space-y-2">
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-sm text-neutral-600">
                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-black shrink-0" />
                Built and scaled a data-driven DTC brand for lumbar support cushions.
              </li>
              <li className="flex items-start gap-2 text-sm text-neutral-600">
                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-black shrink-0" />
                Led product validation and growth experiments.
              </li>
              <li className="flex items-start gap-2 text-sm text-neutral-600">
                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-black shrink-0" />
                Drove paid acquisition across Google and Meta Ads; optimized CAC by ~23% and conversion funnels to improve ROAS.
              </li>
              <li className="flex items-start gap-2 text-sm text-neutral-600">
                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-black shrink-0" />
                Managed end-to-end operations with a 5-person team (product, ops, marketing, fulfillment).
              </li>
            </ul>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section className="w-full bg-transparent relative">
      <Timeline data={data} />
    </section>
  );
};

export default ExperienceSection;
