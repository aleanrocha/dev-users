import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  max-width: 720px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 3rem 1rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;
  text-align: center;
`

export const ContainerUser = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
`

export const Title = styled.h2`
  text-align: center;
  font-size: 2rem;
`

export const CardUser = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
  background-color: rgba(0,0,0,0.3);
  padding: 1rem;
  border-radius: 1rem;
  width: 100%;
  max-width: 320px;
  transition: 0.3s;
  position: relative;
  &:hover {
    box-shadow: 1px 1px 8px #ff5b28;
  }
  > :first-child {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    > p {
      font-size: 0.9rem;
    }
  }
`
export const ImageUser = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
`
export const DeleteUser = styled.span`
  background-color: #ff1e00;
  width: 25px;
  height: 25px;
  line-height: 25px;
  text-align: center;
  font-size: 1.5rem;
  border-radius: 50%;
  cursor: pointer;
  transition: 0.3s;
  position: absolute;
  top: 0;
  left: 100%;
  transform: translateX(-50%);
  &:hover {
    opacity: 0.8;
  }
`
export const InfoUser = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  > h3 {
    text-transform: capitalize;
  }
  > p:nth-last-child(1) {
    opacity: 0.5;
  }
`
  
