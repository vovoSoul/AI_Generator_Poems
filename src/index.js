function changePoem(event) {
  event.preventDefault();

  new Typewriter("#newpoem", {
    strings: `Poetry is the spontaneous overflow of powerful feelings: it takes its
        origin from emotion recollected in tranquility."
        <div>- William Wordsworth</div>`,
    autoStart: true,
    cursor: "",
    delay: 20,
  });
}

let searchForm = document.querySelector("#search");
searchForm.addEventListener("submit", changePoem);
