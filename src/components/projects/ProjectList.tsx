import React from 'react';
import { Project } from '../../data/Project';
import ProjectItem from './ProjectItem';

interface Props {
    projects: Project[];
}

const ProjectList: React.FC<Props> = (props: Props) => {
    return (
        <div>
            {props.projects.map((proj: Project) => {
                return <ProjectItem key={proj.name} project={proj} />;
            })}
        </div>
    );
};

export default ProjectList;
