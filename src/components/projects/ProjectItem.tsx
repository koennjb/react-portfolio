import React from 'react';
import { Project } from '../../data/Project';

interface Props {
    project: Project;
}

const ProjectItem: React.FC<Props> = (props: Props) => {
    return (
        <div>
            <h1>{props.project.name}</h1>
            <p>{`${props.project.start} - ${props.project.end || 'Current'}`}</p>
            <p>{props.project.company}</p>
            {props.project.url ? (
                <a href={props.project.url}>
                    <img src={props.project.image} />
                </a>
            ) : (
                <img src={props.project.image} />
            )}
            <p>{props.project.shortDescription}</p>
            <ul>
                {props.project.points.map((point: string, i: number) => {
                    return <li key={`${point}-${i}`}>point</li>;
                })}
            </ul>
        </div>
    );
};

export default ProjectItem;
