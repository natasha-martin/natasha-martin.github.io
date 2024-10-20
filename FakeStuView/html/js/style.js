function showDetails(sectionId) {
    var section = document.getElementById(sectionId);
    if (section.classList.contains("hidden")) {
        section.classList.remove("hidden");
        section.style.display = "block";
    } else {
        section.classList.add("hidden");
        section.style.display = "none";
    }
}

function toggleContent() {
    var content = document.getElementById("content");
    if (content.classList.contains("hidden")) {
        content.classList.remove("hidden");
        content.style.display = "block";
    } else {
        content.classList.add("hidden");