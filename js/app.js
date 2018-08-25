let currentPage = 0;
const minPage = 0;
const maxPage = 2;

init();

function init() {
    $('.down-arrow').on('click', nextPage);
    $('.right-arrow').on('click', nextPage);
    $('.next-page').on('click', nextPage);
    $('section:eq(0)').css('opacity', 1);
    hidePages();
    paginationNavigate();
}

// Changes to the next page
function nextPage() {
    if (currentPage < maxPage) {
        $(`section:eq(${currentPage})`).css('opacity', 0);
        $(`section:eq(${currentPage + 1})`).css('opacity', 1);
        currentPage++;
        paginationUpdate();
    } else {
        $(`section:eq(${currentPage})`).css('opacity', 0);
        currentPage = 0;
        $(`section:eq(${currentPage})`).css('opacity', 1);
        paginationUpdate();
    }
}

// Updates the dots on the right to be in syncw ith the current page
function paginationUpdate() {
    $('li').removeClass('current');
    $(`li[index="${currentPage}"]`).addClass('current');
}

// Adds navigation functionality for the dots on the right
function paginationNavigate() {
    $('.dotstyle li').on('click', function () {
        let index = $(this).attr('index');
        $('section').css('opacity', 0);
        $(`section:eq(${index})`).css('opacity', 1);
        currentPage = index;
        paginationUpdate();
    });
}

// Hides all pages beyond the first page
function hidePages() {
    for (let i = 1; i < maxPage; i++) {
        $(`section:eq(${i})`).css('opacity', 0);
    }
}