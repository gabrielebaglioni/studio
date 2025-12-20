import { Header } from '@/components/header';
import { HeroSection } from '@/components/hero-section';
import {
  OurAgencySection,
  TogetherSection,
  ProgramsSection,
  PartnerFeatureSection,
  BecomePartnerSection,
  MissionVisionSection,
  ProjectLandSection,
  FoodSecuritySection,
  SocialImbalanceSection,
  GallerySection,
  PartnerFormSection,
} from '@/components/sections';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
      </main>

    </div>
  );
}
