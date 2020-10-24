const notifyTypes = Object.freeze({
    INFO: 'info',
    SUCCESS: 'success',
    WARNING: 'warning',
    ERROR: 'error'
})


const generateTimeOut = (action, time) => {
    let _timeout = setTimeout( function() {
        action()
        clearTimeout(_timeout);
    }, time);
}


const notify = (message, type) => {

    console.log(`NEW NOTIFICATION ==> message: ${message} | type: ${type}`);

    let notificationElement = document.createElement('div')
    notificationElement.classList.add('notification', type);

    let notificationText = document.createElement('p');
    notificationText.innerHTML = message;
    
    notificationElement.appendChild(notificationText);
    document.body.appendChild(notificationElement);

    generateTimeOut(() => notificationElement.classList.add('fade-in'), 500);
    generateTimeOut(() => notificationElement.classList.remove('fade-in'), 3500);
    generateTimeOut(() => notificationElement.remove(), 6500);
}

export default notify;
export { notifyTypes };