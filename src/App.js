import { Fragment } from "react";
import { Footer } from "./components/footer.component";
import { Header } from "./components/header.component";
import { ImagesSection } from "./components/ImageSection.component";
import { GlobalStyle } from "./styles/GlobalStyles";

function App() {
  const FooterDesc = "Desarrollada por @JilverPacheco | ";
  const DateYear = new Date().getFullYear();
  const AppName = "NatureUpload";
  return (
    <Fragment>
      <GlobalStyle />
      <Header AppName={AppName} />
      <ImagesSection />
      <Footer DateYear={DateYear} FooterDesc={FooterDesc} />
    </Fragment>
  );
}

export default App;
