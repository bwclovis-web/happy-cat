import styled from "styled-components"

const StyledContactForm = styled.form`
    background-color: rgba(0,0,0,0.05);
    padding: 1rem 1rem 4rem;
    border-radius: var(--radius);
    border: 2px solid rgba(0,0,0, 0.1);
    box-shadow:  0 0 16px rgba(0,0,0,0.12);

    legend {
        padding: 2rem;
    }

    fieldset, textarea {
        border: 0;
    }

    .input-container {
        display: flex;
        flex-direction: column;
        margin-bottom: 1rem;
        font-size: 1.4rem;
        font-weight: 500;
        padding: 4rem 0 1rem;
        text-transform: uppercase;
        letter-spacing: .1rem;
        position: relative;
        margin-bottom: 2rem;

        &:last-child {
            padding-top: 1rem;
        }

        &.top-label {
            padding: 0;

            label {
                position: relative;
            }
        }

        input {
            position: absolute;
            bottom: 0;
            width: 100%;
            font-size: 1.8rem;
            font-weight: 500;
            padding: 1rem;
            background-color: rgba(255,255,255,0.3);
            border-radius: var(--radius);
        }

        textarea {
            width: 100%;
            font-size: 1.8rem;
            font-weight: 500;
            padding: 1rem;
            background-color: rgba(255,255,255,0.3);
            border-radius: var(--radius);
        }

        input:focus,
        textarea:focus,
        input:valid {
            box-shadow: 0 0 5px rgba(0,0,0, 2.1);
            outline: none;
            transition: all .1s ease-in-out;

             & ~ label {
                 transition: all .2s ease-in-out;
                 font-size: 1.2rem;
                 transform: translateY(-3rem);
                 padding-left: 0;
             }
        }

        label {
            position: absolute;
            padding: 1rem;
            bottom: 0rem;
        }
    }

    textarea {
        resize: none;
    }
`

export default StyledContactForm