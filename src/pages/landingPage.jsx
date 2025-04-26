import React from 'react';

const LandingPage = () => {
  return (
    <div className="bg-[var(--color--gray-6)]">
      {/* Navbar */}
      <nav className="navbar bg-transparent py-[30px]">
        <div className="container max-w-[1520px] mx-auto px-[30px]">
          <div className="grid grid-cols-[0.4fr_1fr_0.5fr] items-center">
            {/* Logo */}
            <div>
              <img 
                src="/logo.png" 
                alt="Margin Funding Logo" 
                className="h-[42px]"
              />
            </div>
            
            {/* Navigation Links */}
            <div className="flex justify-center space-x-[20px]">
              <a href="#features" className="text-[var(--color--gray-1)] no-underline hover:text-[var(--color--primary-5)] transition-colors">Features</a>
              <a href="#pricing" className="text-[var(--color--gray-1)] no-underline hover:text-[var(--color--primary-5)] transition-colors">Pricing</a>
              <a href="#about" className="text-[var(--color--gray-1)] no-underline hover:text-[var(--color--primary-5)] transition-colors">About</a>
              <a href="#contact" className="text-[var(--color--gray-1)] no-underline hover:text-[var(--color--primary-5)] transition-colors">Contact</a>
            </div>
            
            {/* Login Button */}
            <div className="flex justify-end">
              <button className="bg-[var(--color--gray-5)] border border-[var(--color--border-color)] rounded-[10px] px-[32px] py-[20px] text-[var(--color--gray-2)] hover:bg-[var(--color--gray-3)] transition-colors">
                Login
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section relative overflow-hidden">
        <div className="container max-w-[1520px] mx-auto px-[30px]">
          <div className="text-center py-[100px]">
            <h1 className="text-[80px] font-bold text-[var(--color--gray-1)] mb-[20px] background-clip-text">
              Grow Your Trading Beyond Boundaries
            </h1>
            <p className="text-[var(--color--gray-2)] text-[20px] max-w-[800px] mx-auto mb-[30px]">
              Margin Funding offers a unique and comprehensive way of acquiring your desired income based on your trading performance.
            </p>
            <div className="flex justify-center space-x-[20px]">
              <button className="bg-[var(--color--primary-1)] text-[var(--color--gray-1)] px-[30px] py-[15px] rounded-[10px] hover:bg-[var(--color--gray-4)] transition-colors">
                Get Started
              </button>
              <button className="bg-[var(--color--gray-5)] text-[var(--color--gray-2)] px-[30px] py-[15px] rounded-[10px] hover:bg-[var(--color--gray-4)] transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-[50px]">
        <div className="container max-w-[1520px] mx-auto px-[30px]">
          <div className="flex justify-center space-x-[80px] items-center">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((logo) => (
              <img 
                key={logo} 
                src={`/client-logo-${logo}.png`} 
                alt={`Client Logo ${logo}`} 
                className="h-[50px] opacity-75"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-[100px]">
        <div className="container max-w-[1520px] mx-auto px-[30px]">
          <div className="text-center mb-[70px]">
            <h2 className="text-[64px] font-bold text-[var(--color--gray-1)] mb-[20px]">
              Powerful Features for Traders
            </h2>
            <p className="text-[var(--color--gray-2)] text-[20px] max-w-[800px] mx-auto">
              Discover the unique advantages that set Margin Funding apart
            </p>
          </div>

          <div className="grid grid-cols-3 gap-[30px]">
            {[
              { 
                icon: '/feature-icon-1.svg', 
                title: 'Advanced Risk Management', 
                description: 'Comprehensive risk assessment and mitigation strategies.' 
              },
              { 
                icon: '/feature-icon-2.svg', 
                title: 'Performance Tracking', 
                description: 'Real-time analytics and performance metrics.' 
              },
              { 
                icon: '/feature-icon-3.svg', 
                title: 'Flexible Funding', 
                description: 'Customizable funding options for your trading needs.' 
              }
            ].map((feature, index) => (
              <div 
                key={index} 
                className="border border-[var(--color--border-color)] rounded-[20px] bg-[var(--color--gray-5)] p-[30px] hover:transform hover:-translate-y-2 transition-transform"
              >
                <div className="w-[80px] h-[80px] border border-[var(--color--border-color)] rounded-full bg-[var(--color--gray-4)] flex items-center justify-center mb-[20px]">
                  <img 
                    src={feature.icon} 
                    alt={feature.title} 
                    className="w-[38px] h-[38px]"
                  />
                </div>
                <h3 className="text-[var(--color--gray-1)] text-[26px] font-semibold mb-[10px]">
                  {feature.title}
                </h3>
                <p className="text-[var(--color--gray-2)]">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-[100px] bg-[var(--color--gray-5)]">
        <div className="container max-w-[1520px] mx-auto px-[30px]">
          <div className="text-center mb-[70px]">
            <h2 className="text-[64px] font-bold text-[var(--color--gray-1)] mb-[20px]">
              What Traders Say
            </h2>
            <p className="text-[var(--color--gray-2)] text-[20px] max-w-[800px] mx-auto">
              Real stories from successful traders who've grown with us
            </p>
          </div>

          <div className="grid grid-cols-3 gap-[30px]">
            {[
              { 
                name: 'John Doe', 
                quote: 'Margin Funding transformed my trading career.',
                rating: 5 
              },
              { 
                name: 'Jane Smith', 
                quote: 'Incredible support and flexible funding options.',
                rating: 5 
              },
              { 
                name: 'Mike Johnson', 
                quote: 'The performance tracking is a game-changer.',
                rating: 5 
              }
            ].map((testimonial, index) => (
              <div 
                key={index} 
                className="border border-[var(--color--border-color)] rounded-[20px] bg-[var(--color--gray-4)] p-[30px] hover:transform hover:-translate-y-2 transition-transform"
              >
                <p className="text-[var(--color--gray-2)] mb-[20px] italic">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center">
                  <div className="flex text-[var(--color--primary-5)]">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="mr-1">★</span>
                    ))}
                  </div>
                  <p className="ml-4 text-[var(--color--gray-1)] font-semibold">
                    {testimonial.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-[100px]">
        <div className="container max-w-[1520px] mx-auto px-[30px]">
          <div className="bg-[var(--color--gray-5)] border border-[var(--color--border-color)] rounded-[20px] p-[50px] text-center">
            <h2 className="text-[64px] font-bold text-[var(--color--gray-1)] mb-[20px]">
              Ready to Elevate Your Trading?
            </h2>
            <p className="text-[var(--color--gray-2)] text-[20px] max-w-[800px] mx-auto mb-[30px]">
              Join thousands of traders who've found success with Margin Funding. 
              Start your journey today!
            </p>
            <div className="flex justify-center space-x-[20px]">
              <button className="bg-[var(--color--primary-1)] text-[var(--color--gray-1)] px-[30px] py-[15px] rounded-[10px] hover:bg-[var(--color--gray-4)] transition-colors">
                Get Started Now
              </button>
              <button className="bg-[var(--color--gray-5)] text-[var(--color--gray-2)] px-[30px] py-[15px] rounded-[10px] hover:bg-[var(--color--gray-4)] transition-colors">
                Request a Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[var(--color--gray-6)] py-[50px]">
        <div className="container max-w-[1520px] mx-auto px-[30px]">
          <div className="grid grid-cols-[1fr_0.5fr_0.5fr] gap-[30px]">
            {/* Logo and Description */}
            <div>
              <img 
                src="/logo.png" 
                alt="Margin Funding Logo" 
                className="h-[45px] mb-[20px]"
              />
              <p className="text-[var(--color--gray-2)]">
                Empowering traders to reach their full potential
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-[var(--color--gray-1)] mb-[15px] font-semibold">
                Quick Links
              </h4>
              <div className="flex flex-col space-y-[10px]">
                <a href="#features" className="text-[var(--color--gray-2)] hover:text-[var(--color--primary-5)] transition-colors">Features</a>
                <a href="#pricing" className="text-[var(--color--gray-2)] hover:text-[var(--color--primary-5)] transition-colors">Pricing</a>
                <a href="#about" className="text-[var(--color--gray-2)] hover:text-[var(--color--primary-5)] transition-colors">About</a>
                <a href="#contact" className="text-[var(--color--gray-2)] hover:text-[var(--color--primary-5)] transition-colors">Contact</a>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-[var(--color--gray-1)] mb-[15px] font-semibold">
                Connect With Us
              </h4>
              <div className="flex space-x-[15px]">
                {['twitter', 'linkedin', 'facebook'].map((social, index) => (
                  <a 
                    key={index} 
                    href={`https://${social}.com/marginfunding`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-[64px] h-[64px] border border-[var(--color--border-color)] rounded-[20px] bg-[var(--color--gray-4)] flex items-center justify-center hover:transform hover:-translate-y-1 transition-transform"
                  >
                    <img 
                      src={`/${social}-icon.svg`} 
                      alt={`${social} icon`} 
                      className="w-[32px] h-[32px]"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center mt-[50px] text-[var(--color--gray-2)]">
            © {new Date().getFullYear()} Margin Funding. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;