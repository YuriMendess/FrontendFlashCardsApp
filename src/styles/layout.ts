import styled, { css } from 'styled-components';

interface IFlexProps {
    maxWidth?: string;
    height?: string;
    align?: 'center';
    justify?: 'space-between' | 'space-around' | 'center';
    direction?: 'row' | 'column';
    columnGap?: string;
    margin?: string;
    padding?: string;
}

export const Container = styled.div`
    max-width: 1368px;
    margin: 0 1.5rem;

    @media screen and (min-width: 768px) { margin: 0 1rem }

    @media screen and (min-width: 968px) { margin: auto }
`;

export const Flex = styled.div<IFlexProps>`
    ${(IFlexProps) => css`
        width: 100%;
        height: ${IFlexProps.height};
        max-width: ${IFlexProps.maxWidth};
        display: flex;
        flex-direction: ${IFlexProps.direction};
        justify-content: ${IFlexProps.justify};
        align-items: ${IFlexProps.align};
        margin: ${IFlexProps.margin};
        padding: ${IFlexProps.padding};
        column-gap: ${IFlexProps.columnGap};
    `}
`;