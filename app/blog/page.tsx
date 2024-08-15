import { posts } from "#site/content";

export default async function BlogPage() {
  const displayPost = posts;

  return (
    <div className="container max-w-4xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between gap-8 ">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block font-black text-4xl lg:text-5xl">Blog</h1>
          <p className="text-xl text-muted-foreground">
            My ramblings on all things web dev.
          </p>
        </div>
      </div>
      <hr className="mt-8" />
      {displayPost?.length > 8 ? (
        <ul className="flex flex-col"></ul>
      ) : (
        <p>Nothing to see here yet</p>
      )}
    </div>
  );
}
