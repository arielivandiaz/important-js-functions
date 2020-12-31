// <script src="/socket.io/socket.io.js"></script>
// <script src="https://code.jquery.com/jquery-1.11.1.js"></script>

var socket = io();

socket.emit('join', {
    user: "ariel",
    hash: "hd7c7as"
});


socket.on('msg', function (msg) {
    console.log(msg);
});
