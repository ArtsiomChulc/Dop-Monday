import React from 'react';
import { CurrentBankomat } from "./CurrentBankomat";
import { MoneyType } from "./App";
import styled from 'styled-components';

type CityPropsType = {
    data: MoneyType[] //встречаем денюжки
}

export const City = (props: CityPropsType) => {

    // пока это пропускам
    const mappedMoney = props.data.map((el: MoneyType, index) => (
        <CurrentBankomat
            key={index}
            money={el}
        />
    ))


    return (
        <WrapperBanknotes>
            {/* <div>Ну все парни, мапимся -выводим наши денюжки</div>
            <div>На верстку ПОКА не обращаем внимания , сейчас занимаемся логикой</div> */}
            {/* <div className='banknotes-wrap'>{props.data.map((el, i) => {
                return (
                    <div className='banknote'>
                        <div className='banknotes-type'>{el.banknotes}</div>
                        <div className='banknotes-number'>{el.number}</div>
                        <div className='banknotes-nominal'>{el.value}</div>
                    </div>

                )
            })}</div> */}
            {mappedMoney}
        </WrapperBanknotes>
    );
};



//1
// Вроде все норм, но нужно причесать код. Давайте создадим const mappedMoney = props.data.map(el=>el...)
// Т.е. нам нужно вынести map из вертски, оставив в верстке только mappedMoney

//2
// Отлично, но теперь давайте совсем все сделаем по красоте. Вынесем верстку в отдельную компоненту и ее замапим!
// Ну и наконец давайте версточку натянем, для этого будем использовать StyledComponents
// yarn add styled-components
// yarn add @types/styled-components

//3
// Вроде все норм, ну точнее почти норм- дублирование-это грех. Хотелось бы от него избавиться.
// И StyledComponents нам в этом отлично поможет, ведь он может принимать пропсы!
// Как это сделать в документашке

const WrapperBanknotes = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
  margin-top: 30px;
`