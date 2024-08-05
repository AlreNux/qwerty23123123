import React, { ReactNode } from 'react';
import { BlockContainer } from './style';

interface IBlockProps {
    theme?: 'small' | 'medium';
    children: ReactNode;
}

export const Block: React.FC<IBlockProps> = ({ theme = 'small', children }) => (
    <BlockContainer theme={theme}>{children}</BlockContainer>
);
