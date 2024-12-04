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

        const postTrainingDuration = document.getElementById('post-training-duration');
        postTrainingDuration.textContent = `Продолжительность: ${post.trainingDuration}`;

        const postPurpose = document.getElementById('post-purpose');
        postPurpose.textContent = `Цель: ${post.purpose}`;

        const instructionContainer = document.querySelector('.instruction');
        if (post.instructions && post.instructions.length > 0) {
            const ul = document.createElement('ul');
            post.instructions.forEach(instruction => {
                const li = document.createElement('li');
                li.textContent = instruction;
                ul.appendChild(li);
            });
            instructionContainer.appendChild(ul);
        } else {
            instructionContainer.style.display = 'none';
        }
    }

    function displayError(message) {
        const postDetailContainer = document.querySelector('.post-detail');
        postDetailContainer.innerHTML = `<p>${message}</p>`;
    }
});