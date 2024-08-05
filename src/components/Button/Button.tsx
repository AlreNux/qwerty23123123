import { onAuthorization } from '../../store/action';
import { MainButton } from './style';

interface ButtonProps {
    type: 'button';
    theme: 'form' | 'mastHead';
    text: string;
    onClick?: typeof onAuthorization;
    disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ type, theme, text, onClick, disabled }) => (
    <MainButton type={type} theme={theme} onClick={onClick} disabled={disabled}>
        {text}
    </MainButton>
);
