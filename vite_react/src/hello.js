function helloRender(reactElement, container) {
    const domElement = document.createElement(reactElement.type);

    // Set inner text (not innerHTML for text content to avoid XSS risks)
    domElement.textContent = reactElement.children;

    // Set attributes if they exist
    if (reactElement.props) {
        for (const [key, value] of Object.entries(reactElement.props)) {
            domElement.setAttribute(key, value);
        }
    }

    container.appendChild(domElement);
}

const reactElement = {
    type: 'a',
    props: { 
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click to visit Google'
};

const mainContainer = document.querySelector('#root');
helloRender(reactElement, mainContainer);







