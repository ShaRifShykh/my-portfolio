import Image from "next/image";
import CommonSection from "./components/CommonSection";
import LanguageSection from "./components/LanguageSection";
import { businesses, experiences, projects } from "./constant/stats";
import ContactSection from "./components/ContactSection";

export default function Home() {
  return (
    <main className="max-w-2xl mx-auto px-4 sm:px-6 py-12">
      {/* Header */}
      <header className="mb-12">
        <div className="profile-section">
          <div className="w-24 h-24 rounded-2xl overflow-hidden profile-picture flex-shrink-0">
            <Image
              src="/myself.jpg"
              alt="Profile Pic"
              width={24}
              height={24}
              className="w-full h-full object-cover"
              quality={100}
              unoptimized={true}
            />
          </div>

          <div className="profile-info">
            <h1 className="text-2xl font-semibold tracking-tight mb-1">
              ShaRif Shaikh
            </h1>
            <div className="text-secondary text-sm">
              <p>- 21 y/o</p>
              <p>- Grew up in Pakistan</p>
              <p className="text-companyGreen">- Studying in PK / Hyd Area</p>
            </div>
          </div>
        </div>
      </header>

      {/* Business Section */}
      <CommonSection title="Business 👷🏾‍♂️📈" businesses={businesses} />

      {/* Experience */}
      <CommonSection title="Experience 💼" businesses={experiences} />

      {/* Portfolio */}
      <CommonSection title="Portfolio 📆" businesses={projects} />

      {/* Languages */}
      <LanguageSection />

      {/* Contact */}
      <ContactSection />
    </main>
  );
}
