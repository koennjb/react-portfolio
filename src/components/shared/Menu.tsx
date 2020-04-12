import React, { useState, MouseEvent } from 'react';

interface Props {
    brand: React.ReactNode;
}

const Menu: React.FC<Props> = (props: Props) => {
    const [isOpen, setIsOpen] = useState(false);

    const onExpand = (event: MouseEvent<HTMLButtonElement>): void => {
        event.preventDefault();
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-gray-200">
            <div className="flex items-center justify-between px-4 py-3">
                {/* Left */}
                <div>
                    <p className="text-2xl font-bold">{props.brand}</p>
                </div>
                {/* Right */}
                <div>
                    <button
                        type="button"
                        className="block text-gray-700 hover:text-black focus:text-white focus:outline-none"
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
            <div className={`${isOpen ? 'block' : 'hidden'} px-2 pb-4`}>
                <a href="#" className="block mt-1 px-2 py-1 font-semibold rounded hover:bg-gray-100">
                    Link 1
                </a>
                <a href="#" className="block mt-1 px-2 py-1 font-semibold rounded hover:bg-gray-100">
                    Link 2
                </a>
                <a href="#" className="block mt-1 px-2 py-1 font-semibold rounded hover:bg-gray-100">
                    Link 3
                </a>
                <a href="#" className="block mt-1 px-2 py-1 font-semibold rounded hover:bg-gray-100">
                    Link 4
                </a>
            </div>
        </nav>
    );
};

export default Menu;
