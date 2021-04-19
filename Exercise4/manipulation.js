document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("chBorder").addEventListener("click", () => {
        let r = document.getElementById("R").value;
        let g = document.getElementById("G").value;
        let b = document.getElementById("B").value;
        parseInt(r,g,b);
        let colorString = r + g + b;
        //javascript RegExp object from w3school page that can work with hex to dec input.
        if (/^[0-9a-f]{6}$/i.test(colorString)){
            document.getElementById("randomtext").style.borderColor = "#" + colorString;
        }
        else{
            alert("Invalid input, enter the range at (00-FF or 0-255) for each grid");
        }
        let width = document.getElementById("borderWidth").value;
        if (width !== ""){
            document.getElementById("randomtext").style.borderWidth = width + "px " + width + "px";
        }
    });
    document.getElementById("chBackground").addEventListener("click", () => {
        let r = document.getElementById("bgR").value;
        let g = document.getElementById("bgG").value;
        let b = document.getElementById("bgB").value;
        parseInt(r,g,b);
        let colorString = r + g + b;
        //parseInt(r,g,b);
        //javascript RegExp object from w3school page that can work with hex to dec input.
        if (/^[0-9a-f]{6}$/i.test(colorString)){
            document.getElementById("randomtext").style.backgroundColor = "#" + colorString;
        }
        else{
            alert("Invalid input, enter the range at (00-FF or 0-255) for each grid");
        }
    });
})