import { CONTINUE_WITH_LINKS } from '../../const';
import { LineContinueWith, ContinueWithText, ContinueWithIcon, ContinueWithSocial, ContinueWithLink } from './style';

export const ContinueWith: React.FC = () => (
    <>
        <ContinueWithText>
            <LineContinueWith />
            <p>Or continue with</p>
            <LineContinueWith />
        </ContinueWithText>
        <ContinueWithSocial>
            {CONTINUE_WITH_LINKS.map(link => (
                <ContinueWithLink title="loginInWithSocial" key={link.icon} to={link.link}>
                    <ContinueWithIcon src={link.icon} />
                </ContinueWithLink>
            ))}
        </ContinueWithSocial>
    </>
);
