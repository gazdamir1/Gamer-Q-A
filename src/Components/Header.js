import React from "react"
import jwt_decode from "jwt-decode"

class Header  extends React.Component {
  render(){
    return(
      <div>
        <header className="header">
            {this.props.title}
            <div className='logo'>GamerGen Q&A</div>
            <nav>
              <a  href='./'><button className='hdbutton' type="button">Главная</button></a>
              <a  href='/profilepage'><button className='hdbutton' type="button">Профиль</button></a>
              <a  href='/aboutuspage'><button className='hdbutton' type="button">О нас</button></a>
              <a  href='/createquestion'><button className='hdbutton' type="button">Задать вопрос</button></a>
              <a  href='/newsubscribe'><button className='hdbutton' type="button">Подписка</button></a>
            </nav>
        </header>
        <header className="header">
        {this.props.title}
          <div className="SearchDiv">
            <input class="search" type="text" name="name" />
              {
                localStorage.getItem('token') === null
                    ? <span>
                    <a  href='/enterpage'><button className='hdbutton1' type="button">Вход</button></a>
            <a  href='/regpage'><button className='hdbutton1' type="button">Регистрация</button></a>
                    </span>
                    : <div>{jwt_decode(localStorage.getItem('token')).Name}</div>
            }
          </div>
          
        </header>
    </div>  
    )
  }
}

export default Header