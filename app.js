const searchTerm = document.querySelector(".search input");
const formSearch = document.querySelector(".search");
const buttonRemoveImg = document.querySelector(".remove-btn");
const img_list = document.querySelector(".img-list");
const overlay = document.querySelector(".overlay");

let imgGif = [];

const renderImg = () => {
  const html = imgGif.map((p) => {
    return `<div class="img-items">
        <img
          src="${p.images.downsized.url}"
          alt="gif"
        />
      </div>`;
  });

  img_list.innerHTML = html;
};

renderImg();

const handleSearchImg = async (e) => {
  e.preventDefault();
  overlay.classList.add("active");
  imgGif = [];

  const value = searchTerm.value;
  const data = await axios.get(
    `https://api.giphy.com/v1/gifs/search?q=${value}&api_key=Llgbf29y5Su2AWrFS4VG6YNW40a4s2dj`
  );

  imgGif.push(...data.data.data);
  renderImg();
  overlay.classList.remove("active");
  searchTerm.value = "";
};

formSearch.addEventListener("submit", handleSearchImg);
buttonRemoveImg.addEventListener("click", () => {
  imgGif = [];
  renderImg();
});
