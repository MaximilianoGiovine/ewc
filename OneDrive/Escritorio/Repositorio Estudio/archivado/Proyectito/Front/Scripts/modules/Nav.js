document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('nav');
    if (!nav) {
        console.error('No <nav> element found in the document.');
        return;
    }

    const pages = [
        { name: 'Home', file: 'land.html' }, // Updated to 'land.html'
        { name: 'Contact', file: 'contact.html' },
        { name: 'About', file: 'about.html' },
        { name: 'Upload', file: 'upload.html' }
    ];

    nav.innerHTML = ''; // Clear existing content

    // Add the <h1> element to the navigation
    const title = document.createElement('h1');
    title.textContent = 'My Bookshelf';
    nav.appendChild(title);

    // Add the navigation links
    pages.forEach(page => {
        const link = document.createElement('a');
        link.textContent = page.name;
        link.href = page.file; // Set the href to the file path
        link.addEventListener('click', (e) => {
            e.preventDefault();
            window.location.href = page.file; // Navigate to the page
        });
        nav.appendChild(link);
    });
});