export default function TrustStrip() {
  const points = [
    "5+ Years Experience",
    "Personalized Nutrition Plans",
    "One-Time Payment",
    "Support Until Results",
  ];

  return (
    <div className="bg-secondary text-white py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-stretch justify-center gap-3 sm:gap-6">
          {points.map((point, index) => (
            <div key={index} className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-2 sm:gap-3 bg-white/5 border border-white/10 p-3 sm:p-4 rounded-2xl sm:flex-1 sm:min-w-[200px]">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary">
                <svg
                  className="h-4 w-4 sm:h-5 sm:w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="3"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
              </div>
              <span className="font-medium text-xs sm:text-base leading-tight">{point}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
