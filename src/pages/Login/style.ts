import { Link } from 'react-router-dom';
import { ReactSVG } from 'react-svg';
import styled from 'styled-components';

export const Form = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const FormContainer = styled.div`
    padding: 25px;
    box-shadow: var(--box-shadow);
    border-radius: 15px;
`;

export const FormTitle = styled.h3`
    font-weight: 800;
    font-size: 40px;
    line-height: 49px;
`;

export const FormSubTitle = styled.p`
    padding-top: 20px;
    font-size: 20px;
    line-height: 24px;
`;

interface FormLabelProps {
    errorStyle?: string | null;
}

export const FormLabel = styled.label`
    position: relative;
    display: flex;
    flex-direction: column;
    padding-top: 20px;
    cursor: pointer;
    user-select: none;
    color: ${(props: FormLabelProps) => (props.errorStyle ? 'var(--error-color)' : 'inherit')};

    &:first-child {
        padding-top: 50px;
    }
`;

interface FormInnerProps {
    errorStyle?: string | null;
}

export const FormInput = styled.input`
    width: 100%;
    min-width: 500px;
    margin-top: 5px;
    padding: 18px 30px;
    border-radius: 10px;
    border: 1px solid var(--border-form-color);

    &:autofill,
    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
        background: var(--background-color-secondary);
    }

    &:hover {
        border: 1px solid var(--background-color);
    }

    &:not([value='']) {
        border: 1px solid
            ${(props: FormInnerProps) => (props.errorStyle ? 'var(--error-color)' : 'var(--background-color);')};
    }

    &:focus {
        outline: none;
        border: 1px solid var(--background-color);
    }

    &:disabled {
        background: transparent;
        border: 1px solid var(--disabled-color);
        &::placeholder {
            color: var(--disabled-color);
        }
    }

    border: 1px solid
        ${(props: FormInnerProps) => (props.errorStyle ? 'var(--error-color)' : 'var(--border-form-color)')};
`;

export const FormPasswordButton = styled.button`
    &:focus {
        & > div svg path {
            fill: var(--background-color);
        }
    }

    &:active {
        & > div svg path {
            fill: var(--background-color-not-active);
        }
    }
`;

export const FormPasswordButtonIcon = styled(ReactSVG)`
    &:focus {
        outline: none;
        border: 1px solid var(--background-color);
    }
    & > div {
        display: flex;
        position: absolute;
        bottom: 17px;
        right: 20px;
        margin-left: 10px;
        cursor: pointer;
        user-select: none;
    }
`;

export const FormCheckBoxInput = styled.input`
    appearance: none;
    position: absolute;
    width: 24px;
    height: 24px;
    border: 1px solid var(--checkbox-color);
    border-radius: 5px;
    transition: border var(--hover-transition) cubic-bezier(0.33, 0.96, 0.49, 1.01);

    &:after {
        content: '';
        position: absolute;
        width: var(--checkbox-check-small-part);
        height: var(--checkbox-check-big-part);
        border: 1px solid var(--checkbox-check-color);
        border-width: 0 2px 2px 0;
        transform: translateX(7px) translateY(1px) rotate(45deg);
        transition: border-color var(--hover-transition) cubic-bezier(0.33, 0.96, 0.49, 1.01);
    }

    &:checked {
        &::after {
            border-color: var(--checkbox-check-color--checked);
        }
    }

    &:not(:checked) {
        --checkbox-color-state: var(--checkbox-color);
    }

    &:focus {
        border: 1px solid var(--checkbox-color--checked);
        outline: none;
    }
`;

export const FormCheckboxTest = styled.span`
    padding-left: 44px;
`;

export const FormLink = styled(Link)`
    color: var(--background-color);
    margin-left: 10px;
    border-bottom: 1px solid transparent;
    transition: border var(--hover-transition);

    &:focus {
        outline: none;
        border-bottom: 1px solid var(--background-color);
    }

    &:hover {
        border-bottom: 1px solid var(--background-color);
    }
`;

export const FormCheckBoxLabel = styled.label`
    padding: 20px 0 0 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    user-select: none;
`;
