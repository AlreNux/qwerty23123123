import { ReactNode } from 'react';
import { MastHeadContainer, MastHeadIcon } from './style';

interface MastHeadProps {
    theme: 'search' | 'dataPicker';
    icon?: string;
    children: ReactNode;
}

export const MastHeadBlock: React.FC<MastHeadProps> = ({ theme, icon, children }) => (
    <MastHeadContainer theme={theme}>
        <MastHeadIcon theme={theme} src={icon} />
        {children}
    </MastHeadContainer>
);
