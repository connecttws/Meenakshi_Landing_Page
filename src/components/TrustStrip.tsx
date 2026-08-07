export default function TrustStrip() {
  const points = [
    "5+ Years Experience",
    "Personalized Nutrition Plans",
    "One-Time Payment",
    "Support Until Results",
  ];

  return (
    <div className="bg-secondary text-white py-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-12">
          {points.map((point, index) => (
            <div key={index} className="flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/20 text-primary">
                <svg
                  className="h-4 w-4"
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
              <span className="font-medium text-sm sm:text-base">{point}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
