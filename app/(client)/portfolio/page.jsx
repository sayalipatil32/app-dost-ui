import PortfolioParent from './_components/PortfolioParent';

export default function PortfolioPage() {
  return (
    // The background div remains here
    <div className="min-h-screen px-10 bg-linear-to-br from-white via-blue-50/30 to-purple-50/20">
      <PortfolioParent />
    </div>
  );
}