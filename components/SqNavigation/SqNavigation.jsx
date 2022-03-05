import {
    React,
    SqLogo,
    SqLink,
    Link,
    PageContextProvider,
    Container,
    Box,
    Typography,
  } from "./index";

function SqNavigation({ pageContext }) {
    return (
        <React.StrictMode>
          <PageContextProvider pageContext={pageContext}>
            <Box 
              component="nav" 
              className="main-nav" 
              aria-label="Navigation principale">
                <Container className="main-nav__container" maxWidth="lg">
                  <SqLogo />
                  <Typography 
                    component="ol" 
                    className="main-nav__menu _mT-4"
                    >
                      <Box component="li" className="main-nav__menu-item _mL-8" sx={{ mr: 5 }}>
                        <SqLink href="/">Produit</SqLink>
                      </Box>
                      <Box component="li" className="main-nav__menu-item" sx={{ mr: 5 }}>
                        <SqLink href="/formations">Formations</SqLink>
                      </Box>
                      <Box component="li" className="main-nav__menu-item">
                        <SqLink href="/trouver">Trouver une décision</SqLink> 
                      </Box>
                  </Typography>
                </Container>
            </Box>
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