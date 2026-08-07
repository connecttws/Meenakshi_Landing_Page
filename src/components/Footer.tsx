export default function Footer() {
  return (
    <footer className="bg-secondary text-white/70 py-12 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <h3 className="text-2xl font-bold text-white mb-6">Meenakshi Weight Loss Coaching</h3>
        <p className="max-w-xl mx-auto mb-8">
          Ending the cycle of diets and starting your true transformation journey with personalized, sustainable Indian nutrition.
        </p>
        <div className="flex justify-center gap-6 mb-8">
          <a href="#" className="hover:text-white transition-colors">Instagram</a>
          <a href="#" className="hover:text-white transition-colors">Facebook</a>
          <a href="#" className="hover:text-white transition-colors">WhatsApp</a>
        </div>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Meenakshi Weight Loss Coaching. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
