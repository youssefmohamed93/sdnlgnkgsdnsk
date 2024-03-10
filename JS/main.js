// Header Two DropDown //
function myFunction() {
    var dropdown = document.getElementById("myHeaderDropdown");
    dropdown.classList.toggle("showDropDown");

    var chevronIcon = document.getElementById("chevronIcon");
    if (dropdown.classList.contains("showDropDown")) {
        chevronIcon.classList.replace("bx-chevron-down", "bx-chevron-up");
    } else {
        chevronIcon.classList.replace("bx-chevron-up", "bx-chevron-down");
    };
};

window.onclick = function(event) {
    if (!event.target.closest('.header-dropbtn')) {
        var dropdowns = document.getElementsByClassName("header-dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('showDropDown')) {
                openDropdown.classList.remove('showDropDown');
                var chevronIcon = document.getElementById("chevronIcon");
                chevronIcon.classList.replace("bx-chevron-up", "bx-chevron-down");
            }
        }
    }
};

function updateCategory(selectedCategory) {
    var categoryText = document.getElementById('categoryText');
    categoryText.innerHTML = '<span class="mr-1">' + selectedCategory + '</span>';

    var dropdown = document.getElementById("myHeaderDropdown");
    dropdown.classList.remove("showDropDown");

    var chevronIcon = document.getElementById("chevronIcon");
    chevronIcon.classList.replace("bx-chevron-up", "bx-chevron-down");
};

const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    cssMode: true,
    slidesPerView: 1,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
        1024: {
          slidesPerView: 1,
          spaceBetween: 30,
      },
    },
});