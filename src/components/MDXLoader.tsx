'use client';

import { ComponentType } from 'react';
import { MDXProps } from 'mdx/types';
import dynamic from 'next/dynamic';

const mdxMap: Record<string, ComponentType<MDXProps>> = {
    HomeIntro: dynamic(() => import('@/data/HomeIntro.mdx')),
    SelfIntro: dynamic(() => import('@/data/SelfIntro.mdx')),
    MadheadDescription: dynamic(() => import('@/data/MadheadDescription.mdx')),
    HkclrDescription: dynamic(() => import('@/data/HkclrDescription.mdx')),
    CuhkDescription: dynamic(() => import('@/data/CuhkDescription.mdx')),
    TOSDescription: dynamic(() => import('@/data/TOSDescription.mdx')),
    OADescription: dynamic(() => import('@/data/OADescription.mdx')),
    ORCDescription: dynamic(() => import('@/data/ORCDescription.mdx')),
    VTADescription: dynamic(() => import('@/data/VTADescription.mdx')),
    MyStory: dynamic(() => import('@/data/MyStory.mdx')),
};

export default function MDXLoader(props: { file: string }) {
    const MDXComponent = mdxMap[props.file];
    return <MDXComponent />;
}
