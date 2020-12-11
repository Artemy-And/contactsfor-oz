import React, {useState} from "react";
import style from './Table.module.css'
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../Redux/Store";
import {
    defArrType,
    setModalForNewContactAC,
    setNewArrAC, setCurrentPageAC, SearchinType
} from "../Redux/table-reducer";
import {Button} from "@material-ui/core";

import {NewContact} from "./newContact/NewContact";
import {Paginator} from "../paginator/Pagination";
import {Search} from "./Search/Search";


const customStyles = {
    content: {
        width: '750px',
        height: '750px',
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        zindex: '9999'

    },
};


export const TableBigListOfContacts = () => {
    const dispatch = useDispatch()
    const input = useSelector<RootStateType, SearchinType>(state => state.table.input)
    const [cont, setCont] = useState<ContType>({
        dataCreated: '',
        name: '',
        email: '',
        tel: '',
        password: '',
        position: ''
    })
    const modalForNewContact = useSelector<RootStateType, boolean>(state => state.table.modalForNewContact)
    const currentPage = useSelector<RootStateType, number>(state => state.table.currentPage)
    const postPerPage = useSelector<RootStateType, number>(state => state.table.postPerPage)
    const array = useSelector<RootStateType, Array<defArrType>>(state => state.table.array)
    const [newArr] = useState(array)



    //searching contact
    const setValue = (value: SearchinType) => {
        if (input.id) {
            let newFilteredArr = array.filter(el => el.id === Number(value.id))
            dispatch(setNewArrAC(newFilteredArr))
        } else if (input.name.length >= 1) {
            debugger
            let filteredContacts = (array.filter((i: defArrType) => {
                let matchNames = i.name.toLowerCase()
                return matchNames.match(value.name)
            }))
            dispatch(setNewArrAC(filteredContacts))
        } else if (input.position.length >= 1) {
            let filteredContacts = (array.filter((i: defArrType) => {
                let matchNames = i.position.toLowerCase()
                return matchNames.match(value.position)
            }))
            dispatch(setNewArrAC(filteredContacts))
        } else if (input.email.length >= 1) {
            let filteredContacts = (array.filter((i: defArrType) => {
                let matchNames = i.email.toLowerCase()
                return matchNames.match(value.email)
            }))
            dispatch(setNewArrAC(filteredContacts))
        }
        if (Number(value.id) === 0 && (value.email.length === 0) && (value.name.length === 0) && (value.position.length === 0)
        ) {
            dispatch(setNewArrAC(newArr))
        }
    }


    //getCurrent contact
    const indexOfLastPost = currentPage * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage
    const currentPost = array.slice(indexOfFirstPost, indexOfLastPost)

    //set contact
    const paginate = (pageNumber: number) => {
        dispatch(setCurrentPageAC(pageNumber))
    }

    return (
        <div className={style.container}>

            <Search input={input} setValue={setValue}/>

            <NewContact
                modalForNewContact={modalForNewContact}
                customStyles={customStyles}
                cont={cont}
                setCont={setCont}
            />
            <div className={style.newClassName}>
                <div className={style.tableForHover}>
                    <div className={style.myTableHeader}>
                        <div className={style.box1}>
                            <p className={style.headerName}>
                                Id
                            </p>
                        </div>
                        <div className={style.box2}>
                            <p className={style.headerName}>Дата регистрации</p>
                        </div>
                        <div className={style.box3}>
                            <p className={style.headerName}>ФИО</p>
                        </div>
                        <div className={style.box4}>
                            <p className={style.headerName}>Должность</p>
                        </div>
                        <div className={style.box5}>
                            <p className={style.headerName}>Почта (логин)</p>
                        </div>
                        <div className={style.box6}>
                            <p className={style.headerName}>Пароль</p>
                        </div>
                        <div className={style.box7}>
                            <p className={style.headerName}>Телефон, привязанный к мессенджеру</p>
                        </div>
                    </div>
                    {currentPost.map((el: defArrType) => {
                        return (
                            <div className={style.myTable} key={el.id}>
                                <div className={style.box1}>
                                    <p>{el.id}</p>
                                </div>
                                <div className={style.box2}>
                                    <p>{el.dataCreated}</p>
                                </div>
                                <div className={style.box3}>
                                    <p>{el.name}</p>
                                </div>
                                <div className={style.box4}>
                                    <p>{el.position}</p>

                                </div>
                                <div className={style.box5}>
                                    <p className={style.emailInfo}>{el.email}</p>
                                </div>
                                <div className={style.box6}>
                                    <p>{el.password}</p>
                                </div>
                                <div className={style.box7}>
                                    <p>{el.tel}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>

            </div>
            <div className={style.footer}>
                <div className={style.paginator}>
                    <Paginator postsPerPage={postPerPage} totalPosts={array.length}
                               paginate={paginate}/>
                </div>

                <Button
                    className={style.btnAddCont}
                    variant='contained'
                    color="primary"
                    onClick={() => {
                        dispatch(setModalForNewContactAC(true))
                    }}>Добавить Контакт
                </Button>
            </div>

        </div>)
}

export type ContType = {
    dataCreated: string
    name: string,
    email: string,
    password: string
    position: string
    tel: string,
}
