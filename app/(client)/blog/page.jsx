import BlogParent from './_components/BlogParent';

export default function BlogPage() {
  return (
    // The background div remains here
    <div className="min-h-screen bg-linear-to-br from-white via-blue-50/30 to-purple-50/20 px-10">
      <BlogParent />
    </div>
  );
}