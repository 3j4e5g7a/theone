-document.getElementById("aboutLink").addEventListener("click", function (e) {
-  e.preventDefault();
-  document.getElementById("about").scrollIntoView({ behavior: "smooth" });
-});
-document.getElementById("resumeLink").addEventListener("click", function (e) {
-  e.preventDefault();
-  document.getElementById("resume").scrollIntoView({ behavior: "smooth" });
-});
+const scrollLinks = document.querySelectorAll(".scroll-link");
+
+scrollLinks.forEach((link) => {
+  link.addEventListener("click", (event) => {
+    const targetId = link.dataset.scrollTarget;
+
+    if (!targetId) {
+      return;
+    }
 
-document.getElementById("portfolioLink").addEventListener("click", function (e) {
-  e.preventDefault();
-  document.getElementById("portfolio").scrollIntoView({ behavior: "smooth" });
+    const targetElement = document.getElementById(targetId);
+
+    if (!targetElement) {
+      return;
+    }
+
+    event.preventDefault();
+    targetElement.scrollIntoView({ behavior: "smooth" });
+  });
 });
 
 function handleScrollAnimation() {
   const elements = document.querySelectorAll('.animate-on-scroll');
   const triggerBottom = window.innerHeight * 0.8;
 
   elements.forEach(el => {
     const boxTop = el.getBoundingClientRect().top;
 
     if (boxTop < triggerBottom) {
       el.classList.add('show');
     } else {
       el.classList.remove('show'); // remove this line if you want the animation only once
     }
   });
 }
 
 // Run on scroll
 window.addEventListener('scroll', handleScrollAnimation);
 // Run on load
 window.addEventListener('load', handleScrollAnimation);
diff --git a/script.js b/script.js
index bd7ff9993c6bdb9cc1e224ccb68bc78af0b4184f..d236b622166fd9db54a74835a39a1e7f25347b98 100644
--- a/script.js
+++ b/script.js
@@ -1,33 +1,40 @@
-document.getElementById("aboutLink").addEventListener("click", function (e) {
-  e.preventDefault();
-  document.getElementById("about").scrollIntoView({ behavior: "smooth" });
-});
-document.getElementById("resumeLink").addEventListener("click", function (e) {
-  e.preventDefault();
-  document.getElementById("resume").scrollIntoView({ behavior: "smooth" });
-});
+const scrollLinks = document.querySelectorAll(".scroll-link");
+
+scrollLinks.forEach((link) => {
+  link.addEventListener("click", (event) => {
+    const targetId = link.dataset.scrollTarget;
+
+    if (!targetId) {
+      return;
+    }
 
-document.getElementById("portfolioLink").addEventListener("click", function (e) {
-  e.preventDefault();
-  document.getElementById("portfolio").scrollIntoView({ behavior: "smooth" });
+    const targetElement = document.getElementById(targetId);
+
+    if (!targetElement) {
+      return;
+    }
+
+    event.preventDefault();
+    targetElement.scrollIntoView({ behavior: "smooth" });
+  });
 });
 
 function handleScrollAnimation() {
   const elements = document.querySelectorAll('.animate-on-scroll');
   const triggerBottom = window.innerHeight * 0.8;
 
   elements.forEach(el => {
     const boxTop = el.getBoundingClientRect().top;
 
     if (boxTop < triggerBottom) {
       el.classList.add('show');
     } else {
       el.classList.remove('show'); // remove this line if you want the animation only once
     }
   });
 }
 
 // Run on scroll
 window.addEventListener('scroll', handleScrollAnimation);
 // Run on load
 window.addEventListener('load', handleScrollAnimation);
