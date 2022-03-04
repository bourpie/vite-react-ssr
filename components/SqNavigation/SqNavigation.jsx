import {
    React,
    SqLogo,
    SqLink,
    Link,
    PageContextProvider,
    Container,
  } from "./index";

function SqNavigation({ pageContext }) {
    return (
        <React.StrictMode>
        <PageContextProvider pageContext={pageContext}>
        <nav className="main-nav" aria-label="Navigation principale">
            <Container className="main-nav__container" maxWidth="lg">
            <SqLogo />
            <ol className="main-nav__menu">

                <li className="main-nav__menu-item">
                    <a className="main-nav__menu-item-link" href="/produits">Produits</a>
                </li>
                <li>
                    <a className="main-nav__menu-item-link" href="/formations">Formations</a>
                </li>
                <li>
                    <a className="main-nav__menu-item-link" href="/trouver">Trouver une décision</a>
                </li>
            </ol>
            </Container>
        </nav>
        </PageContextProvider>
        </React.StrictMode>
    )
}

export { SqNavigation };

const navItems = [
    {
      id: 1,
      title: "Home",
      path: "./",
      cName: "nav-item",
    },
    {
      id: 2,
      title: "Services",
      path: "./services",
      cName: "nav-item",
    },
    {
      id: 3,
      title: "Products",
      path: "./products",
      cName: "nav-item",
    },
    {
      id: 4,
      title: "Contact Us",
      path: "./contactus",
      cName: "nav-item",
    },
  ];
  
  const serviceDropdown = [
    {
      id: 1,
      title: "Marketing",
      path: "./marketing",
      cName: "submenu-item",
    },
    {
      id: 2,
      title: "Consulting",
      path: "./consulting",
      cName: "submenu-item",
    },
    {
      id: 3,
      title: "Design",
      path: "./design",
      cName: "submenu-item",
    },
    {
      id: 4,
      title: "Development",
      path: "./development",
      cName: "submenu-item",
    },
  ];