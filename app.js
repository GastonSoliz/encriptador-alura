document.addEventListener("DOMContentLoaded", function () {
  const textarea = document.getElementById("autoExpand");

  textarea.addEventListener("input", function () {
    this.style.height = "auto";

    this.style.height = this.scrollHeight + "px";
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const autoExpandResult = document.getElementById("autoExpandResult");

  const updateHeight = () => {
    autoExpandResult.style.height = "auto";
    autoExpandResult.style.height = autoExpandResult.scrollHeight + "px";
  };

  const observer = new MutationObserver(updateHeight);
  observer.observe(autoExpandResult, {
    childList: true,
    subtree: true,
    characterData: true,
  });

  updateHeight();
});
