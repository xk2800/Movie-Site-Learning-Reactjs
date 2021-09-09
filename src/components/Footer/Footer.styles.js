import styled from "styled-components";

export const Wrapper = styled.div`
    background: var(--darkGrey);
    padding: 40px 0;
    margin-top: 50px;
`;

export const Content = styled.div`
    max-width: var(--maxWidth);
    margin: 0 auto;
    padding: 0 20px;
    color: var(--white);
    display: flex;
    justify-content: space-between;

    #link{
        color: var(--white)
    }

    #link:hover{
        color: var(--lightGrey)
    }
`;