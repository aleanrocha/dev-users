import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 1rem;
  padding: 2rem 1rem;
  box-shadow: 1px 1px 8px #fff;
`

export const Title = styled.h1`
  font-size: 1.5rem;
  text-transform: uppercase;
  color:#ff5b28;
`

export const Nav = styled.nav`
  display: flex;
  gap: 1rem;
  > a {
    color: #fff;
    text-decoration: none;
    transition: 0.3s;
    &:hover {
      color:#ff5b28;
    }
  }
`
