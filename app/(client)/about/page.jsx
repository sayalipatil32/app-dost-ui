import AboutParent from './_components/AboutParent';

export default function AboutPage() {
  return (
    // The background div remains here
    <div className="min-h-screen px-10 bg-linear-to-br from-white via-blue-50/30 to-purple-50/20">
      <AboutParent />
    </div>
  );
}