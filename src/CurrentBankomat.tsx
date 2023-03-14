import React from 'react';
import styled from 'styled-components';
import { MoneyType } from "./App";

type CurrentBankomatPropsType = {
    money: MoneyType
}
export const CurrentBankomat = (props: CurrentBankomatPropsType) => {

    return (
        props.money.banknotes === 'Dollars' ? <BanknoteGreen>
            <Banknotes>{props.money.banknotes}</Banknotes>
            <Number>{props.money.number}</Number>
            <Value>{props.money.value}</Value>
        </BanknoteGreen>
            : <BanknoteBlue>
                <Banknotes>{props.money.banknotes}</Banknotes>
                <Number>{props.money.number}</Number>
                <Value>{props.money.value}</Value>
            </BanknoteBlue>
        // <ButtonStyled>
        //     {props.money.banknotes}
        // </ButtonStyled>
    );
};

const BanknoteGreen = styled.div`
  background-color: green;
  width: 300px;
  padding: 10px 60px;
  font-size: 30px;
  color: #fff;
`
const BanknoteBlue = styled.div`
  background-color: blue;
  width: 300px;
  padding: 10px 60px;  
  font-size: 30px;
  color: #fff;
`
const Banknotes = styled.div`
  text-align: left;
`
const Number = styled.div`
  text-align: right;
  font-size: 16px;
`
const Value = styled.div`
  text-align: left;
`
