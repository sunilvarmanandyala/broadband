import BusinessHeader from './BusinessHeader';
import BusinessHero from './BusinessHero';
import BusinessSectors from './BusinessSectors';
import CommunityChecker from './CommunityChecker';
import BusinessServicesGrid from './BusinessServicesGrid';
import BusinessFooter from './BusinessFooter';
import BusinessShowcase from './BusinessShowcase';

export default function BusinessPage() {
  return (
    <>
      <BusinessHeader />
      <BusinessHero />
      <BusinessShowcase />
      <BusinessSectors />
      <CommunityChecker />
      <BusinessServicesGrid />
      <BusinessFooter />
    </>
  );
}
