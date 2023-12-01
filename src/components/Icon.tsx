import dynamic from 'next/dynamic';
import { LucideProps } from 'lucide-react';
import dynamicIconImports from 'lucide-react/dynamicIconImports';
import MDXLoader from './MDXLoader';

interface IconProps extends LucideProps {
    name: string;
}

export default function Icon({ name, ...props }: IconProps) {
    const iconImport = dynamicIconImports[name as keyof typeof dynamicIconImports];

    if (iconImport !== undefined) {
        const LucideIcon = dynamic(iconImport);
        return <LucideIcon {...props} />;
    } else {
        return <MDXLoader file={name} />
    }
}
