import styled from 'styled-components';

const _Heading = styled('span')`
    font-size: 1.2rem;
    font-weight: 600;
    margin: 10px 0px;
    padding-top: 10px;
    border-top: 2px solid #1F273A;
`;

interface HeadingProps {
    title: string;
}

export default function Heading(props: HeadingProps) {
    return (
        <_Heading>
            {props.title}
        </_Heading>
    )
}