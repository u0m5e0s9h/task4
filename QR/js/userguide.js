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

    // Apply style adjustments to #stepImage if needed
    $("#stepImage").css({
      width: "100%",
      "max-width": "600px",
      height: "auto",
    });

    // ================================================================================================================================

    // Optional: Highlight the active step
    $(".guide_div_text").removeClass("active"); // Remove active class from all steps
    $(this).addClass("active"); // Add active class to the clicked step

    // Show or hide QR codes based on the selected step
    if ($(this).attr("id") === "step1") {
      $("#qrDownloadCodes").show(); // Show QR codes only for the first step
    } else {
      $("#qrDownloadCodes").hide(); // Hide QR codes for other steps
    }
  });

  $(".div_23").click(function () {
      // Get the image path from the data attribute of the clicked item
      let newImage = $(this).data("image");

      // Update the src of the image placeholder
      $("#levelImage").attr("src", newImage);

      // Optional: Highlight the active step
      $(".div_23").removeClass("active"); // Remove active class from all steps
      $(this).addClass("active"); // Add active class to the clicked step
    });

  // ================================================================================================================================

  // Combine click event listener for both .guide_div_text and .div_23 elements
  $(".qr_sticker_images").click(function () {
    // Get the image path from the data attribute of the clicked item
    let newImage = $(this).data("image");

    // Update the src of the image placeholder
    $("#gradeImage").attr("src", newImage);

    // Apply style adjustments to #stepImage if needed
    $("#gradeImage").css({
      width: "100%",
      "max-width": "600px",
      height: "auto",
    });
    $(".qr_sticker_images").removeClass("active"); // Remove active class from all steps
    $(this).addClass("active");
    // ================================================================================================================================
    // ============================================================================
    // ============================================================================
  });
});
