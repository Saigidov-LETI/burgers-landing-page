const overlayFeedback = createOverlay();

const contentFeedbackName = overlayFeedback.querySelector(".contentFeedbackName");
const contentFeedbackComment = overlayFeedback.querySelector(".contentFeedbackComment");
    
$('.jsBtnFeedback').each(function() {
    $(this).click(function(e) {
        e.preventDefault();
        document.querySelector('.feedback').appendChild(overlayFeedback);
        $("body").css("overflow", "hidden");
        var z = this;
        var popParent = z.parentNode;
        const name = popParent.querySelector(".feedback__title");
        const comment = popParent.querySelector(".feedback__hover p");
        contentFeedbackName.textContent = name.innerHTML;
        contentFeedbackComment.textContent = comment.innerHTML;
    })
}); 

$('.jsBtnFeedbackMobile').each(function() {
    $(this).click(function(e) {
        e.preventDefault();
        document.querySelector('.feedback').appendChild(overlayFeedback);
        $("body").css("overflow", "hidden");
        var z = this;
        var popParent = z.parentNode;
        const name = popParent.querySelector(".feedback__title");
        const comment = popParent.querySelector(".feedback__hover p");
        contentFeedbackName.textContent = name.innerHTML;
        contentFeedbackComment.textContent = comment.innerHTML;
    })
});

function createOverlay() {   
    const overlayElement = document.createElement('div');
    overlayElement.classList.add('overlayFeedback');
    const template = document.querySelector('#overlayTemplateFeedback');
    overlayElement.innerHTML = template.innerHTML;
    
    const closeElement = overlayElement.querySelector(".closeFeedbackModal");
    closeElement.addEventListener("click", e => {
        e.preventDefault();
        document.querySelector('.feedback').removeChild(overlayElement);
        $("body").css("overflow", "auto");
    });

    overlayElement.addEventListener("click", e => {
        if (e.target == overlayElement) {
          closeElement.click();
        }
    });

    return overlayElement;
}
