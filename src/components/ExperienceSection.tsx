import { Timeline } from "./ui/timeline";

const ExperienceSection = () => {
  const data = [
    {
      title: "Dec 2023 - Present",
      content: (
        <div className="space-y-4">
          <div className="flex flex-col gap-2">
            <h4 className="text-2xl font-bold text-black">Growth & Strategy Intern</h4>
            <span className="text-black/60 font-medium">India's Biggest Ed-Tech Company</span>
          </div>
          <p className="text-neutral-700 text-sm md:text-base font-normal">
            Spearheaded growth initiatives and strategic planning for one of the most impactful ed-tech platforms in India. My role involves turning complex market data into actionable growth levers.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
            <div className="space-y-4">
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-neutral-600">
                  <div className="w-1.5 h-1.5 rounded-full bg-black" />
                  Analyzed market trends and competitor strategies
                </li>
                <li className="flex items-center gap-2 text-sm text-neutral-600">
                  <div className="w-1.5 h-1.5 rounded-full bg-black" />
                  Developed growth frameworks and KPI dashboards
                </li>
                <li className="flex items-center gap-2 text-sm text-neutral-600">
                  <div className="w-1.5 h-1.5 rounded-full bg-black" />
                  Collaborated on strategic user acquisition projects
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-1 gap-4">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"
                alt="Growth Strategy"
                className="rounded-xl object-cover h-44 w-full shadow-lg"
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "June 2023 - Nov 2023",
      content: (
        <div className="space-y-4">
          <div className="flex flex-col gap-2">
            <h4 className="text-2xl font-bold text-black">Business Operations Intern</h4>
            <span className="text-black/60 font-medium">India's Biggest Ed-Tech Company</span>
          </div>
          <p className="text-neutral-700 text-sm md:text-base font-normal">
            Optimized operational workflows and processes to enhance efficiency across multiple business units. Focused on data-driven decision making and operational excellence.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
            <div className="grid grid-cols-1 gap-4">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2340&auto=format&fit=crop"
                alt="Business Operations"
                className="rounded-xl object-cover h-44 w-full shadow-lg"
              />
            </div>
            <div className="space-y-4">
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-neutral-600">
                  <div className="w-1.5 h-1.5 rounded-full bg-black" />
                  Streamlined internal processes for better efficiency
                </li>
                <li className="flex items-center gap-2 text-sm text-neutral-600">
                  <div className="w-1.5 h-1.5 rounded-full bg-black" />
                  Created operational documentation and SOPs
                </li>
                <li className="flex items-center gap-2 text-sm text-neutral-600">
                  <div className="w-1.5 h-1.5 rounded-full bg-black" />
                  Supported scaling operations during peak periods
                </li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Entrepreneurship",
      content: (
        <div className="space-y-4">
          <div className="flex flex-col gap-2">
            <h4 className="text-2xl font-bold text-black">Digital Business & Strategy</h4>
            <span className="text-black/60 font-medium">Strategic Vision</span>
          </div>
          <p className="text-neutral-700 text-sm md:text-base font-normal">
            Continuously exploring emerging technologies and business models. My journey is defined by a passion for building scalable solutions and driving digital transformation.
          </p>
          <div className="grid grid-cols-2 gap-4 pt-4">
            <img
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2340&auto=format&fit=crop"
              alt="Strategy"
              className="rounded-xl object-cover h-32 md:h-44 w-full shadow-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2340&auto=format&fit=crop"
              alt="Analytics"
              className="rounded-xl object-cover h-32 md:h-44 w-full shadow-lg"
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <section className="w-full bg-white relative overflow-hidden">
      <Timeline data={data} />
    </section>
  );
};

export default ExperienceSection;
