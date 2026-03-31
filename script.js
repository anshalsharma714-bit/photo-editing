let upload = document.getElementById("upload");
let preview = document.getElementById("preview");

upload.addEventListener("change", function() {
  let file = upload.files[0];
  let reader = new FileReader();

  reader.onload = function(e) {
    preview.src = e.target.result;
  }

  reader.readAsDataURL(file);
});
