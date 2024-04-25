import clsx from 'clsx';

interface HeadingProps {
    title: string;
    size?: 'sm' | 'md' | 'lg';
}

export function Heading({title, size}: HeadingProps){
    return(
        <h2 className={clsx(
            "w-fit font-bold text-font-darkGray mx-auto",
            size === 'lg' ? 'text-[32px]' : size === 'md' ? 'text-[20px]' : 'text-[14px]'
        )}>
            {title}
        </h2>
    )
};