import React from "react";

import style from "./Search.module.css";

import {Button, TextField} from "@material-ui/core";
import {SearchinType, setInputAC} from "../../Redux/table-reducer";
import {useDispatch} from "react-redux";


type HeaderPropsType = {
    input: SearchinType
    setValue: (value: SearchinType) => void
}

export const Search = (props: HeaderPropsType) => {
    const dispatch = useDispatch()


    return (
        <div className={style.info}>
            <h3>Список экспертов по оценке руководителей</h3>
            <div className={style.container}>

                <div className={style.boxes}>


                    <TextField
                        className={style.textFields}
                        type={'text'}
                        variant="outlined"
                        margin="normal"
                        label="ID"
                        placeholder={"Введите ID"}
                        value={props.input.id}
                        onChange={(e: any) => {
                            dispatch(setInputAC({
                                ...props.input,
                                id: e.currentTarget.value
                            }))
                        }}
                        onKeyPress={(e: any) => {
                            if (e.key === 'Enter') {
                                props.setValue(props.input)
                            }
                        }}

                    />
                    <TextField
                        className={style.textFields}
                        type={'text'}
                               variant="outlined"
                               margin="normal"
                               label="ФИО"
                               placeholder={"Введите ФИО участника"}
                               value={props.input.name}
                               onChange={(e) => {
                                   dispatch(setInputAC({
                                       ...props.input,
                                       name: e.currentTarget.value
                                   }))
                               }}
                               onKeyPress={(e: any) => {
                                   if (e.key === 'Enter') {
                                       props.setValue(props.input)
                                   }
                               }}
                    />
                    <TextField
                        className={style.textFields}
                        type={'text'}
                               variant="outlined"
                               margin="normal"
                               label="Должность"
                               placeholder={"Введите должность участника"}
                               value={props.input.position}
                               onChange={(e) => {
                                   dispatch(setInputAC({
                                       ...props.input,
                                       position: e.currentTarget.value
                                   }))
                               }}
                               onKeyPress={(e: any) => {
                                   if (e.key === 'Enter') {
                                       props.setValue(props.input)
                                   }
                               }}
                    />
                    <TextField
                        className={style.textFields}
                        type={'text'}
                               variant="outlined"
                               margin="normal"
                               label="Почта (логин)"
                               placeholder={"Введите почту/логин участника"}
                               value={props.input.email}
                               onChange={(e) => {
                                   dispatch(setInputAC({
                                       ...props.input,
                                       email: e.currentTarget.value
                                   }))
                               }}
                               onKeyPress={(e: any) => {
                                   if (e.key === 'Enter') {
                                       props.setValue(props.input)
                                   }
                               }}
                    />


                    <Button
                        className={style.btn}
                        color="primary"
                        variant='contained'
                        onClick={() => {
                        props.setValue(props.input)
                    }}>Найти</Button>
                </div>

            </div>
        </div>

    )
}