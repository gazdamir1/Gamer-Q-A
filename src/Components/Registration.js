import React from "react"

class Registration  extends React.Component { 
  render(){
    return(
        <div className="Enter">
            <h3 className="EntPageMain">Регистрация</h3>
            <p>Введите электронную почту</p>
            <input class="InpEntForm" type="text" name="mail" />
            <p>Введите логин</p>
            <input class="InpEntForm" type="text" name="login" />
            <p>Введите пароль</p>
            <input class="InpEntForm" type="text" name="password" />
            <a href='/enterpage'><div><button className='EntButton' type="submit">Зарегистрироваться</button></div></a>
        </div>
    )
  }
}

export default Registration