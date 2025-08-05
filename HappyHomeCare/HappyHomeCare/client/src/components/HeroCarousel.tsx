import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const slides = [
  {
    image: 'https://backendlessappcontent.com/2C44E3E4-783F-41CC-921A-B332CEB29907/8CF080DE-91ED-495D-8980-140D28BA6725/files/ui-builder/containers/default/img/herobg-01.jpg',
    alt: 'Korean elderly people participating in arts and crafts activities'
  }
];

export default function HeroCarousel() {
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative h-96 lg:h-screen overflow-hidden">
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-40" />
          </div>
        ))}
      </div>

      {/* Hero Content Overlay */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="text-center text-white px-4">
          <h1 className="text-4xl lg:text-6xl font-bold mb-4">
            {t('site.title')}
          </h1>
          <p className="text-xl lg:text-2xl mb-8 font-light">
            {t('site.slogan')}
          </p>
          <Button
            size="lg"
            className="text-lg font-medium px-8 py-4"
            data-testid="button-contact-hero"
          >
            {t('button.contact')}
          </Button>
        </div>
      </div>

      {/* Carousel Navigation Dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-opacity ${
              index === currentSlide ? 'bg-white bg-opacity-100' : 'bg-white bg-opacity-50'
            }`}
            data-testid={`carousel-dot-${index}`}
          />
        ))}
      </div>

      {/* Carousel Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-30 hover:bg-opacity-50 text-white p-3 rounded-full transition-all z-10"
        data-testid="carousel-prev"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-30 hover:bg-opacity-50 text-white p-3 rounded-full transition-all z-10"
        data-testid="carousel-next"
      >
        <ChevronRight className="h-5 w-5" />
      </button>
    </section>
  );
}
