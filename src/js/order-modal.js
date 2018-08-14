const openButton = document.querySelector(".openOverlay");
const template = document.querySelector("#overlayTemplate").innerHTML;
const overlay = createOverlay(template);

openButton.addEventListener("click", function(e) {
  e.preventDefault();
  overlay.open();
  overlay.setContent("Сообщение отправлено");
  $("body").css("overflow", "hidden");
});

function createOverlay(template) {
  let fragment = document.createElement('div');

  fragment.innerHTML = template;

  const overlayElement = fragment.querySelector(".overlay");
  const contentElement = fragment.querySelector(".content");
  const closeElement = fragment.querySelector(".close");
  
  fragment = null;

  overlayElement.addEventListener("click", e => {
    if (e.target === overlayElement) {
      closeElement.click();
    }
  });

  closeElement.addEventListener("click", e => {
    e.preventDefault();
    document.querySelector('.order').removeChild(overlayElement);
    $("body").css("overflow", "auto");
  });

  return {
    open() {
      document.querySelector('.order').appendChild(overlayElement);
    },

    close() {
      closeElement.click();
    },

    setContent(content) {
      contentElement.innerHTML = content;
    }
  };
}
