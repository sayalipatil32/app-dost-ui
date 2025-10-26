import BlogHero from './BlogHero';
import BlogContent from './BlogContent';
import NewsletterSection from './NewsletterSection';

export default function BlogParent() {
  return (
    <>
      <BlogHero />
      <BlogContent />
      <NewsletterSection />
    </>
  );
}