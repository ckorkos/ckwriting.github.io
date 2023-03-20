// Change Project Thumbnails on Hover-In
function changeBG(project) {
    if(project==="skywind-image") {
        document.getElementById(project).src = "./files/images/thumbnails/skywind-thumb-hover.png";
        document.getElementById("skywind-card-text").style.opacity = 1;
    }
}

// Change Project Thumbnails on Hover-Out
function revertBG(project) {
    if(project==="skywind-image") {
        document.getElementById(project).src = "./files/images/thumbnails/skywind-thumb.png";
        document.getElementById("skywind-card-text").style.opacity = 0;
    }
}

// Open Hamburger Menu
function openHamburger() {
    $(".hamburger-menu").css('display', 'flex');
    $(".project-tab-hamburger").css('display', 'none');
    $(".project-tab-close").css('display', 'block');
}

// Open Hamburger Menu
function closeHamburger() {
    $(".hamburger-menu").css('display', 'none');
    $(".project-tab-hamburger").css('display', 'block');
    $(".project-tab-close").css('display', 'none');
}

// Skywind - Link Selections
function changeSkywindTab(tab) {
    if(tab==="encounters") {
        $(".project-tab-name").removeClass("tab-selected");
        $("#skywind-encounters").addClass("tab-selected");

        // Display Encounters Tab, Hide Others
        $(".page-content").removeClass("content-selected");
        $("#content-encounters").addClass("content-selected");
    }
    else if(tab==="items") {
        $(".project-tab-name").removeClass("tab-selected");
        $("#skywind-items").addClass("tab-selected");

        // Display Items Tab, Hide Others
        $(".page-content").removeClass("content-selected");
        $("#content-items").addClass("content-selected");
    }
    else if(tab==="quests") {
        $(".project-tab-name").removeClass("tab-selected");
        $("#skywind-quests").addClass("tab-selected");

        // Display Quests Tab, Hide Others
        $(".page-content").removeClass("content-selected");
        $("#content-quests").addClass("content-selected");
    }
    else if(tab==="other") {
        $(".project-tab-name").removeClass("tab-selected");
        $("#skywind-other").addClass("tab-selected");

        // Display Other Tab, Hide Others
        $(".page-content").removeClass("content-selected");
        $("#content-other").addClass("content-selected");
    }
}