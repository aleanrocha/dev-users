import styled from 'styled-components'

export const BackgroundImage = styled.div`
  width: 100%;
  min-height: 200px;
  border-radius: 2rem;
  background-image: linear-gradient(to right, #ff3c0021, #e65b31, #ff3c0021);
  display: flex;
  justify-content: center;
`
export const Image = styled.img`
  width: 60%;
  margin: auto;
  @media screen and (max-width: 480px) {
    width: 85%;
  }
`
