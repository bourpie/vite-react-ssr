import {
  React,
} from "./index";

function SqFooter({ children }) {
  return (
    <header className="main-footer">
      <div className="container">
        {children}
      </div>
    </header>
  )
}

export { SqFooter };
