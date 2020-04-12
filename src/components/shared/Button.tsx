import React from 'react';
interface IProps extends React.HTMLAttributes<HTMLButtonElement> {
    children?: any;
}

const Button: React.FC<IProps> = (props: IProps) => {
    // If you don't spread children and title, the restProps
    // still contain these props and compiler will say "no"
    const { children, ...buttonProps } = props;
    return (
        <button
            className="px-2 py-1 rounded-lg focus:outline-none bg-green-400 text-green-800 text-xl font-light uppercase shadow-md hover:shadow-lg"
            {...buttonProps}>
            {children}
        </button>
    );
};
export default Button;
