import { Phone, Mail, Clock, MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import logoImage from '@assets/hh-logo-txt-color_1754081954445.png';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div>
            <div className="mb-6">
              <img 
                src={logoImage} 
                alt="Happy Home Adult Daycare Logo" 
                className="h-12 w-auto"
              />
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* Address & Contact */}
              <div>
                <h4 className="text-lg font-semibold mb-4">{t('footer.contact')}</h4>
                <div className="space-y-3 text-gray-300">
                  <div className="flex items-start space-x-2">
                    <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                    <span className="text-sm">680 Broadway 6FL, Paterson, NJ 07514</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4" />
                    <a href="tel:862-336-1701" className="hover:text-white transition-colors">
                      862-336-1701
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4" />
                    <div className="flex items-center space-x-1">
                      <span>대표:</span>
                      <a href="tel:551-238-1064" className="hover:text-white transition-colors">
                        551-238-1064
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="h-4 w-4" />
                    <a href="mailto:hello@happyhomenj.com" className="hover:text-white transition-colors">
                      hello@happyhomenj.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Hours & Additional Contacts */}
              <div>
                <h4 className="text-lg font-semibold mb-4">{t('footer.hours.korean')}</h4>
                <div className="space-y-2 text-gray-300 text-sm mb-4">
                  <p>{t('footer.hours.days')}</p>
                </div>

              </div>
            </div>
          </div>

          {/* Google Maps */}
          <div>
            <div className="w-full h-64 bg-gray-800 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.4536724547!2d-74.17654068459418!3d40.91615797931234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2fccbcc4c8f97%3A0x8a6b4c5d6e7f8a9b!2s680%20Broadway%2C%20Paterson%2C%20NJ%2007514%2C%20USA!5e0!3m2!1sen!2sus!4v1673123456789!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Happy Home Adult Daycare Location"
              ></iframe>
            </div>
          </div>
        </div>

        <hr className="border-gray-700 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">{t('footer.copyright')}</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
              개인정보처리방침
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
              이용약관
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
