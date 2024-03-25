export interface Resource {
  name: string;
  url: string;
  description: string;
  favorite: boolean;
  isAdvanced?: boolean;
  image: string;
}

export const resources: Resource[] = [
  {
    name: "React",
    url: "https://reactjs.org/",
    description:
      "The Official documentation of React. The new docs are fabolous, and offer a great way to learn React.",
    favorite: false,
    image: "https://reactjs.org/logo-og.png",
  },

  {
    name: "React Router",
    url: "https://reactrouter.com/",
    description: "Declarative routing for React",
    favorite: false,
    image:
      "https://www.codesmith.io/hs-fs/hubfs/Blog%20Images/Blog%20Photos/react-router-logo.png?width=600&name=react-router-logo.png",
  },
  {
    name: "TanStack Query",
    url: "https://react-query.tanstack.com/",
    description:
      "Hooks for fetching, caching and updating asynchronous data in React",
    favorite: false,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt0umPBRmbknR5lLGQjYd_OpK54G6v55qPg8dAIsfk_K5iTIYan_tcVw7TXRHs8bM_tNo&usqp=CAU",
  },
  {
    name: "React Table",
    url: "https://react-table.tanstack.com/",
    description:
      "Hooks for building fast and extendable tables and datagrids for React made by the same developers as TanStack",
    favorite: false,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt0umPBRmbknR5lLGQjYd_OpK54G6v55qPg8dAIsfk_K5iTIYan_tcVw7TXRHs8bM_tNo&usqp=CAU",
  },
  {
    name: "React Icons",
    url: "https://react-icons.github.io/react-icons/",
    description:
      "Include popular icons in your React projects easily with react-icons",
    favorite: false,
    image: "https://reactjs.org/logo-og.png",
  },
  {
    name: "React devtools",
    url: "https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi",
    description:
      "An extension that allows you to inspect the React component hierarchy",
    favorite: false,
    image: "https://reactjs.org/logo-og.png",
  },
  {
    name: "React Testing Library",
    url: "https://testing-library.com/docs/react-testing-library/intro",
    description:
      "A simple and complete testing library for React that encourages good testing practices",
    favorite: false,
    image: "https://testing-library.com/img/octopus-32x32.png",
  },
  {
    name: "Jest",
    url: "https://jestjs.io/",
    description: "Delightful JavaScript Testing",
    favorite: false,
    image: "https://jestjs.io/img/jest.svg",
  },
  {
    name: "Cypress",
    url: "https://www.cypress.io/",
    description:
      "Fast, easy and reliable testing for anything that runs in a browser",
    favorite: false,
    image: "https://www.cypress.io/cypress_logo_social.png",
  },
];
