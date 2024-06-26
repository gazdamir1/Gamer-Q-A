import React from "react"

class Enter  extends React.Component {
  render(){
    return(
      <div className="Enter">
          
            <h3 className="EntPageMain">Вход</h3>
            <p>Логин</p>
            <input class="InpEntForm" type="text" name="login" />
            <p>Пароль</p>
            <input class="InpEntForm" type="text" name="password" />
            <h5><a href='/enterpage' className="ForgPas">Забыли пароль?</a></h5>
            <a href='./'><div><button className='EntButton' type="submit">Войти</button></div></a>
            <a href='/regpage'><div><button className='EntButton' type="button">Регистрация</button></div></a>
          
          
        </div>
    )
  }
}

export default Enter