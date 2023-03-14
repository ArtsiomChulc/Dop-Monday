import React from 'react';
import styled from 'styled-components';
import { MoneyType } from "./App";

type CurrentBankomatPropsType = {
    money: MoneyType
}
export const CurrentBankomat = (props: CurrentBankomatPropsType) => {

    return (
        <div>
            {props.money.banknotes}
        </div>
    );
};

const Button = styled.a`
  

`
