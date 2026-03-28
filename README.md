<!DOCTYPE html>
<html>
<head>
  <title>Photo Editing</title>
</head>
<body style="text-align:center; font-family:sans-serif; background:#f2f2f2;">

  <h1>My Photo Editing Website 😎</h1>

  <input type="file" id="upload" accept="image/*"><br><br>

  <img id="preview" width="300" style="display:none; border-radius:10px;"/><br><br>

  <button onclick="makeGray()">Black & White</button>

  <script>
    let img = document.getElementById("preview");

    document.getElementById("upload").onchange = function(e) {
      let file = e.target.files[0];
      if(file){
        img.src = URL.createObjectURL(file);
        img.style.display = "block";
      }
    }

    function makeGray(){
      img.style.filter = "grayscale(100%)";
    }
  </script>

</body>
</html>
