import { useState } from "react";
import { Row, Col, Drawer } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import Container from "../../common/Container";
import { Button } from "../../common/Button";
import {
  HeaderSection,
  LogoContainer,
  Burger,
  NotHidden,
  Menu,
  CustomNavLinkSmall,
  Label,
  Outline,
  Span,
} from "./styles";
import { Link } from "react-router-dom";

const Header = ({ t }: { t: TFunction }) => {
  const [visible, setVisibility] = useState(false);

  const toggleButton = () => {
    setVisibility(!visible);
  };

  const MenuItem = () => {
    
    return (
      <>
        <CustomNavLinkSmall>
          <Link to="/product">
            <Span>{t("Product")}</Span>
          </Link>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall>
          <Link to="/pricing">
            <Span>{t("Pricing")}</Span>
          </Link>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall>
          <Link to="/account">
            <Span>{t("Account")}</Span>
          </Link>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall>
          <Link to="/scrape">
            <Span>{t("Scrape")}</Span>
          </Link>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall>
          <Link to="/query">
            <Span>{t("Query")}</Span>
          </Link>
        </CustomNavLinkSmall>
      </>
    );
  };

  return (
    <HeaderSection>
      <Container>
        <Row justify="space-between">
          <LogoContainer to="/" aria-label="homepage">
            {/* <SvgIcon src="logo.svg" width="101px" height="64px" /> */}
            ScraperAI
          </LogoContainer>
          <NotHidden>
            <MenuItem />
          </NotHidden>
          <Burger onClick={toggleButton}>
            <Outline />
          </Burger>
        </Row>
        <Drawer closable={false} open={visible} onClose={toggleButton}>
          <Col style={{ marginBottom: "2.5rem" }}>
            <Label onClick={toggleButton}>
              <Col span={12}>
                <Menu>Menu</Menu>
              </Col>
              <Col span={12}>
                <Outline />
              </Col>
            </Label>
          </Col>
          <MenuItem />
        </Drawer>
      </Container>
    </HeaderSection>
  );
};

export default withTranslation()(Header);
