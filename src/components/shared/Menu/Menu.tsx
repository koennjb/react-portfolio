import React, { useState, MouseEvent, useMemo } from 'react';
import { MENU_LINKS } from '../../../data/MenuLink';
import { TITLE } from '../../../constants/strings';
import './menu.css';
import { useScrollPosition, EffectParams } from '../../../hooks/useScrollPosition';

interface Props {
    brand?: React.ReactNode;
}

const defaultProps: Props = {
    brand: TITLE,
};

const Menu: React.FC<Props> = (props: Props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);

    useScrollPosition(
        ({ prevPos, currPos }: EffectParams) => {
            const isShow = prevPos.y >= currPos.y || currPos.y <= 10;
            if (isShow !== isVisible) setIsVisible(isShow);
        },
        [isVisible],
        1000,
    );

    const onExpand = (event: MouseEvent<HTMLButtonElement>): void => {
        event.preventDefault();
        setIsOpen(!isOpen);
    };

    const getLinks = (aClass: string): React.ReactNode[] => {
        return MENU_LINKS.map((v) => {
            return (
                <a key={v.label} href={v.url} className={aClass}>
                    {v.label}
                </a>
            );
        });
    };

    return useMemo(() => {
        return (
            <nav
                className={`${
                    isVisible ? 'portfolio-nav-active' : 'portfolio-nav-inactive'
                } bg-transparent sm:bg-white bg z-10 sm:flex items-center justify-between px-10 py-5 sticky top-0 w-full`}>
                <div className="flex items-center justify-between">
                    {/* Left */}
                    <div>
                        <p className="text-2xl font-bold">{props.brand}</p>
                    </div>
                    {/* Right */}
                    <div>
                        <button
                            type="button"
                            className="sm:hidden block text-gray-600 hover:text-black focus:text-black focus:outline-none"
                            onClick={onExpand}>
                            <svg className="fill-current h-6 w-6" viewBox="0 0 24 24">
                                <title>Menu</title>
                                {isOpen ? (
                                    <path
                                        fillRule="evenodd"
                                        d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                                    />
                                ) : (
                                    <path
                                        fillRule="evenodd"
                                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="hidden sm:block">
                    {getLinks('block sm:inline-block ml-2 px-2 py-1 font-semibold rounded hover:bg-gray-200')}
                </div>
                <div className={`${isOpen ? 'block mobile-active' : 'mobile-inactive'} sm:hidden pb-4 -ml-2`}>
                    {getLinks('block sm:inline-block mt-1 px-2 py-1 font-semibold rounded hover:bg-gray-200')}
                </div>
            </nav>
        );
    }, [isVisible, isOpen]);
};

Menu.defaultProps = defaultProps;

export default Menu;
