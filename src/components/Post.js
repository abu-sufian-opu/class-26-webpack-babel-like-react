class Post {

    constructor(){
        this.post_timeline = document.getElementById('post-timeline-load');
    }

    /**
     * Show All Posts
     */

    showPosts(posts){
        let post = '';

        posts.map( (data, index) => {

            let {name, user_photo, content, post_photo} = data;

            post += `
            <div class="card shadow-sm my-3">
                <div class="card-body">
                    <div class="post-timeline-info">
                        <div class="user-info">
                            <img src="${user_photo}" alt="">
                            <h5>${name}</h5>
                        </div>
                        <button>...</button>
                    </div>
                    <div class="user-post-content">
                        <p>${content}</p>
                        <img class="w-100" src="${post_photo}" alt="">
                    </div>
                </div>
            </div>
            `;
        });

        this.post_timeline.innerHTML = post;


    }
}

let post = new Post;
export default post;