import {
  React,
  SqNavigation,
} from "./index";

function SqHeader({ children }) {
  return (
    <header className="main-header">
        <SqNavigation />
    </header>
  )
}

export { SqHeader };
