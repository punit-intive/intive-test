import { BlogProps, getAllBlogs } from '@/lib/contentful/api';
import { draftMode } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';

export default async function Home() {
  const { isEnabled } = draftMode();
  const blogs = await getAllBlogs(3, isEnabled);

  return (
    <main className='flex min-h-screen flex-col items-center justify-between bg-white p-24'>
      <section className='w-full pt-12'>
        <div className='container mx-auto space-y-12 px-4 md:px-6'>
          <div className='flex flex-col items-center justify-center space-y-4 text-center'>
            <div className='space-y-2'>
              <h1 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
                Welcome to our Blog
              </h1>
              <p className='max-w-[900px] text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-zinc-400'>
                Discover our latest blogs and stay up to date with the newest
                technologies, features, and trends.
              </p>
            </div>
          </div>
          <div className='space-y-12'>
            <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
              {blogs.map((blog: BlogProps) => (
                <article
                  key={blog.sys.id}
                  className='flex h-full flex-col overflow-hidden rounded-lg shadow-lg'
                >
                  <Image
                    alt='placeholder'
                    className='aspect-[4/3] w-full object-cover'
                    height='263'
                    src={blog?.heroImage?.url ?? ''}
                    width='350'
                  />
                  <div className='flex-1 p-6'>
                    <Link href={`/blogs/${blog.slug}`}>
                      <h3 className='py-4 text-2xl font-bold leading-tight text-zinc-900  dark:text-zinc-50'>
                        {blog.title}
                      </h3>
                    </Link>
                    <div className='inline-block rounded-full bg-zinc-100 px-3 py-1 text-sm font-semibold text-zinc-800'>
                      {blog.categoryName}
                    </div>
                    <p className='mb-2 mt-4 max-w-none text-sm text-zinc-500 dark:text-zinc-400'>
                      {blog.summary}
                    </p>
                    <p className='mb-2 mt-2 max-w-none text-sm font-bold text-zinc-600 dark:text-zinc-400'>
                      Written by: {blog.author}
                    </p>
                    <div className='flex justify-end'>
                      <Link
                        className='inline-flex h-10 items-center justify-center text-sm font-medium'
                        href={`/blogs/${blog.slug}`}
                      >
                        Read More →
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
