import { useState } from 'react';
import hidePasswordIcon from '../../assets/login/icon/hidePassword-icon.svg';
import showPasswordIcon from '../../assets/login/icon/showPassword-icon.svg';
import { Button, ContinueWith } from '../../components';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import {
    Form,
    FormContainer,
    FormCheckBoxInput,
    FormCheckBoxLabel,
    FormCheckboxTest,
    FormInput,
    FormLabel,
    FormLink,
    FormPasswordButton,
    FormPasswordButtonIcon,
    FormSubTitle,
    FormTitle,
} from './style';

export const Login: React.FC = () => {
    const { onAuthorization, nullErrorStyle } = useActions();
    const { error, isDisabled } = useTypedSelector(state => state.user);
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [isChecked, setIsChecked] = useState<boolean>(false);
    const [hidePassword, setHidePassword] = useState<boolean>(true);

    return (
        <>
            <Form>
                <FormContainer>
                    <FormTitle>Login</FormTitle>
                    <FormSubTitle>Fill in the input fields!</FormSubTitle>
                    <div>
                        <FormLabel htmlFor="loginEmail" errorStyle={error}>
                            Email*
                            <FormInput
                                type="email"
                                name="Email"
                                placeholder="Email"
                                id="loginEmail"
                                errorStyle={error}
                                value={email}
                                onClick={nullErrorStyle}
                                disabled={isDisabled}
                                onChange={event_ => setEmail(event_.target.value)}
                            />
                        </FormLabel>
                        <FormLabel htmlFor="loginPassword" errorStyle={error}>
                            Password*
                            <FormInput
                                type={hidePassword ? 'password' : 'text'}
                                name="Password"
                                placeholder="Password"
                                id="loginPassword"
                                value={password}
                                errorStyle={error}
                                onClick={nullErrorStyle}
                                disabled={isDisabled}
                                onChange={event_ => setPassword(event_.target.value)}
                            />
                            <FormPasswordButton
                                type="button"
                                title="hidePassword"
                                onClick={() => {
                                    if (!isDisabled) {
                                        setHidePassword(!hidePassword);
                                    }
                                }}
                            >
                                <FormPasswordButtonIcon
                                    src={hidePassword ? `${hidePasswordIcon}` : `${showPasswordIcon}`}
                                />
                            </FormPasswordButton>
                        </FormLabel>
                    </div>
                    <FormCheckBoxLabel htmlFor="loginCheckBox">
                        <FormCheckBoxInput
                            type="checkbox"
                            name="checkbox"
                            id="loginCheckBox"
                            disabled={isDisabled}
                            onChange={event_ => setIsChecked(event_.target.checked)}
                        />
                        <FormCheckboxTest>Remember me</FormCheckboxTest>
                        <FormLink to="/#">Forget password?</FormLink>
                    </FormCheckBoxLabel>
                    <Button type="button" theme="form" text="Login" onClick={onAuthorization} disabled={isDisabled} />
                    <FormSubTitle>
                        Don&apos;t you have an account?<FormLink to="/#">Create an account</FormLink>
                    </FormSubTitle>
                    <ContinueWith />
                </FormContainer>
            </Form>
        </>
    );
};
