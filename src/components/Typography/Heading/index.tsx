import clsx from 'clsx';

interface HeadingProps {
    title: string;
    id?: string;
    size?: 'sm' | 'md' | 'lg';
}

export function Heading({id, title, size}: HeadingProps){
    return(
        <h2 id={id ?? "heading"} className={clsx(
            "w-fit font-bold text-font-darkGray mx-auto",
            size === 'lg' ? 'text-[32px]' : size === 'md' ? 'text-[20px]' : 'text-[14px]'
        )}>
            {title}
        </h2>
    )
};