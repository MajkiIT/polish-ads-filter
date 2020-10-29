document.querySelector("#mirror").onchange = function() {
    let selectedMirror = this.value;
    let allMirrors = document.querySelectorAll('[data-label="LINKI ALTERNATYWNE"] a');
    let allFilteredMirrors= document.querySelectorAll('[data-label="LINKI ALTERNATYWNE"] a:not([href*="'+selectedMirror+'"])');
    for (let mirror of allMirrors) {
        mirror.style.display = "initial";
    }
    if (selectedMirror) {
        for (let mirror of allFilteredMirrors) {
            mirror.style.display = "none";
        }
    }
}
