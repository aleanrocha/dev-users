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
`

export const Title = styled.h2`
  text-align: center;
  font-size: 2rem;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  max-width: 520px;
  margin: 0 auto;
  > div {
    display: flex;
    gap: 1rem;
    > label {
      width: 50%;
    }
  }
`

export const Label = styled.label`
  font-weight: bold;
  > span {
    color: #ff3c00;
  }
`

export const Select = styled.select`
  background-color: #fff;
  width: 100%;
  padding: 0.6rem;
  border: none;
  outline: none;
  border-radius: 0.4rem;
  margin-top: 0.4rem;
  cursor: pointer;
`

export const Input = styled.input`
  width: 100%;
  padding: 0.6rem;
  border: none;
  outline: none;
  border-radius: 0.4rem;
  margin-top: 0.4rem;
  &[type=submit] {
    background:  #ff5b28 linear-gradient(to right, #ff3c00ae, #ff5b28, transparent);
    color: #fff;
    max-width: 145px;
    margin: 1rem auto;
    font-weight: bold;
    font-size: 1rem;
    padding: 0.8rem;
    border-radius: 10rem;
    transition: 0.3s;
    cursor: pointer;
    &:hover {
      opacity: 0.9;
    }
  }
`
