import { useState, useEffect, useRef } from "react";
import { FiZap, FiSettings, FiLayers, FiMenu, FiX } from "react-icons/fi";

function App() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  const featuresRef = useRef(null);
  const howItWorksRef = useRef(null);
  const faqRef = useRef(null);
  const waitlistRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail("");
      console.log("Email submitted:", email);
    }
  };

  const scrollToSection = (ref) => {
    setMobileMenuOpen(false);
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? "py-4 glass" : "py-4"
        }`}
      >
        <nav className="container mx-auto px-6 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
            TubeX
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection(featuresRef)}
              className="font-medium hover:text-primary-400 transition-colors relative group"
            >
              Features
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection(howItWorksRef)}
              className="font-medium hover:text-primary-400 transition-colors relative group"
            >
              How It Works
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection(faqRef)}
              className="font-medium hover:text-primary-400 transition-colors relative group"
            >
              FAQ
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection(waitlistRef)}
              className="bg-gradient-to-r from-primary-500 to-secondary-600 text-white px-5 py-2 rounded-full font-medium hover:shadow-lg hover:-translate-y-0.5 transition-all"
            >
              Join Waitlist
            </button>
          </div>

          <button
            className="md:hidden text-2xl"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </nav>

        {mobileMenuOpen && (
          <div className="md:hidden glass mt-2 mx-4 rounded-xl animate-fade-in">
            <div className="flex flex-col p-4 space-y-4">
              <button
                onClick={() => scrollToSection(featuresRef)}
                className="font-medium py-2 hover:text-primary-400 transition-colors"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection(howItWorksRef)}
                className="font-medium py-2 hover:text-primary-400 transition-colors"
              >
                How It Works
              </button>
              <button
                onClick={() => scrollToSection(faqRef)}
                className="font-medium py-2 hover:text-primary-400 transition-colors"
              >
                FAQ
              </button>
              <button
                onClick={() => scrollToSection(waitlistRef)}
                className="bg-gradient-to-r from-primary-500 to-secondary-600 text-white px-5 py-2 rounded-full font-medium"
              >
                Join Waitlist
              </button>
            </div>
          </div>
        )}
      </header>

      <section className="min-h-[80vh] flex items-center py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
              Unleash Creativity with AI-Powered Content
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Generate high-quality text, images, and more in seconds. Transform
              your ideas into compelling content with the power of artificial
              intelligence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection(waitlistRef)}
                className="bg-gradient-to-r from-primary-500 to-secondary-600 text-white px-6 py-3 rounded-full font-medium hover:shadow-lg hover:-translate-y-0.5 transition-all"
              >
                Join the Waitlist
              </button>
              <button
                onClick={() => scrollToSection(howItWorksRef)}
                className="bg-white/10 border border-white/20 px-6 py-3 rounded-full font-medium hover:bg-white/15 transition-all"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      <section ref={featuresRef} className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="section-title">Powerful Features</h2>
          <p className="section-subtitle">
            Discover what makes our AI content generation platform stand out
            from the rest.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="glass p-8 transition-all duration-300 hover:-translate-y-2 flex flex-col h-full">
              <div className="w-16 h-16 rounded-full bg-primary-500/10 flex items-center justify-center text-3xl text-primary-500 mb-6 mx-auto">
                <FiZap />
              </div>
              <h3 className="text-xl font-bold mb-4">Fast Content Creation</h3>
              <p className="text-gray-400 flex-grow">
                Generate high-quality content in seconds, not hours. Our AI
                understands context and delivers relevant results instantly.
              </p>
            </div>

            <div className="glass p-8 transition-all duration-300 hover:-translate-y-2 flex flex-col h-full">
              <div className="w-16 h-16 rounded-full bg-primary-500/10 flex items-center justify-center text-3xl text-primary-500 mb-6 mx-auto">
                <FiSettings />
              </div>
              <h3 className="text-xl font-bold mb-4">Customizable Outputs</h3>
              <p className="text-gray-400 flex-grow">
                Fine-tune your content with adjustable parameters. Control tone,
                style, length, and more to match your brand voice.
              </p>
            </div>

            <div className="glass p-8 transition-all duration-300 hover:-translate-y-2 flex flex-col h-full">
              <div className="w-16 h-16 rounded-full bg-primary-500/10 flex items-center justify-center text-3xl text-primary-500 mb-6 mx-auto">
                <FiLayers />
              </div>
              <h3 className="text-xl font-bold mb-4">Multi-Format Support</h3>
              <p className="text-gray-400 flex-grow">
                Create text, images, code, and more with a single platform.
                Switch between formats seamlessly for all your content needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        ref={howItWorksRef}
        className="py-20 bg-gradient-to-b from-transparent to-black/20"
      >
        <div className="container mx-auto px-6 text-center">
          <h2 className="section-title">How It Works</h2>
          <p className="section-subtitle">
            Our AI-powered platform makes content creation simple and efficient.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <div className="glass p-8 relative">
              <div className="absolute -top-4 left-8 w-10 h-10 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 flex items-center justify-center font-bold text-white">
                1
              </div>
              <h3 className="text-xl font-bold mb-4 mt-4">
                Describe Your Needs
              </h3>
              <p className="text-gray-400">
                Tell our AI what type of content you need, including your target
                audience, tone, and specific requirements.
              </p>
            </div>

            <div className="glass p-8 relative">
              <div className="absolute -top-4 left-8 w-10 h-10 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 flex items-center justify-center font-bold text-white">
                2
              </div>
              <h3 className="text-xl font-bold mb-4 mt-4">AI Generation</h3>
              <p className="text-gray-400">
                Our advanced AI analyzes your request and generates multiple
                content options based on your specifications.
              </p>
            </div>

            <div className="glass p-8 relative">
              <div className="absolute -top-4 left-8 w-10 h-10 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 flex items-center justify-center font-bold text-white">
                3
              </div>
              <h3 className="text-xl font-bold mb-4 mt-4">Review & Refine</h3>
              <p className="text-gray-400">
                Review the generated content, make edits, or request refinements
                until you're completely satisfied.
              </p>
            </div>

            <div className="glass p-8 relative">
              <div className="absolute -top-4 left-8 w-10 h-10 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 flex items-center justify-center font-bold text-white">
                4
              </div>
              <h3 className="text-xl font-bold mb-4 mt-4">Export & Use</h3>
              <p className="text-gray-400">
                Export your finalized content in your preferred format and use
                it across your marketing channels.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section ref={faqRef} className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">
            Get answers to common questions about our AI content generation
            platform.
          </p>

          <div className="mt-12 max-w-3xl mx-auto">
            {[
              {
                question: "How does the AI content generation work?",
                answer:
                  "Our platform uses advanced machine learning algorithms trained on diverse datasets to understand context and generate human-like content. You provide the parameters, and our AI creates content that matches your specifications.",
              },
              {
                question: "Is the generated content unique?",
                answer:
                  "Yes, all content generated by our platform is unique. Our AI creates original content for each request, ensuring you never receive duplicate or plagiarized material.",
              },
              {
                question: "What types of content can I create?",
                answer:
                  "Our platform supports various content types, including blog posts, social media updates, product descriptions, email newsletters, ad copy, and more. We're constantly adding new formats based on user feedback.",
              },
              {
                question: "How do I get early access?",
                answer:
                  "Join our waitlist by submitting your email address. We're gradually rolling out access to users on the waitlist, and we'll notify you when it's your turn to try the platform.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="glass mb-4 rounded-xl overflow-hidden group hover:bg-white/5 transition-colors"
              >
                <button
                  onClick={() =>
                    setActiveFaq(activeFaq === index ? null : index)
                  }
                  className="w-full text-left p-6 font-bold text-xl flex justify-between items-center transition-colors"
                >
                  {faq.question}
                  <span
                    className={`transform transition-transform duration-300 ${
                      activeFaq === index ? "rotate-180" : "rotate-0"
                    }`}
                  >
                    ▼
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    activeFaq === index
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="p-6 pt-0 text-gray-400 transition-colors group-hover:text-white">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        ref={waitlistRef}
        className="py-20 bg-gradient-to-b from-transparent to-black/20"
      >
        <div className="container mx-auto px-6 text-center">
          <h2 className="section-title">Be the First to Try It</h2>
          <p className="section-subtitle">
            Join our exclusive waitlist and get early access to our AI content
            generation platform.
          </p>

          <div className="glass max-w-md mx-auto p-8 mt-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:outline-none focus:border-primary-500 transition-colors"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-primary-500 to-secondary-600 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all"
              >
                Join Waitlist
              </button>
            </form>

            {isSubmitted && (
              <div className="mt-6 p-4 rounded-lg bg-green-500/10 text-green-400 animate-fade-in">
                Thanks for joining! We'll notify you when we launch.
              </div>
            )}
          </div>
        </div>
      </section>

      <footer className="py-12 border-t border-white/10">
        <div className="container mx-auto px-6 text-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent mb-6">
            AIContentGen
          </div>
          <p className="text-gray-400 mb-6 max-w-md mx-auto">
            Revolutionizing content creation with the power of artificial
            intelligence.
          </p>
          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <span className="sr-only">Twitter</span>
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <span className="sr-only">LinkedIn</span>
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <span className="sr-only">GitHub</span>
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
          <p className="text-gray-500 text-sm">
            © 2025 AIContentGen. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
