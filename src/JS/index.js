document.addEventListener("DOMContentLoaded", function () {
  // Model qui permet de récupérer la data
  class Model {
    constructor() {
      this.data = [
        {
          title: "Homepage",
          url: "/",
          background: "red",
          public: true,
        },
        {
          title: "Contact",
          url: "/contact",
          background: "green",
          public: false,
        },
      ];
    }

    getPageByUrl(url) {
      return this.data.find((page) => page.url === url);
    }
  }

  // View qui permet de modifier le template html
  class View {
    constructor() {
      this.container = document.querySelector(".container");
    }

    changeBackground(option) {
      this.container.style.background = option.background;
    }

    changeTitle(option) {
      this.container.innerHTML = option.title;
    }
  }

  // Controller qui permet de gérer l'ensemble de l'application
  function controller() {
    const currentUrl = "/contact";
    const data = new Model();

    const currentPage = data.getPageByUrl(currentUrl);

    const render = new View();
    render.changeBackground(currentPage);
    render.changeTitle(currentPage);
  }

  controller();
});
