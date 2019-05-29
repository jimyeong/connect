import BaseSectionContainer, { IBaseSectionContainerProps } from "../BaseSectionContainer/BaseSectionContainer";

interface ILoginSectionContainerProps extends IBaseSectionContainerProps {}
class LoginSectionContainer extends BaseSectionContainer<ILoginSectionContainerProps, any> {
  public renderSearchHeader() {
    return null;
  }
  public renderFooter() {
    return null;
  }
}

export default LoginSectionContainer;
