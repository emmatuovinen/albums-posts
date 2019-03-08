import Axios from 'axios';

const API = "https://jsonplaceholder.typicode.com/";


export function GetPostsOfUser(userId, callback){
    Axios.get(API + "posts/?userId=" + userId).then(response => {
        callback(response.data);
    })
    .catch(error => {
        callback(error.response);
    })
}

export function GetAlbumsOfUser(userId, callback) {
    Axios.get(API + "albums/?userId=" + userId).then(response => {
        callback(response.data);
    })
    .catch(error => {
        callback(error.response);
    })
}

export function GetAlbumPhotos(albumId, callback){
    Axios.get(API + "photos/?albumId=" + albumId).then(response => {
        callback(response.data);
    })
    .catch(error => {
        callback(error.response);
    })
}

export function GetPostComments(postId, callback) {
    Axios.get(API + "comments/?postId=" + postId).then(response => {
        callback(response.data);
    })
    .catch(error => {
        callback(error.response);
    })
}