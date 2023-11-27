import dynamic from 'next/dynamic';
import { LucideProps } from 'lucide-react';
import dynamicIconImports from 'lucide-react/dynamicIconImports';

interface IconProps extends LucideProps {
    name: keyof typeof dynamicIconImports;
}

export type IconName = IconProps["name"];

export default function Icon({ name, ...props }: IconProps) {
    const LucideIcon = dynamic(dynamicIconImports[name]);
    return <LucideIcon {...props} />;
}
