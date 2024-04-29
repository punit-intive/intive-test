import { BlogProps, getAllBlogs, getBlog, getGenericPage } from '@/lib/contentful/api';
import { draftMode } from 'next/headers';
import { notFound } from 'next/navigation';
import { Blog } from '@/components/article';
import { ContentfulPreviewProvider } from '@/components/contentful-preview-provider';
import ComponentProdiver from "@/components/Components/ComponentsProvider/ComponentsProvider"
// At build time, fetch all slugs to build the blog pages so they are static and cached
export default async function Page({
  params,
}: {
  params: { slug: string };
}) {
  const { isEnabled } = draftMode();
  const blog = await getGenericPage("index",isEnabled);

  if (!blog) {
    notFound();
  }

  return (
    <main className='test-sass'>
      <ComponentProdiver components={blog?.componentsCollection?.items} language={'en'} />
    </main>
  );
}
