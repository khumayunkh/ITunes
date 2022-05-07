import React from "react";
import style from './header.module.css'

export const Header = () => {
    return(
        <div className={style.header}>
            <div className={style.container}>
                <div className={style.header_in}>
                    <div className={style.logo}>
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCPFQWPFKoi_sen2wcyUGI3bEbro9h0pCkpOj54oVNdbeD4QwT6wNpjlvLEA4JZBh8zcM&usqp=CAU'/>
                    </div>
                    <div className={style.input}>
                        <input type='text' />
                    </div>
                </div>
            </div>
        </div>
    )
}