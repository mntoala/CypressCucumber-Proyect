import AboutUsPage from "./Pages/AboutUsPage";
import CartPage from "./Pages/CartPage";
import ContactPage from "./Pages/ContactPage";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import SignUpPage from "./Pages/SignUpPage";
class PageMethods{
    clickOnPage(page){
      switch (page){
        case 'Home':
          HomePage.homeBtn().click();
          break; 
        case 'Contact':
            HomePage.contactBtn().click();
           break;
        case 'About us':
            HomePage.aboutUSBtn().click();
          break; 
        case 'Cart':
            HomePage.cartBtn().click();
           break;
        case 'Log in':
            HomePage.loginBtn().click();
          break; 
        case 'Sign up':
            HomePage.signUpBtn().click();
           break;
        default:
             throw new Error(`Unsupported page: ${page}`);
     }
    }
    verifyPage(page){
      switch (page){
        case 'Home':
          HomePage.verifyPage();
          break; 
        case 'Contact':
          ContactPage.verifyPage();
           break;
        case 'About us':
          AboutUsPage.verifyPage();
          break; 
        case 'Cart':
          CartPage.verifyPage();
           break;
        case 'Log in':
          LoginPage.verifyPage();
          break; 
        case 'Sign up':
          SignUpPage.verifyPage();
           break;
        default:
             throw new Error(`Unsupported page: ${page}`);
     }
    }
    clickBtnORSideNext(element){
        switch (element){
           case 'next button':
              HomePage.btnNextCarousel().click();
                break; 
            case 'right side':
              HomePage.rightSideCarousel().click();
                break;
            default:
                throw new Error(`Unsupported element: ${element}`);
        }
    }
    clickBtnORSideBefore(element){
        switch (element){
           case 'previus button':
            HomePage.btnPreviousCarousel().click();
                break; 
            case 'left side':
              HomePage.leftSideCarousel().click();
                break;
            default:
                throw new Error(`Unsupported element: ${element}`);
        }
    }
    clickBtnBarIndicator(element){
        switch (element){
            case "first":
              HomePage.buttonIndicator01().click();
                break;
            case "second":
              HomePage.buttonIndicator02().click();
                break;
            case "third":
              HomePage.buttonIndicator03().click();
                break;
            default:
                throw new Error(`Unsupported element: ${element}`);
        }
    }
    CheckImage(imageNumber) {
        switch (imageNumber) {
          case "first":
            HomePage.buttonIndicator01().should('have.class', 'active');
            break;
          case "second":
            HomePage.buttonIndicator02().should('have.class', 'active');
            break;
          case "third":
            HomePage.buttonIndicator03().should('have.class', 'active');
            break;
          default:
            throw new Error(`Invalid image number: ${imageNumber}`);
        }
      }
}
module.exports = new PageMethods();