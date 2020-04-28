import React from 'react';
import { Project } from '../../data/Project';
import loading from '../../img/loading.gif';
import Img from 'react-cool-img';

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
                    <Img placeholder={loading} src={props.project.image} alt={props.project.name} />
                </a>
            ) : (
                <Img placeholder={loading} src={props.project.image} alt={props.project.name} />
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
