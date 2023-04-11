$(document).ready(function() {
    var prev = localStorage.getItem("lastPage");

    if(prev==="items" || prev==="quests") {
        // Change to specified tab
        changeSkywindTab(prev);

        // Scroll to tabs on page load
        if($(window).width()>=900) {
            document.getElementById("skywind-nav").scrollIntoView();
        }
        else {
            document.getElementById("skywind-nav-collapse").scrollIntoView();
        }
    }

    localStorage.clear();
});

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
function openHamburgerMain() {
    $(".hamburger-menu-main").css('display', 'flex');
    $("#navbar-collapse .project-tab-hamburger").css('display', 'none');
    $("#navbar-collapse .project-tab-close").css('display', 'block');
    $("#navbar-image").height(300);
}

// Open Hamburger Menu
function closeHamburgerMain() {
    $(".hamburger-menu-main").css('display', 'none');
    $("#navbar-collapse .project-tab-hamburger").css('display', 'block');
    $("#navbar-collapse .project-tab-close").css('display', 'none');
    $("#navbar-image").height(88);
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

// Open Item Modal
function openItemModal(itemID) {
    $(itemID).css("display", "block");
    // $("body").css("position", "fixed");

    //TODO - CURRENTLY MOVING TO TOP OF SCREEN; NEED TO STAY AT CURRENT SCROLL POSITION
    $("body").css("top", "-${window.scrollY}px");
}

// Close Item Modal
function closeModal() {
    $(".modal").css("display", "none");
    $("body").css("position", "relative");
}

// Switch Item Modal
function switchItemModal(itemID) {
    closeModal();
    openItemModal(itemID);
}

// Skywind - Link Selections
function changeSkywindTab(tab) {
    // Check window width, close hamburger if visible
    if($(window).width()<=900) {
        closeHamburger();
        console.log("true");
    }

    // Remove Current "Selected" Styling
    $(".project-tab-name").removeClass("tab-selected");
    $(".menu-option").removeClass("tab-selected");
    $(".page-content").removeClass("content-selected");

    if(tab==="encounters") {
        // Change Navbar Option Styling
        $("#skywind-encounters, #skywind-encounters-menu").addClass("tab-selected");

        // Display Encounters Tab, Hide Others
        $("#content-encounters").addClass("content-selected");

        // Change Collapsed Header Text
        $("#collapse-header").text("World Encounters");
    }
    else if(tab==="items") {
        // Change Navbar Option Styling
        $("#skywind-items, #skywind-items-menu").addClass("tab-selected");

        // Display Items Tab, Hide Others
        $("#content-items").addClass("content-selected");

        // Change Collapsed Header Text
        $("#collapse-header").text("Item Descriptions");
    }
    else if(tab==="quests") {
        // Change Navbar Option Styling
        $("#skywind-quests, #skywind-quests-menu").addClass("tab-selected");

        // Display Quests Tab, Hide Others
        $("#content-quests").addClass("content-selected");

        // Change Collapsed Header Text
        $("#collapse-header").text("Quests");
    }
    else if(tab==="other") {
        // Change Navbar Option Styling
        $("#skywind-other, #skywind-other-menu").addClass("tab-selected");

        // Display Other Tab, Hide Others
        $("#content-other").addClass("content-selected");

        // Change Collapsed Header Text
        $("#collapse-header").text("Other");
    }
}