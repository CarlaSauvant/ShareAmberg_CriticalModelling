var isSlid = false;

function slideObject() {
    var slidingObject = document.getElementById("big_menu_group");
    if (isSlid) {
        slidingObject.style.left = "45px";
        isSlid = false;
    } else {
        slidingObject.style.left = (slidingObject.offsetLeft - 422) + "px";
        isSlid = true;
    }
}