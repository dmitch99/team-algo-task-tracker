import './index.css';
import PublicLoginPage from "./PublicLoginPage";
import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";
import LogInForm from "./LogInForm";
import WelcomeComponent from "./WelcomeComponent";

function App() {
    return (
        <div>

            <HeaderComponent/>
          <WelcomeComponent/>
            <FooterComponent/>

        </div>
    );
}

export default App;