import './App.module.css';
import React from "react";
import styles from './App.module.css'
import {TableBigListOfContacts} from "./Components/Table/TableBigListOfContacts";

function App() {

    return (
        <div className={styles.App}>
            <div className={styles.newContainer}>
                <TableBigListOfContacts/>
            </div>

        </div>
    );
}

export default App;
