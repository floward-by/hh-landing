import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useLanguage } from '@/contexts/LanguageContext';
import logoImage from '@assets/hh-logo-txt-color_1754081954445.png';

export default function Header() {
  const { language, toggleLanguage, t } = useLanguage();
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [showAnnouncement, setShowAnnouncement] = useState(true);

  const navItems = [
    { path: '/about', key: 'nav.about' },
    { path: '/services', key: 'nav.services' },
    { path: '/daycare', key: 'nav.daycare' },
    { path: '/eligibility', key: 'nav.eligibility' },
    { path: '/careers', key: 'nav.careers' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location === '/') return true;
    if (path !== '/' && location.startsWith(path)) return true;
    return false;
  };

  return (
    <>
      {/* Top Phone Bar */}
      <div className="bg-gray-100 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-end py-2">
            <a 
              href="tel:862-336-1701"
              className="text-sm text-gray-700 hover:text-primary transition-colors flex items-center space-x-1"
              data-testid="top-phone-link"
            >
              <Phone className="h-4 w-4" />
              <span>862-336-1701</span>
            </a>
          </div>
        </div>
      </div>

      <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center" data-testid="link-home">
            <img 
              src={logoImage} 
              alt="Happy Home Adult Daycare Logo" 
              className="h-auto min-w-[125px] max-w-[200px] w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`transition-colors ${
                  isActive(item.path)
                    ? 'text-primary font-medium border-b-2 border-primary'
                    : 'text-gray-600 hover:text-primary'
                }`}
                data-testid={`link-${item.key.split('.')[1]}`}
              >
                {t(item.key)}
              </Link>
            ))}
          </nav>

          {/* Contact & Language Toggle & Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Contact Link */}
            <a 
              href="tel:862-336-1701"
              className="hidden sm:flex items-center space-x-2 px-4 py-2 text-sm font-medium text-primary hover:text-primary/80 border border-primary rounded-lg hover:bg-primary/5 transition-colors"
              data-testid="link-contact"
            >
              <Phone className="h-4 w-4" />
              <span>{language === 'ko' ? '문의하기' : 'Contact'}</span>
            </a>
            
            <Button
              onClick={toggleLanguage}
              className="font-medium"
              data-testid="button-language-toggle"
            >
              {language === 'ko' ? 'EN' : '한국어'}
            </Button>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon" data-testid="button-mobile-menu">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col space-y-4 mt-6">
                  {navItems.map((item) => (
                    <Link
                      key={item.path}
                      href={item.path}
                      className={`text-lg transition-colors ${
                        isActive(item.path) ? 'text-primary font-medium' : 'text-gray-600'
                      }`}
                      onClick={() => setIsOpen(false)}
                      data-testid={`mobile-link-${item.key.split('.')[1]}`}
                    >
                      {t(item.key)}
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
      
      {/* Announcement Bar */}
      {showAnnouncement && (
        <div className="bg-primary text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-3">
              <div className="flex-1 flex justify-center">
                <p className="text-lg font-medium">
                  {language === 'ko' ? '페어뷰 센터가 완공 했습니다. Oct 2025' : 'Fairview Center has been completed. Oct 2025'}
                </p>
              </div>
              <button
                onClick={() => setShowAnnouncement(false)}
                className="text-white hover:text-gray-200 transition-colors ml-4"
                data-testid="button-close-announcement"
                aria-label="Close announcement"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
    </>
  );
}
