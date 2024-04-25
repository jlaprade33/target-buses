import clsx from 'clsx';

interface TextProps {
    text: string;
    size?: 'sm' | 'md' | 'lg';
    color: 'light' | 'dark' | 'darkest';
    bold?: boolean;
}

export function Text({text, size, color}: TextProps){
    return(
        <span className={clsx(
            "w-fit",
            color === 'light' ? 'text-font-lightGray' : 'darkest'  ? 'text-black' : 'text-font-darkGray',
            size === 'lg' ? 'text-[32px]' : size === 'sm' ?  'text-[14px]' : 'text-[23px]',
            {bold: 'text-bold'}
        )}>
            {text}
        </span>
    )
};