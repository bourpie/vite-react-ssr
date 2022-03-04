import {
  React,
  Container,
} from "./index";

function SqContenu({ children }) {
  return (
    <main className="main">
      <Container maxWidth="lg">
        {children}
      </Container>
    </main>
  )
}

export { SqContenu };
