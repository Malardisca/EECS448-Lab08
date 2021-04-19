document.addEventListener("DOMContentLoaded", () => {
    let images = document.getElementById("images");
    let slide = ["a.jpg", "b.jpg", "c.jpg", "d.jpg", "e.jpg","f.jfif","g.jfif","h.jpg","i.jpg","j.jpg","k.jpg","l.jfif"];
    let slide_num = 0;

    document.getElementById("previous").addEventListener("click", () => {
        slide_num--;
        if (slide_num < 0) 
        slide_num = 11;
        images.src = "images/" + slide[slide_num];
    });

    document.getElementById("next").addEventListener("click", () => {
        slide_num++;
        if (slide_num > 11) 
        slide_num = 0;
        images.src = "images/" + slide[slide_num];
    });
});