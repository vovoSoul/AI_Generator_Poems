function changePoem(event) {
  event.preventDefault();

  let input = document.querySelector("#box");

  let api_key = "ee88953fd2a466oa4c850t79d8cb473f";
  let prompt = `could you please generate a poem about ${input.value}`;
  let context =
    "make it concise, understandable, beautiful and simple but elegant in poetry prose";
  let api_url = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${api_key}`;

  axios.get(api_url).then(responsePoem);

  function responsePoem(response) {
    console.log(response);
    console.log(response.data.answer);
    let poemValue = response.data.answer;
    /* let poemValue = document.querySelector("#newpoem");
    poemValue.innerHTML = response.data.answer;*/
    new Typewriter("#newpoem", {
      strings: `${poemValue}`,
      autoStart: true,
      cursor: "",
      delay: 1,
    });
  }
}

let searchForm = document.querySelector("#search");
searchForm.addEventListener("submit", changePoem);
