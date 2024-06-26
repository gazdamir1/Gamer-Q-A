import React from "react"
import Header from "../Header"
import BodPic from "../BodPic"
import Footer from "../Footer"
import QuestionBlock from "../QuestionBlock"
import SelectMenu from "../SelectMenu"

export const MainPage = () =>{
    return(
        <div > 
      <Header></Header>
      <BodPic></BodPic>
      <QuestionBlock></QuestionBlock>
      <SelectMenu></SelectMenu>
      <Footer></Footer>
    </div>

    )
}