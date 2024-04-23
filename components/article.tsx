/*
  We have to make this a client component to use the `useContentfulInspectorMode` and `useContentfulLiveUpdates` hooks to enable live preview mode.
  This does not mean it is rendered on the client, but that the HTML, CSS and JavaScript are shipped to the client to hydrate the page.
  This is necessary because we need interactivity to enable live preview mode.
*/
'use client';

import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Image from 'next/image';
import {
  useContentfulInspectorMode,
  useContentfulLiveUpdates,
} from '@contentful/live-preview/react';
import { BlogProps } from '@/lib/contentful/api';
import { ContentfulLivePreview } from '@contentful/live-preview';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';

function renderOptions(links: any) {
  // create an asset map
  const assetMap = new Map();
  // loop through the assets and add them to the map
  for (const asset of links.assets.block) {
    assetMap.set(asset.sys.id, asset);
  }

  return {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node: any) => {
        // find the asset in the assetMap by ID
        const asset = assetMap.get(node.data.target.sys.id);

        // render the asset accordingly
        return <img src={asset.url} alt={asset.description} />;
      },
    },
  };
}

export const Blog = ({ blog }: { blog: BlogProps }) => {
  const updatedBlog = useContentfulLiveUpdates(blog);
  const inspectorProps = useContentfulInspectorMode({ entryId: blog.sys.id });

  return (
    <div className='flex min-h-screen flex-col items-center justify-between bg-white p-24'>
      <section className='w-full'>
        <div className='container space-y-12 px-4 md:px-6'>
          <div className='space-y-4'>
            <h1
              className='text-4xl font-bold tracking-tighter sm:text-5xl'
              {...inspectorProps({ fieldId: 'title' })}
            >
              {updatedBlog.title}
            </h1>
            <div
              className='text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'
              {...inspectorProps({ fieldId: 'author' })}
            >
              By {updatedBlog.author}
            </div>
          </div>
          <div className='space-y-8 lg:space-y-10'>
            <Image
              alt='Blog Image'
              className='aspect-video w-full overflow-hidden rounded-xl object-cover'
              height='365'
              src={updatedBlog.heroImage?.url as string}
              width='650'
              {...ContentfulLivePreview.getProps({
                assetId: updatedBlog.heroImage?.sys.id || '',
                fieldId: 'file',
              })}
            />
            {/* <div className="space-y-8 lg:space-y-10"> */}
            <div className='flex flex-col justify-between md:flex-row'>
              <p
                className='max-w-[900px] text-zinc-500 md:text-2xl lg:text-3xl xl:text-4xl dark:text-zinc-400'
                {...inspectorProps({ fieldId: 'summary' })}
              >
                {updatedBlog.summary}
              </p>
            </div>
            <div className='space-y-4 md:space-y-6'>
              <div className='space-y-2'>
                <div
                  className='prose max-w-[900px] text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-zinc-400'
                  {...inspectorProps({ fieldId: 'details' })}
                >
                  {documentToReactComponents(
                    updatedBlog.details.json,
                    renderOptions(updatedBlog.details.links)
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
