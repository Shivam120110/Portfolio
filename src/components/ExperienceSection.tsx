import { Timeline } from "./ui/timeline";

const ExperienceSection = () => {
  const data = [
    {
      title: "Nov 25 - Jan 26",
      content: (
        <div>
          <div className="flex flex-col gap-2 mb-8">
            <h4 className="text-2xl font-bold text-black">Intern - Business Ops</h4>
            <span className="text-black/60 font-medium text-lg">PW (Physics Wallah)</span>
          </div>
          <div className="space-y-4 mb-8">
            <p className="text-neutral-800 text-sm md:text-base font-normal">
              Supported end-to-end operations for launching courses with creators at PW Skills. Used N8N for workflow automation and analyzed performance data for 10,000+ learners.
            </p>
            <div className="flex flex-col gap-2">
              <div className="flex gap-2 items-start text-neutral-700 text-sm md:text-base">
                ✅ Automated workflow & repetitive tasks using N8N
              </div>
              <div className="flex gap-2 items-start text-neutral-700 text-sm md:text-base">
                ✅ Performance data analysis for 10,000+ learners
              </div>
              <div className="flex gap-2 items-start text-neutral-700 text-sm md:text-base">
                ✅ Cross-functional team coordination
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=500&auto=format&fit=crop"
              alt="Business Ops"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=500&auto=format&fit=crop"
              alt="Data Analysis"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Jul - Oct 2025",
      content: (
        <div>
          <div className="flex flex-col gap-2 mb-8">
            <h4 className="text-2xl font-bold text-black">Intern - Strategy & Growth</h4>
            <span className="text-black/60 font-medium text-lg">PW (Physics Wallah)</span>
          </div>
          <div className="space-y-4 mb-8">
            <p className="text-neutral-800 text-sm md:text-base font-normal">
              Conducted targeted outreach for partnerships with a 100% completion rate. Performed market research identifying national and international government partnership opportunities.
            </p>
            <div className="flex flex-col gap-2">
              <div className="flex gap-2 items-start text-neutral-700 text-sm md:text-base">
                ✅ 5+ national & 1 international gov partnership identified
              </div>
              <div className="flex gap-2 items-start text-neutral-700 text-sm md:text-base">
                ✅ Drafted MoUs for formal collaborations
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=500&auto=format&fit=crop"
              alt="Strategy Planning"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=500&auto=format&fit=crop"
              alt="Market Research"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Jul - Aug 2025",
      content: (
        <div>
          <div className="flex flex-col gap-2 mb-8">
            <h4 className="text-2xl font-bold text-black">Team Lead - Ad Wars: boAt Campaign</h4>
            <span className="text-black/60 font-medium text-lg">Sem Theme Challenge</span>
          </div>
          <div className="space-y-4 mb-8">
            <p className="text-neutral-800 text-sm md:text-base font-normal">
              Led production of an Ad Campaign for boAt Lifestyle. Managed a 4-person team. Achieved ~9K views and high engagement within 36 hours.
            </p>
            <div className="flex flex-col gap-2">
              <div className="flex gap-2 items-start text-neutral-700 text-sm md:text-base">
                ✅ 2nd highest engagement across 8 entries
              </div>
              <div className="flex gap-2 items-start text-neutral-700 text-sm md:text-base">
                ✅ CEO appraisal for brand alignment
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1533750516457-a7f992034fce?q=80&w=500&auto=format&fit=crop"
              alt="Marketing Campaign"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=500&auto=format&fit=crop"
              alt="Team Leadership"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Mar 2025",
      content: (
        <div>
          <div className="flex flex-col gap-2 mb-8">
            <h4 className="text-2xl font-bold text-black">Project Lead - The Quirky Store</h4>
            <span className="text-black/60 font-medium text-lg">End Sem Challenge</span>
          </div>
          <p className="text-neutral-800 text-sm md:text-base font-normal mb-8">
            Launched a cash-positive pop-up store. Managed product sourcing, finance and operations. Ranked #2 in revenue among 9 teams.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=500&auto=format&fit=crop"
              alt="Store Launch"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=500&auto=format&fit=crop"
              alt="Retail Ops"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Jan - Mar 25",
      content: (
        <div>
          <div className="flex flex-col gap-2 mb-8">
            <h4 className="text-2xl font-bold text-black">Team Lead - spign.shop</h4>
            <span className="text-black/60 font-medium text-lg">D2C Bootcamp</span>
          </div>
          <p className="text-neutral-800 text-sm md:text-base font-normal mb-8">
            Built and scaled a data-driven DTC brand for lumbar support cushions. Optimized CAC by ~23% and improved ROAS through paid acquisition experiments.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1544256718-3bcf237f3974?q=80&w=500&auto=format&fit=crop"
              alt="Digital Growth"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=500&auto=format&fit=crop"
              alt="D2C Brand"
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-lg"
            />
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
