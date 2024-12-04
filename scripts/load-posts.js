document.addEventListener('DOMContentLoaded', function () {
    const contentContainer = document.querySelector('main .content');

    fetch('elements/post-template.html')
        .then(response => response.text())
        .then(templateHTML => {
            const parser = new DOMParser();
            const templateDoc = parser.parseFromString(templateHTML, 'text/html');
            const postTemplate = templateDoc.querySelector('.post');

            fetch('data/posts.json')
                .then(response => response.json())
                .then(data => {
                    data.forEach(postData => {
                        const postElement = postTemplate.cloneNode(true);

                        const img = postElement.querySelector('img');
                        img.src = postData.image;
                        img.alt = postData.title;

                        const title = postElement.querySelector('h2');
                        title.textContent = postData.title;

                        const description = postElement.querySelector('p');
                        description.textContent = postData.shortDescription;

                        const link = postElement.querySelector('.btn');
                        link.href = `post.html?id=${postData.id}`;

                        contentContainer.appendChild(postElement);
                    });
                })
                .catch(error => {
                    console.error('Error loading:', error);
                });
            
        })
        .catch(error => {
            console.error('Error loading:', error);
        });
});