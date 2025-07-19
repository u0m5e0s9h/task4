
$(document).ready(function () {

  // for sub header toggle
  const links = $(".sub-header-menu a");
  const parts = $(".toggle-part");

  links.each(function (index) {
    $(this).on("click", function (e) {
      e.preventDefault();

      links.removeClass("active");
      $(this).addClass("active");

      parts.hide();
      $(parts[index]).show();
    });
  });

  parts.hide();
  $(parts[0]).show();
  links.removeClass("active");
  $(links[0]).addClass("active");

  // Combine click event listener for both .guide_div_text and .div_23 elements
  $(".guide_div_text").click(function () {
    // Get the image path from the data attribute of the clicked item
    let newImage = $(this).data("image");

    // Update the src of the image placeholder
    $("#stepImage").attr("src", newImage);

    $("#stepImage").css({
      width: "100%",
      "max-width": "600px",
      height: "auto",
    });

    $(".guide_div_text").removeClass("active");
    $(this).addClass("active");

    if ($(this).attr("id") === "step1") {
      $("#qrDownloadCodes").show();
    } else {
      $("#qrDownloadCodes").hide();
    }
  });

  // dynamic image loading
  $(".div_23").click(function () {
    let newImage = $(this).data("image");
    $("#levelImage").attr("src", newImage);

    $(".div_23").removeClass("active");
    $(this).addClass("active");
  });

  
  $(".qr_sticker_images").click(function () {
    $(".qr_sticker_images").removeClass("active");
    $(this).addClass("active");

    let images = $(this).data("images");
    if (typeof images === "string") {
      try {
        images = JSON.parse(images);
      } catch (e) {
        images = [images];
      }
    }

    const container = $("#gradeImageContainer");
    container.empty(); 

    // for grade1 
    if ($(this).attr("id") === "grade1" && images.length >= 2) {
      container.append(`
        <div class="top-images-with-text">
          <div class="image-block">
            <div class="image-label">QR인쇄물</div>
            <img src="${images[0]}" alt="QR Step 1A">
          </div>
          <div class="image-block">
            <div class="image-label">부착용 포켓</div>
            <img src="${images[1]}" alt="QR Step 1B">
          </div>
        </div>
      `);
      if (images.length === 3) {
        container.append(`
          <div class="bottom-image">
            <img src="${images[2]}" alt="QR Step 1C">
          </div>
        `);
      }
    } 
    
    //  grade2
    else if ($(this).attr("id") === "grade2" && images.length === 2) {
      container.append(`
        <div class="grade2-wrapper">
          <img class="grade2-first" src="${images[0]}" alt="QR Step 2A">
          <img class="grade2-second" src="${images[1]}" alt="QR Step 2B">
        </div>
      `);
    } 
    
    // for grade3
    else if ($(this).attr("id") === "grade3" && images.length === 2) {
      container.append(`
        <div class="grade3-wrapper">
          <img class="grade3-first" src="${images[0]}" alt="QR Step 3A">
          <img class="grade3-second" src="${images[1]}" alt="QR Step 3B">
        </div>
      `);
    } 
    
    // for grade4
    else if ($(this).attr("id") === "grade4" && images.length === 2) {
      container.append(`
        <div class="grade4-wrapper">
          <img class="grade4-first" src="${images[0]}" alt="QR Step 4A">
          <img class="grade4-second" src="${images[1]}" alt="QR Step 4B">
        </div>
      `);
    } 
    
    //  for others
    else {
      if (images.length === 3) {
        container.append(`
          <div class="top-images">
            <img src="${images[0]}" alt="Step Image 1">
            <img src="${images[1]}" alt="Step Image 2">
          </div>
          <div class="bottom-image">
            <img src="${images[2]}" alt="Step Image 3">
          </div>
        `);
      } else {
        images.forEach(imgSrc => {
          container.append(`<img src="${imgSrc}" alt="Step Image">`);
        });
      }
    }
  });

  
  $(".qr_sticker_images").first().trigger("click");
});
