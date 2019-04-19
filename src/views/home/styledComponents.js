import styled from "styled-components";

export const Header = styled.div`
    box-shadow:0 0.01rem 0.2rem hsla(195,9%,83%,.3);
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:0.38rem;
    line-height:0.38rem;
    background:#fff;
    display:flex;
    .city{
        font-size:.12rem;
        padding:0 .13rem;
        width:0.82rem;
    };
    .search{
        display:flex;
        align-items:center;
        font-weight:800;
    }

`