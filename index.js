(function() {
  const styles = `.popup-div{z-index:999;left:0;top:0;display:none;position:fixed;width:100vw;height:100vh;overflow:hidden;background:rgba(0,0,0,.6);opacity:0;transition:opacity .5s ease}.popup-div,.popup-div *{box-sizing:border-box}.popup-div.visible{display:flex;align-items:center;justify-content:center;opacity:1}.popup-div.visible .popup-content{-webkit-animation:zoomIn .5s;animation:zoomIn .5s}.popup-div .popup-content{max-width:95%;min-width:200px;max-height:95vh;overflow:auto;background:#fff;padding:15px;border-radius:3px;position:relative}.popup-div .popup-content .fa.fa-times-circle{position:absolute;right:5px;top:5px}.popup-div .popup-title{text-align:center;margin:0}.popup-div .flex-box{display:flex}.popup-div .align-items-center{align-items:center}.popup-div .justify-content-around{justify-content:space-around}.popup-div .btn{background:#222;color:#fff;border:0;outline:0;padding:5px 15px;border-radius:3px;margin:0}.popup-div .btn.btn-success{background:#28a745}.popup-div .btn.btn-danger{background:#dc3545}.popup-div .btn.btn-warning{background:#ffc107;color:#222}.popup-div .btn.btn-info{background:#17a2b8}@-webkit-keyframes zoomIn{from{opacity:0;transform:scale3d(.3,.3,.3)}50%{opacity:1}}@keyframes zoomIn{from{opacity:0;transform:scale3d(.3,.3,.3)}50%{opacity:1}}`;
  const styleSheet = document.createElement("style");
  styleSheet.type = "text/css";
  styleSheet.innerText = styles;
  document.head.appendChild(styleSheet);
})();

export const confirmModel = (function () {
  const randomID = Math.floor((Math.random() * 100000) + 1);
  const html = `<div class="popup-div" id="cnfrmMdl-${randomID}">
    <div class="popup-content">
        <div class="popup-title"></div>
        <br />
        <div class="flex-box align-items-center justify-content-around">
            <input type="button" value="Yes" class="btn btn-yes" />
            <input type="button" value="No" class="btn btn-no" />
        </div>
    </div>
</div>`;

  let modelElement = null;
  let settings = null;

  function getDefaultSetting() {
    return {
      callback: null,
      title: "<h4>Confirmation Box !!</h4>",
      type: 'warning'
    };
  }

  function showPopup(args) {
    settings = getDefaultSetting();
    switch (typeof args) {
      case "object":
        Object.assign(settings, args);
        break;
      case "function":
        settings.callback = args;
        break;
    }

    const tempWrapper = document.createElement('div');
    tempWrapper.innerHTML = html;
    modelElement = tempWrapper.firstElementChild;

    document.body.appendChild(modelElement);

    modelElement.querySelector('.popup-title').innerHTML = settings.title;
    const yesButton = modelElement.querySelector('.btn-yes');
    const noButton = modelElement.querySelector('.btn-no');

    yesButton.classList.add('btn-' + settings.type);

    if (settings.callback == null) {
      yesButton.style.display = 'none';
      noButton.value = 'Ok';
      noButton.classList.add('btn-' + settings.type);
    }

    yesButton.addEventListener("click", function () {
      if (typeof settings.callback == 'function') {
        if (settings.callback.call(this, this.value === "Yes")) {
          hidePopup();
        }
      } else {
        hidePopup();
      }
    });

    noButton.addEventListener("click", function () {
      hidePopup();
    });

    setTimeout(() => {
        modelElement.classList.add('visible');
    }, 10);

    noButton.focus();
  }

  function hidePopup() {
    if (modelElement) {
      modelElement.classList.remove('visible');
      setTimeout(() => {
        modelElement.remove();
        modelElement = null;
      }, 500);
    }
  }

  return {
    show: showPopup,
    hide: hidePopup
  };
})();