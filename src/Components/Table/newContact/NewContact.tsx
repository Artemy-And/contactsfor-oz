import React from "react";
import Modal from "react-modal";
import style from "./NewContact.module.css";
import {
    Button,
    MenuItem,
    TextField,
} from "@material-ui/core";
import {setAddNewContactAC, setModalForNewContactAC} from "../../Redux/table-reducer";
import {useDispatch} from "react-redux";
import {ContType} from "../TableBigListOfContacts";

type NewContactPropsType = {
    modalForNewContact: boolean
    customStyles: any
    cont: ContType
    setCont: ({}: ContType) => void
}


const positions = [
    {
        value: 'Manager',
        label: 'manager',
    },
    {
        value: 'Specialist',
        label: 'Specialist',
    },
    {
        value: 'developer',
        label: 'Developer',
    },
    {
        value: 'HR',
        label: 'HR',
    },
    {
        value: 'Sales specilaist',
        label: 'Sales specilaist',
    },
];


export const NewContact = (props: NewContactPropsType) => {
    const dispatch = useDispatch()
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        props.setCont({
            ...props.cont,
            position: event.target.value
        })
    };
    return (
        <Modal
            isOpen={props.modalForNewContact}
            style={props.customStyles}
            contentLabel="Example Modal"
        >


            <div className={style.info}>
                <div className={style.btnContainer}>
                    <button className={style.btnClose}
                            onClick={() => {
                                dispatch(setModalForNewContactAC(false))
                            }}>X
                    </button>
                </div>
                <div className={style.par}>
                    <h3>Добавление данных о экспертах по оценке и руководителей</h3>
                </div>

                <div className={style.textFiledContainer}>

                    <TextField
                        color="primary"
                        className={style.textFields}
                        type={'text'}
                        variant="outlined"
                        margin="normal"
                        label="Дата регистрации"
                        placeholder={"data"}
                        value={props.cont.dataCreated}
                        onChange={(e) => {
                            props.setCont({
                                ...props.cont,
                                dataCreated: e.target.value
                            })
                        }}/>
                    <TextField
                        color="primary"
                        className={style.textFields}
                        type={'text'}
                        variant="outlined"
                        label="ФИО"
                        margin="normal"
                        placeholder={"ФИО"}
                        value={props.cont.name}
                        onChange={(e) => {
                            props.setCont({
                                ...props.cont,
                                name: e.target.value
                            })
                        }}/>

                    <TextField
                        color="primary"
                        className={style.textFields}
                        id="standard-select-currency"
                        select
                        label="Должность"
                        // value={currency}
                        value={props.cont.position}
                        onChange={handleChange}
                        helperText="Введите должность"
                    >
                        {positions.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>


                    <TextField
                        color="primary"
                        className={style.textFields}
                        type={'text'}
                        variant="outlined"
                        margin="normal"
                        label="Почта (логин)"
                        placeholder={"Email"}
                        value={props.cont.email}
                        onChange={(e) => {
                            props.setCont({
                                ...props.cont,
                                email: e.target.value
                            })
                        }}/>
                    <TextField
                        color="primary"
                        className={style.textFields}
                        type={'text'}
                        variant="outlined"
                        margin="normal"
                        label="Пароль"
                        value={props.cont.password}
                        placeholder={"Пароль"}
                        onChange={(e) => {
                            props.setCont({
                                ...props.cont,
                                password: e.target.value
                            })
                        }}/>
                    <TextField
                        color="primary"
                        className={style.textFields}
                        type={'text'}
                        variant="outlined"
                        margin="normal"
                        label="Телефон, привязанный к мессенджеру"
                        value={props.cont.tel}
                        placeholder={"Phone"}
                        onChange={(e) => {
                            props.setCont({
                                ...props.cont,
                                tel: e.target.value
                            })
                        }}/>


                    <Button
                        className={style.btn}
                        variant="contained"
                        color="primary"
                        disabled={(props.cont.name.length > 0) && props.cont.email.length > 0 && props.cont.tel.length > 0 ? false : true}
                        onClick={() => {
                            dispatch(setAddNewContactAC(props.cont))
                            dispatch(setModalForNewContactAC(false))
                        }}>
                        ADD
                    </Button>
                </div>


            </div>

        </Modal>
    )
}