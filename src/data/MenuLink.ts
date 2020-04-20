export default interface MenuLink {
    label: string;
    url: string;
}

export const MENU_LINKS: MenuLink[] = [
    {
        label: 'Home',
        url: '/',
    },
    {
        label: 'About',
        url: '/about',
    },
];
