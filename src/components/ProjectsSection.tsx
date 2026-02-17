import { Timeline } from "./ui/timeline";

const ProjectsSection = () => {
  const data = [
    {
      title: "Jul - Aug 2025",
      content: (
        <div className="space-y-4">
          <div className="flex flex-col gap-2">
            <h4 className="text-2xl font-bold text-black">Team Lead - Ad Wars: boAt Campaign</h4>
            <span className="text-black/60 font-medium text-lg">Sem Theme Challenge | YT, IG</span>
          </div>
          <div className="space-y-4">
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm md:text-base text-neutral-700">
                <div className="mt-2 w-1.5 h-1.5 rounded-full bg-black shrink-0" />
                Led end-to-end production of an Ad Campaign for boAt Lifestyle (India's no 1 Audio Earwear Brand).
              </li>
              <li className="flex items-start gap-2 text-sm md:text-base text-neutral-700">
                <div className="mt-2 w-1.5 h-1.5 rounded-full bg-black shrink-0" />
                Cross functional 4 person team (creative, production, social) managed.
              </li>
              <li className="flex items-start gap-2 text-sm md:text-base text-neutral-700">
                <div className="mt-2 w-1.5 h-1.5 rounded-full bg-black shrink-0" />
                Campaign achieved ~9K views within 36 hours and recorded the 2nd-highest engagement in likes across 8 competing entries.
              </li>
              <li className="flex items-start gap-2 text-sm md:text-base text-neutral-700">
                <div className="mt-2 w-1.5 h-1.5 rounded-full bg-black shrink-0" />
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
            <span className="text-black/60 font-medium text-lg">End Sem Challenge</span>
          </div>
          <div className="space-y-4">
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm md:text-base text-neutral-700">
                <div className="mt-2 w-1.5 h-1.5 rounded-full bg-black shrink-0" />
                ₹23,000 revenue generated in 15 hours – built and operated a cash positive pop up store from scratch.
              </li>
              <li className="flex items-start gap-2 text-sm md:text-base text-neutral-700">
                <div className="mt-2 w-1.5 h-1.5 rounded-full bg-black shrink-0" />
                #2 in revenue & profitability out of 9 teams – optimized product mix and upsell strategy to maximize margins during the event.
              </li>
              <li className="flex items-start gap-2 text-sm md:text-base text-neutral-700">
                <div className="mt-2 w-1.5 h-1.5 rounded-full bg-black shrink-0" />
                3rd highest pitch funding secured – delivered investor pitch that got us initial capital for launch.
              </li>
              <li className="flex items-start gap-2 text-sm md:text-base text-neutral-700">
                <div className="mt-2 w-1.5 h-1.5 rounded-full bg-black shrink-0" />
                End to end execution led – sourced products, set up storefront and drove real time sales operations to hit same day revenue targets.
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
            <span className="text-black/60 font-medium text-lg">Bootcamp Challenge | D2C cushions brand</span>
          </div>
          <div className="space-y-4">
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm md:text-base text-neutral-700">
                <div className="mt-2 w-1.5 h-1.5 rounded-full bg-black shrink-0" />
                Built and scaled a data-driven DTC brand for lumbar support cushions.
              </li>
              <li className="flex items-start gap-2 text-sm md:text-base text-neutral-700">
                <div className="mt-2 w-1.5 h-1.5 rounded-full bg-black shrink-0" />
                Drove paid acquisition across Google and Meta Ads; optimized CAC by ~23% and conversion funnels to improve ROAS.
              </li>
              <li className="flex items-start gap-2 text-sm md:text-base text-neutral-700">
                <div className="mt-2 w-1.5 h-1.5 rounded-full bg-black shrink-0" />
                Managed end-to-end operations with a 5-person team (product, ops, marketing, fulfillment).
              </li>
              <li className="flex items-start gap-2 text-sm md:text-base text-neutral-700">
                <div className="mt-2 w-1.5 h-1.5 rounded-full bg-black shrink-0" />
                Led product validation and growth experiments.
              </li>
            </ul>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section className="w-full bg-transparent relative">
      <div className="max-w-7xl mx-auto py-10 px-4 md:px-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-2 text-black">
          Projects
        </h2>
        <p className="text-muted-foreground text-lg mb-4">
          Something that defines my spirit
        </p>
      </div>
      <Timeline data={data} />
    </section>
  );
};

export default ProjectsSection;
