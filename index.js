const appNode = document.querySelector('.js-app');
const nout = {
    color: 'gray',
    model: 'Honor',
    photo: 'https://www.pcplanet.ru/public_files/products/dc/38/dc38b2c277192412c134d4b20074e506/original.jpg',
    camera: true
};
function render() {
    const html = `
        <div>
        <h2>Hello world</h2>
            <h1>${nout.model}</h1>
            <p>Camera ${nout.camera}</p>
            <img
                src='${nout.photo}'/>

        </div>
    `;
    appNode.innerHTML = html;
}

render();
console.log(nout.camera);