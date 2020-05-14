import React from 'react';
import '../App.css';


export const Formreg = () => {
    function OnsubmitReg(){
        console.log('send');
    }

/*    
function OnsubmitReg(){
    let data = JSON.stringify({ name: $('#name').val, password: $('#password').val() })
    $.ajax({
        type: "POST",
        url: "users/order",
        data: data,
        contentType: "application/json",
        success: function () {
            alert("Данные сохранены");
            //$('#proceedSave').modal();
            console.log("Настройки успешно сохранены")
        },
        error: function () {
            alert("Ошибки при сохранении");
            //$('#proceedSave').modal();
            console.log("Ошибка")
        }
    });
}*/
    return(
        <div className="containerentry" >
            <form className="formentry" id="popupWin">
                <ul>
                    <li>
                    <span>Логин</span>
                    <input id="name" name="login" type="text"/>
                    </li>
                    <li>
                        <span>Пороль</span>
                    <input id="password" name="password" type="password"/>
                    </li>
                    <li>
                    <input type="submit" value="Вход" name="submitform"
                    onClick={() => OnsubmitReg()} />
                    </li>
                </ul>
            </form>
        </div>
    )
}

export default Formreg;