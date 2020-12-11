import {defArr} from "../Array";

export type SearchinType = {
    id:number | string,
    name:string
    position:string
    email:string
}
let initialState = {
    input: {
        id:'',
        name:'',
        position:'',
        email:''
    } as SearchinType,
    array: defArr as Array<defArrType>,
    modalForNewContact: false,
    currentPage: 1,
    postPerPage: 5,




}


export function tableReducer(state: InitialStateType = initialState, action: AllACTypes): InitialStateType {
    switch (action.type) {
        case SET_NEW_ARR:
            return {...state, array: action.array}
        case SET_INPUT:
            return {...state, input: action.value}
        case SET_ADD_NEW_CONTACT:
            const newContact = {
                dataCreated: action.newContact.dataCreated,
                id: Math.floor(Math.random() * 1000),
                name: action.newContact.name,
                position: action.newContact.position,
                email: action.newContact.email,
                password: action.newContact.password,
                tel: action.newContact.tel,
            }
            return {
                ...state,
                array: [newContact, ...state.array]
            }
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.pageNumber}

        case SET_MODAL_FOR_NEW_CONTACT: {
            return {...state, modalForNewContact: action.value}
        }

        default:
            return state
    }
}

export const setCurrentPageAC = (pageNumber: number): SetCurrentPageACType => ({type: SET_CURRENT_PAGE, pageNumber})
export const setNewArrAC = (array: Array<defArrType>): setNewArrACType => ({type: SET_NEW_ARR, array})
export const setInputAC = (value: SearchinType): setInputACType => ({type: SET_INPUT, value})
export const setAddNewContactAC = (newContact: newContactType): SetAddNewContactACType => ({
    type: SET_ADD_NEW_CONTACT,
    newContact
})
export const setModalForNewContactAC = (value: boolean): SetModalForNewContactACType => ({
    type: SET_MODAL_FOR_NEW_CONTACT,
    value
})




type SetCurrentPageACType = {
    type: typeof SET_CURRENT_PAGE
    pageNumber: number
}



type SetModalForNewContactACType = {
    type: typeof SET_MODAL_FOR_NEW_CONTACT
    value: boolean
}

type SetAddNewContactACType = {
    type: typeof SET_ADD_NEW_CONTACT
    newContact: newContactType

}
type newContactType = {
    dataCreated: string
    name: string
    position: string
    email: string,
    password: string
    tel: string,
}


type setNewArrACType = {
    type: typeof SET_NEW_ARR
    array: Array<defArrType>
}

type setInputACType = {
    type: typeof SET_INPUT
    value: SearchinType
}

type AllACTypes =
    | setNewArrACType
    | setInputACType
    | SetAddNewContactACType
    | SetModalForNewContactACType
    | SetCurrentPageACType


export const SET_NEW_ARR = "SET_NEW_ARR"
export const SET_INPUT = "SET_INPUT"
export const SET_ADD_NEW_CONTACT = "SET_ADD_NEW_CONTACT"
export const SET_MODAL_FOR_NEW_CONTACT = "SET_MODAL_FOR_NEW_CONTACT"
export const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"



export type InitialStateType = {
    array: Array<defArrType>
    input: SearchinType,
    modalForNewContact: boolean
    currentPage: number,
    postPerPage: number,
}

export type defArrType = {
    "id": number,
    "name": string,
    "position": string
    "email": string,
    "tel": string
    "dataCreated": string
    "password": string
}







