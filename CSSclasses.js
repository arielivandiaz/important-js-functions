    function show(id) {
        if (document.getElementById(id).classList.contains("hidden"))
            document.getElementById(id).classList.remove("hidden");
    }

    function hidde(id) {
        document.getElementById(id).classList.add("hidden");
    }

    function toggle(id) {
        document.getElementById(id).classList.toggle("hidden");
    }


    function toggleItems(id1, id2) {
        toggle(id1);
        toggle(id2);
    }



    //Hidde after animation
    function noneAfter(e, t) {
        setTimeout(function () {
            e.classList.add("hidden");
        }, t);
    }