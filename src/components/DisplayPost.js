import React , { Component } from 'react';
import {listPosts} from '../graphql/queries';
import {API , graphqlOperation} from 'aws-amplify';



class DisplayPost extends Component {


    state = {
        posts: []
    }

    componentDidMount = async() => {
        this.getPosts()
    }


    getPosts = async () =>{

        const result = await API.graphql(graphqlOperation(listPosts))
        //console.log("all posts" , JSON.stringify(result.data.listPosts.items))

        this.setState({posts: result.data.listPosts.items})

    }

    render(){

        const {posts} = this.state
        return posts.map((post) => {
            return(
                <div className="posts" key={post.id}>
                    <h1>{post.postTitle}</h1>
                    <span>
                        {"wrote by: "} {post.postOwnerUsername}
                        {"on"}
                        <time>

                            {" "}
                            {new Date(post.createdAt).toDateString()}

                        </time>
                    </span>
                    <p>{post.postBody}</p>
                </div>
            )
        })
    }
}


export default DisplayPost