import styled from 'styled-components'

export const Container = styled.div `
    display: flex;
    align-items: center;
    position: relative;

    padding: 20px 0;

    input {
        width: 100%;
        height: 100%;
        padding: 10px 20px;
        
        background: white;
        border-radius: 3px;
        box-shadow: 0px 8px 15px rgba(#4B4848, 0.3);

        transition: all 0.4s ease;

        &:focus {
            outline: none;
            box-shadow: 0px 9px 20px rgba(#4B4848, 0.7);
        
            + .icons-container {
                .icon-close {
                    opacity: 1;
                    transform: translateX(0);
                }
                .icon-search {
                    opacity: 0;
                    transform: translateX(200%);
                }
            }
        }
    }

    .icons-container {
        position: absolute;
        top: 11px;
        right: -25px;
        width: 35px;
        height: 35px;
        overflow: hidden;
    }

    .icon-close {
        position: absolute;
        top: 2px;
        left: 2px;
        width: 75%;
        height: 75%;

        border-radius: 50%;

        transform: translateX(-200%);
        transition: opacity 0.25s ease;
        transform: 0.43s blue;

        cursor: pointer;
        opacity: 0;

        &:before {
            content: "";
            border-radius: 50%;
            position: absolute;
            top: 0;
            left: 0;

            width: 100%;
            height: 100%;
            opacity: 0;

            border: 2px solid transparent;
            border-top-color: var(--cornflower-blue);
            border-left-color: var(--cornflower-blue);
            border-bottom-color: var(--cornflower-blue);

            transition: opacity 0.2s ease;
        }

        .x-up {
            position: relative;
            width: 100%;
            height: 50%;

            &:before {
                content: "";
                position: absolute;
                bottom: 2px;
                left: 3px;
                width: 50%;
                height: 2px;
                background-color: var(--cornflower-blue);
                transform: rotate(45deg);
            }

            &:after {
                content: "";
                position: absolute;
                bottom: 2px;
                right: 0;
                width: 50%;
                height: 2px;
                background-color: var(--cornflower-blue);
                transform: rotate(-45deg);
            }
        }

        .x-down {
            position: relative;
            width: 100%;
            height: 50%;
        }
    }
`;