// FAQs
document.querySelectorAll(".merge-pdf-faqs").forEach((faq) => {
    const id = faq.getAttribute("data-id");
    const questions = document.getElementById(`merge-pdf-q-${id}`);
    const answers = document.getElementById(`merge-pdf-ans-${id}`);
    const blueBorder = document.getElementById(`merge-pdf-border-blue-${id}`);

    questions.addEventListener("click", () => {
        answers.classList.toggle("hidden");
        blueBorder.classList.toggle("border-l-[3px]");
        questions.classList.toggle("bg-gray-200");
        questions.classList.toggle("rotate-45");
    });
});

// File Upload
const inputFile = document.getElementById("inputFile");
const inputFileClicked = document.getElementById("inputFileClicked");
const autoClick = document.getElementById("auto-click");
const form = autoClick.closest("form");

inputFileClicked.addEventListener("click", () => {
    inputFile.click();
});

inputFile.addEventListener("change", () => {
    form.submit();
});

// Star Rating
let stars = document.querySelectorAll(".star svg");
let rating = 0;

function highlightStars(count) {
    stars.forEach((star, index) => {
        if (index < count) {
            star.classList.add("filled");
        } else {
            star.classList.remove("filled");
        }
    });
}

stars.forEach((star, index) => {
    star.addEventListener("mouseover", () => highlightStars(index + 1));
    star.addEventListener("click", () => {
        rating = index + 1;
        highlightStars(rating);
    });
    star.addEventListener("mouseout", () => highlightStars(rating));
});


// Review Section
const reviewSection = document.getElementById("review-section");
const reviewSectionFieldset = document.getElementById("reviewSectionFieldset");
const experienceReview = document.getElementById("experienceReview");
const sendReviewBtn = document.getElementById("sendReviewBtn");
const ReminingText = document.getElementById("ReminingText");
const reviewRating = document.getElementById("reviewRating");

reviewRating.addEventListener("click", () => {
    reviewSectionFieldset.removeAttribute("hidden");

    document.querySelectorAll(".star").forEach((element) => {
        element.classList.remove("hover-review");
        element.classList.remove("hover:before:content-['poor']");
        element.classList.remove("hover:before:content-['Below_Average']");
        element.classList.remove("hover:before:content-['Good']");
        element.classList.remove("hover:before:content-['Very_Good']");
        element.classList.remove("hover:before:content-['OutStanding']");
    });
});

sendReviewBtn.addEventListener("click", () => {
    if (experienceReview.value.trim() !== "") {
        reviewSection.innerHTML = "Thank you for your feedback!";
        reviewSection.style.fontSize = "24px";
    }
});

experienceReview.addEventListener("input", () => {
    ReminingText.textContent = 500 - experienceReview.value.length;
});
