import { DropdownMenuItems } from "./DropdownMenuItems";

export const NavbarItems = [
  {
    title: "Home",
    url: "/",
    cName: "nav-links"
  },
  {
    title: "Blog",
    url: "/blog",
    cName: "nav-links"
  },
  {
    title: "Projects",
    url: "/project",
    cName: "nav-links",
    dropdownItmes: DropdownMenuItems
  },
  {
    title: "Contact Me",
    url: "/contactme",
    cName: "nav-links"
  },
  {
    title: "Sign up",
    url: "#",
    cName: "nav-links-mobile"
  }
];
