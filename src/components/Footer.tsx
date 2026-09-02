export default function Footer() {
  return (
    <footer className="bg-secondary text-white/70 py-12 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <div className="flex flex-col items-center justify-center mb-6">
          <span className="font-signature font-normal text-4xl text-white leading-none pt-2">
            Meenakshi Kaushik
          </span>
          <span className="text-[10px] text-white tracking-[0.2em] font-medium uppercase mt-1 text-center">
            Certified Nutritionist
          </span>
        </div>
        <p className="max-w-xl mx-auto mb-8">
          Ending the cycle of diets and starting your true transformation journey with personalized, sustainable Indian nutrition.
        </p>
        <div className="flex justify-center gap-6 mb-8">
          <a href="#" className="hover:text-white transition-colors">Instagram</a>
          <a href="#" className="hover:text-white transition-colors">Facebook</a>
          <a href="#" className="hover:text-white transition-colors">WhatsApp</a>
        </div>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Meenakshi Kaushik Weight Loss Coaching. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
