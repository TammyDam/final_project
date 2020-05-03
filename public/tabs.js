/* document.querySelectorAll("#nav li").forEach(function(navEl) {
    navEl.onclick = function() { toggleTab(this.id, this.dataset.target); }
  });
  
  function toggleTab(selectedNav, targetId) {
    var navEls = document.querySelectorAll("#nav li");
  
    navEls.forEach(function(navEl) {
      if (navEl.id == selectedNav) {
        navEl.classList.add("is-active");
      } else {
        if (navEl.classList.contains("is-active")) {
          navEl.classList.remove("is-active");
        }
      }
    });
  
    var tabs = document.querySelectorAll(".tab-pane");
  
    tabs.forEach(function(tab) {
      if (tab.id == targetId) {
        tab.style.display = "block";
      } else {
        tab.style.display = "none";
      }
    });
  }
  */
  
  function openTab(evt, tabName) {
    var i, x, tablinks;
    x = document.getElementsByClassName("content-tab");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tab");
    for (i = 0; i < x.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" is-active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " is-active";
  }