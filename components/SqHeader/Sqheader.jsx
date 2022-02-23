import {
  React,
} from "./index";
import "./SqHeader.scss";

const SqHeader = () => (
  <header>
    <nav aria-label="Navigation principale">
      <a href="/">Home</a>
      <a href="/about">About</a>
    </nav>
  </header>
);

export { SqHeader };
