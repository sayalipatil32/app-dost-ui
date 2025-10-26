import ContactParent from './_components/ContactParent';

export default function ContactPage() {
  return (
    // The background div remains here
    <div className="md:px-10 min-h-screen bg-linear-to-br from-white via-blue-50/30 to-purple-50/20">
      <ContactParent />
    </div>
  );
}