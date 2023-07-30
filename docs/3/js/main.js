window.addEventListener('DOMContentLoaded', (event) => {
    new Game().start([new Human('山田', 10, 3, 0, 0), new Human('鈴木', 12, 1, 1, 1)])
});
window.addEventListener('beforeunload', (event) => {
    console.log('beforeunload!!');
});

