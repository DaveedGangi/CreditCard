// Write your code here

import {useState} from 'react'

import {
  CreditCardBg,
  PaymentMethodBg,
  InputForName,
  InputForNumber,
  CreditCardOuterBg,
  CardNumber,
  CardUserName,
  CreditCardHeading,
  PaymentHeading,
  PaymentOuterBg,
  Bg,
  HolderPara,
} from './styledComponents'

const CreditCard = () => {
  const [number, setNumber] = useState()
  const [userName, setUserName] = useState('')

  const changeNumber = event => {
    setNumber(event.target.value)
  }

  const changeName = event => {
    setUserName(event.target.value)
  }

  return (
    <Bg>
      <CreditCardOuterBg>
        <CreditCardHeading>CREDIT CARD</CreditCardHeading>
        <CreditCardBg data-testid="creditCard">
          <CardNumber>{number}</CardNumber>
          <HolderPara>CARDHOLDER NAME</HolderPara>
          <CardUserName>{userName.toUpperCase()}</CardUserName>
        </CreditCardBg>
      </CreditCardOuterBg>

      <PaymentOuterBg>
        <PaymentMethodBg>
          <PaymentHeading>Payment Method</PaymentHeading>

          <div>
            <InputForNumber
              type="text"
              onChange={changeNumber}
              value={number}
              placeholder="Card Number"
            />
          </div>
          <div>
            <InputForName
              type="text"
              onChange={changeName}
              value={userName}
              placeholder="Cardholder Name"
            />
          </div>
        </PaymentMethodBg>
      </PaymentOuterBg>
    </Bg>
  )
}

export default CreditCard
