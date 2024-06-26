import React from "react"


export default function Question({title,description,data}){

    

    return(
        <div className="Question">
            <div className="firstname">{title}</div>
            <div className="questiontype">{description}</div>
            <div className="date">{data}</div>
            <div className="bio"></div>
            <div className="isHappy"></div>
        </div>
    )
}
