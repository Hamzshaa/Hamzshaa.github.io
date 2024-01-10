const qualificationDivs = document.querySelectorAll(".qualification-contents");
const educationHist = document.getElementById("education-history");
const experienceHist = document.getElementById("experience-history");

qualificationDivs.forEach((activeQualification) => {
  activeQualification.addEventListener("click", (event) => {
    const clickedDiv = event.target;

    if (clickedDiv.classList.contains("qualification-education")) {
      experienceHist.classList.remove("qualification__content-active");
      educationHist.classList.add("qualification__content-active");
    } else if (clickedDiv.classList.contains("qualification-experiance")) {
      educationHist.classList.remove("qualification__content-active");
      experienceHist.classList.add("qualification__content-active");
    }
  });
});
