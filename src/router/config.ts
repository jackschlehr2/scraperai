const routes = [
  {
    path: ["/", "/home"],
    exact: true,
    component: "Home",
  },
  {
    path: ["/account"],
    exact: true,
    component: "Account",
  },
  {
    path: ["/scrape"],
    exact: true,
    component: "Scrape",
  },
  {
    path: ["/query"],
    exact: true,
    component: "Query",
  },
];

export default routes;
