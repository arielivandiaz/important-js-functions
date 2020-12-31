//Counter input length

function counter() {
    var l = document.getElementById("counter").textContent = 216 -
        document.getElementById("msgInput").value.length;
    if (l < 25)
        document.getElementById("counter").classList.add("color-error");
    else {
        if (document.getElementById("counter").classList.contains("color-error"))
            document.getElementById("counter").classList.remove("color-error");
    }
}
