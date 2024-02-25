// Style your elements here

import styled from 'styled-components'

export const CreditCardBg = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/hooks/credit-card-bg.png');
  background-size: cover;
  height: 250px;
  width: 320px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 22px;
  border-radius: 25px;
  margin-top: 33px;
  @media screen and (min-width: 767px) {
    width: 350px;
    margin-top: 77px;
  }
`

export const PaymentMethodBg = styled.div`
  box-shadow: 4px 8px 12px 16px #d3d9e0;
  height: 240px;
  width: 320px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 33px;
  align-items: center;
  border-radius: 7px;
`

export const InputForNumber = styled.input`
  margin-top: 12px;
  outline: none;
  padding-left: 6px;
`
export const InputForName = styled.input`
  margin-top: 12px;
  outline: none;
  padding-left: 6px;
`
export const CreditCardOuterBg = styled.div`
  background-image: linear-gradient(to bottom, #3b4b69, #344e7a);
  padding-top: 8px;
  height: 440px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  font-family: Roboto;
  @media screen and (min-width: 767px) {
    width: 50%;
    height: 100vh;
  }
`
export const CardNumber = styled.p`
  font-family: 'Roboto';
  margin-top: 22px;
  margin-bottom: 33px;
  font-size: 24px;
`

export const CardUserName = styled.p`
  font-family: 'Roboto';
  margin-top: 7px;
  font-size: 17px;
`
export const HolderPara = styled.p`
  font-size: 14px;
  color: #d3d9e0;
`
export const CreditCardHeading = styled.h1`
  border-bottom: 2px solid #ffd773;
`
export const PaymentHeading = styled.h2`
  font-family: 'Roboto';
  color: #475569;
`
export const PaymentOuterBg = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 22px;
  @media screen and (min-width: 767px) {
    width: 50%;
  }
`
export const Bg = styled.div`
  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media screen and (min-width: 767px) {
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: center;
  }
`
