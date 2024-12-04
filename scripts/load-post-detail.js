document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get('id');

    if (postId) {
        fetch('data/posts.json')
            .then(response => response.json())
            .then(data => {
                const post = data.find(p => p.id == postId);
                if (post) {
                    displayPostDetails(post);
                } else {
                    displayError('Пост не найден.');
                }
            })
            .catch(error => {
                console.error('Error loading:', error);
                displayError('Ошибка при загрузке поста.');
            });
    } else {
        displayError('Идентификатор поста не указан.');
    }

    function displayPostDetails(post) {
        const postImage = document.getElementById('post-image');
        if (post.image) {
            postImage.src = post.image;
            postImage.alt = post.title;
        } else {
            postImage.style.display = 'none';
        }

        const postTitle = document.getElementById('post-title');
        postTitle.textContent = post.title;

        const postAuthor = document.getElementById('post-author');
        postAuthor.textContent = `Автор: ${post.author}`;

        const postDescription = document.getElementById('post-full-description');
        postDescription.textContent = post.fullDescription;
    }

    function displayError(message) {
        const postDetailContainer = document.querySelector('.post-detail');
        postDetailContainer.innerHTML = `<p>${message}</p>`;
    }
});