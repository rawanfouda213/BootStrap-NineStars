var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 3000);
}
 var buttons = document.getElementsByClassName("accordion-button collapsed");
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
      if (this.classList.contains("clicked")) {
        this.style.color = "";
        this.classList.remove("clicked");
      } else {
        this.style.color = "#c54811";
        this.style.fontSize = "18px";
        this.style.fontWeight = "600";
      }
      this.classList.toggle("clicked");
    });
  }
/* ------------------------------------------------- */

document.addEventListener("DOMContentLoaded", function() {
  var sectionSelectors = [".container-fluid.card", ".container-fluid.card.section3", ".container-fluid.card.sec4",".container-fluid",
   ".container-fluid.sec6", ".container-fluid.sec7",
   ".container-fluid.sec8", ".container-fluid.sec9"
  ];
  var sectionSelectorsCards = [".card-title.text-wrap.sec3", ".card-title.text-wrap.icon", ".card-text.text-wrap.sec3",
  ".card-text.text-wrap.icon", ".bx.bx-receipt",  ".bx.bx-cube-alt", ".text", ".hr", ".text2",".img.sec5",
  ".accordion-button.collapsed", ".card.sec9.card1",
  ".card-body", ".nav-link.sec5",".nav-link.active.sec5"
 ];
 var animateSections = document.querySelectorAll(".card-title.text-wrap.sec3.animate, .card-title.text-wrap.icon.animate, .card-text.text-wrap.sec3.animate, .card-text.text-wrap.icon.animate, .bx.bx-receipt.animate, .bx.bx-cube-alt.animate, .text.animate, .hr.animate, .text2.animate, .img.sec5.animate, .accordion-button.collapsed.animate, .card.sec9.card1.animate, .card-body.animate, .nav-link.sec5.animate, .nav-link.active.sec5.animate");
  function showSectionsOnScroll() {
    for (var i = 0; i < sectionSelectors.length; i++) {
      var sections = document.querySelectorAll(sectionSelectors[i]);
      for (var j = 0; j < sections.length; j++) {
        var section = sections[j];
        if (isElementInViewport(section)) {
          section.style.opacity = 1;
          section.style.transform = "translateY(0)";
          }
        }
      }
    
    
  }

  function isElementInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  // Show sections on initial page load
  showSectionsOnScroll();

  // Show sections when scrolling
  window.addEventListener("scroll", showSectionsOnScroll);

});