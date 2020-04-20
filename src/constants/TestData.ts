import { Project } from '../data/Project';
import IMG from '../img/Profile.png';

export const PROJECTS: Project[] = [
    {
        name: 'Test Project',
        image: IMG,
        start: new Date('2019-10-12'),
        end: new Date('2020-9-10'),
        company: 'Your Company Here',
        url: 'https://google.com',
        shortDescription: 'This is the short description of the project. Not sure what this will be used for yet',
        points: [
            'Acomplished X by doing Y as measured by Z',
            'Acomplished X by doing Y as measured by Z',
            'Acomplished X by doing Y as measured by Z',
        ],
    },
    {
        name: 'Test Project 2',
        image: IMG,
        start: new Date('2019-10-12'),
        company: 'Your Company Here',
        shortDescription: 'This is the short description of the project. Not sure what this will be used for yet',
        points: [
            'Acomplished X by doing Y as measured by Z',
            'Acomplished X by doing Y as measured by Z',
            'Acomplished X by doing Y as measured by Z',
        ],
    },
];
