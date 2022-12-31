import { Message } from '../types/message';
import { mockUsers } from '../assets/mockUsers'; // todo: remove this line after server implementation
import fetch from 'cross-fetch';
import 'cross-fetch/polyfill';
const endpoint = 'http://localhost:8000'; // todo: add endpoint (server) address (starting with http://)


/**
 * GET Request to get the list of messages
 **/
export async function getMessages() {
  try {
    const res = await fetch(endpoint + '/mockMessagesWithNames');
    
    if (res.status >= 400) {
      throw new Error("Bad response from server");
    }
    
    const message = await res.json();
  
    return message
  } catch (err) {
    console.error(err);
  }
  };

  // todo: replace this with fetch to get the messages from the server

  // todo: this should be implemented in the server. Chat Messages should already have the authors' names.
  // todo: remove this mapping when getting the data from the server
  


/**
 * GET request to get the full list of users - id + name
 **/
export async function getUsers() {
  // todo: replace this with fetch to get the user list from the server

try {
  const res = await fetch(endpoint + '/mockUsers');
  
  if (res.status >= 400) {
    throw new Error("Bad response from server");
  }
  
  const user = await res.json();

  return user
} catch (err) {
  console.error(err);
}
}


/**
 * GET request to get the full details of a user
 **/
export async function getUserDetails(userId: number) {
  // todo: replace this with fetch to get the user details from the server.
  //  For mocking example, we're calling an external JSON service.
  //  You can use mockUserDetails.ts for the list of user details in the server.
  const res = await fetch(`https://jsonplaceholder.typicode.com/users?id=${userId}`);
  return (await res.json())[0];
  // const listOFUsers = await getUsers()
  // listOFUsers.forEach(Mockuser => {
  //   if (Mockuser.id === userId){
  //     return  Mockuser
  //   }
  // });
   
}

/**
 * POST request to add a message. The message contains: id, body, timestamp, authorId
 **/
export async function addNewMessage(message: Message) {
  // todo: implement sending a new message to the server
  fetch('http://localhost:8000/mockMessagesWithNames', {
    method: 'POST',
    body: JSON.stringify({
      message: message.body,
      id: message.id,
      timestamp: message.timestamp,
      authorId: message.authorId
    
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

}

/**
 * POST request to change the user's like of a message
 **/
export async function changeMessageLikes(messageId: number, userId: number, like: boolean) {
  // todo: implement sending a rquest to change the like of a message by the user
  
}