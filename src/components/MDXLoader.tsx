'use client';

import { ComponentType } from 'react';
import { MDXProps } from 'mdx/types';
import dynamic from 'next/dynamic';

const mdxMap: Record<string, ComponentType<MDXProps>> = {
    HomeIntro: dynamic(() => import('@/data/HomeIntro.mdx')),
    SelfIntro: dynamic(() => import('@/data/SelfIntro.mdx')),
};

export default function MDXLoader(props: { file: string }) {
    const MDXComponent = mdxMap[props.file];
    return <div><MDXComponent /></div>;
}
