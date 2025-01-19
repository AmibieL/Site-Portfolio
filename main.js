function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  section.scrollIntoView({ behavior: "smooth" });
}

function socialMediaLink(link) {
  window.open(link, "_blank");
}
