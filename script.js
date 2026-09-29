document.addEventListener('DOMContentLoaded', function() {
    const postForm = document.getElementById('postForm');
    const postContent = document.getElementById('postContent');
    const feed = document.getElementById('feed');

    postForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const content = postContent.value.trim();

        if (content !== "") {
            const newPost = document.createElement('div');
            newPost.classList.add('post');
            
            // Add timestamp
            const timestamp = new Date().toLocaleString();
            newPost.innerHTML = `<p>${content}</p><small>Posted at ${timestamp}</small>`;

            feed.appendChild(newPost);
            postContent.value = ""; // clear textarea
        }
    });
});
