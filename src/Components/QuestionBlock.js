import React from "react"
import Users from "./Users"
import AddUser from "./AddUser"
import axios from "axios"
import baseApiClient from "../api/baseApiClient"
import Question from "./Question"


class QuestionBlock  extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      
        users: [],
        questions:[]
    }  
    
    this.addUser = this.addUser.bind(this)
    this.deleteUser = this.deleteUser.bind(this)
    this.editUser = this.editUser.bind(this)
  }

  componentDidMount(){
    baseApiClient.get('/api/Question/AllQuestions').then(response=>{
      if(response.status===200){
        this.setState({questions:response.data})
      }
      else{
        console.log(`error on '${response.config.url}' with status code '${response.status}'`)
      }
    })
  }


  render(){
    return(
            <div className="QuestionBlock"> 
      
      <aside>
        <AddUser onAdd={this.addUser}/>
      </aside>
      <main>
        {/* <Users users={this.state.users} onEdit={this.editUser} onDelete={this.deleteUser}/> */}
        {this.state.questions.map(item=>{
          <Question title={item.title} desc={item.description} data={item.data}></Question>
        })}
      </main>
      </div>
    )
  }

  deleteUser(id) {
    this.setState({
      users: this.state.users.filter((el) => el.id !== id)
    })
  }

  editUser(user){
    let allUsers = this.state.users
    allUsers[user.id - 1] = user

    this.setState({users: []}, () => {
        this.setState({users:[...allUsers]})
    })
  }

  addUser(user) {
    const id = this.state.users.length + 1
    this.setState({ users: [...this.state.users,  {id,...user}] })
  }

}



export default QuestionBlock