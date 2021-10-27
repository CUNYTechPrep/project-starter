import styled from "styled-components";

export const ResponsiveParentContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    width: 100vw;
    height: 100vh;

    main {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: column;

        @media (max-width: 30em) {
            margin: 20px;
            width: calc(100%-40px);
            height: 100%;
        }
        @media (min-width: 30em) {
            width: 100%;
            height: 100%;
        }
    }
`;

export const ResponsiveContentContainer = styled.div`
    @media (min-width: 30em) {
        max-width: 50rem;
    }
`;
