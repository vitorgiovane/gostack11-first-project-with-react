import styled, { css } from 'styled-components'
import { shade } from 'polished'

export const Title = styled.h1`
  font-size: 48px;
  color: #3A3A3A;
  margin-top: 70px;
  max-width: 450px;
  line-height: 56px;
`

interface FormProps {
  hasError: boolean
}

export const Form = styled.form<FormProps>`
  margin-top: 40px;
  max-width: 700px;

  display: flex;

  input {
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border: 2px solid #ffffff;
    border-right: 0;
    border-radius: 5px 0 0 5px;
    color: #3a3a3a;

    &::placeholder {
      color: #a8a8b3;
    }

    ${(props) => props.hasError && css`
      border-color: #c53030;
    `}
  }

  button {
    width: 210px;
    height: 70px;
    border: 0;
    border-radius: 0 5px 5px 0;
    background-color: #04d361;
    color: #ffffff;
    font-weight: bold;
    transition: background-color 0.2s;

    &:hover {
      background-color: ${shade(0.2, '#04d361')};
    }
  }
`

export const Repositories = styled.div`
  margin-top: 80px;
  max-width: 700px;

  a {
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: flex;
    align-items: center;
    text-decoration: none;
    transition: transform 0.2s;

    & + a {
      margin-top: 16px;
    }

    &:hover {
      transform: translateX(10px)
    }

    img {
      width: 50px;
      border-radius: 50%;
    }

    div {
      margin: 0 16px;
      flex: 1;

      strong {
        font-size: 20px;
        color: #3D3D4D;
      }

      p {
        font-size: 18px;
        color: #a8a8b3;
        margin-top: 4px;
      }
    }

    svg {
      margin-left: auto;
      color: #cbcbd6;
    }
  }
`

export const Error = styled.div`
  color: #c53030;
  margin-top: 8px;
`
