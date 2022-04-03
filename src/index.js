import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/js/dist/modal';
import 'bootstrap/js/dist/alert';
import '../src/index.css';
import profile_pic from './images/profile.jpeg';
import axios from 'axios';
import post from './components/Post';
import Alert from './components/Alert';

const user_profile = document.getElementById('user_profile');

user_profile.setAttribute('src', profile_pic);

//Dom Loading Opreration
document.addEventListener('DOMContentLoaded', getPosts);

//Get create-post-form elements
document.getElementById('creat-post-form').addEventListener('submit', creatPost);

//Get create-post-form elements
const msg = document.querySelector('.msg');

//Get All Posts
function getPosts(){
    axios.get('http://localhost:5050/post').then( res => post.showPosts(res.data));
}

// create post
function creatPost(e){
    e.preventDefault();

    //get form-data from formData object
    let form_data = new FormData(e.target);
    let data = Object.fromEntries(form_data.entries());

    if (data.name == '' || data.user_photo == '' || data.content == '') {
        msg.innerHTML = Alert.dander('All fields are required !');
    }else{
    
    //send post request
    axios.post('http://localhost:5050/post', {
        name            : data.name,
        user_photo      : data.user_photo,
        content         : data.content,
        post_photo      : data.photo
    }).then( res => {
        getPosts();
        msg.innerHTML = Alert.success('Post created successful');
    })
}

}





