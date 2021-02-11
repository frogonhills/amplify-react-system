import { API, Auth, graphqlOperation } from "aws-amplify";
import React , {Component }  from "react";
import { createPost  } from '../graphql/mutations';


 class CreatePost extends Component {



    state = {
        postOwnerID:"",
        postOwnerUsername: "",
        postTitle: "",
        postBody: ""
    }


    componentDidMount = async () =>{
        //todo:tba
       await Auth.currentUserInfo()
            .then (user=>{

                this.setState({
                    postOwnerID: user.attributes.sub,
                    postOwnerUsername: user.username
                })
                //console.log("curr: User:" , user.username);
                //console.log("Attr.sub: User:" , user.attributes.sub)
            })
    }


    handleChanePost = event => this.setState({[event.target.name]: event.target.value })

    handleAddPost = async event => {
        event.preventDefault()
        
        const input = {
            postOwnerId: this.state.postOwnerID, 
            postOwnerUsername: this.state.postOwnerUsername,
            postTitle: this.state.postTitle,
            postBody: this.state.postBody,
            createdAt: new Date().toISOString()
        }


        await API.graphql(graphqlOperation(createPost, {input}));
        this.setState({postTitle:"" , postBody:""})


    }
     render(){
         return(
             <form className="add-post"  onSubmit={this.handleAddPost} >
                 <input style={{font: '19px'}}  type="text"  placeholder="Title" name="postTitle"  required  value={this.state.postTitle} onChange={this.handleChanePost}  />
                 <textarea   type="text" name= "postBody" rows="3" cols="40"  placeholder="Write your mind"  required value={this.state.postBody} onChange={this.handleChanePost}  />

                 <input  type="submit" className="btn" style={{fontSize: '19px'}} />

                 
                 
             </form>
         )
     }
 }


 export default CreatePost;