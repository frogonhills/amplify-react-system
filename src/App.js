import React from 'react';
import './App.css';
import DisplayPost from './components/DisplayPost';
import CreatePost from './components/CreatePost';
import { withAuthenticator ,  AmplifySignOut} from '@aws-amplify/ui-react';

function App() {
  return (
    <div className="App">
      
       
      
      <CreatePost />
      <DisplayPost />
      <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(App , { includeGreetings: true });