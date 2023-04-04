function toggleReadmore() {
    var moreText = document.getElementById("about-morecontent");
    var btnText = document.getElementById("read-more-btn");

    if (moreText.style.display === "none") {
        moreText.style.display = "block";
        btnText.innerHTML = "Read Less";
    } else {
        moreText.style.display = "none";
        btnText.innerHTML = "Read More";
    }
}

function toggleReadmore() {
    var moreContent = document.getElementById("about-morecontent");
    var readMoreBtn = document.getElementById("read-more-btn");

    if (moreContent.style.display === "none") {
        moreContent.style.display = "block";
        readMoreBtn.innerHTML = "Read Less";
    } else {
        moreContent.style.display = "none";
        readMoreBtn.innerHTML = "Read More";
    }
}