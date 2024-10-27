import Home from "./pages/Home";

export const routes = [
  {
    name: "Home",
    path: "/home",
    href: '#hero',
    element: <Home />
  },
  {
    name: "About Us",
    href: "#about-section",
  },
  {
    name: "Our Products",
    href: "#product-section",
  },
  {
    name: "Our Team",
    href: "#team-section",
  },
  {
    name: "Careers",
    href: "#careers-section",
  },
  {
    name: "Contact Us",
    href: "#contact-section",
  },
];

export default routes;