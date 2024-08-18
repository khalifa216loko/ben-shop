
import React from "react";
import { Col, Layout, Row } from "antd";
import AppHeader from "./components/Appheader/Appheader";
import AppRoutes from "./Routes";
import AppFooter from "./components/footer/footer";
import { ColorModeContext, useMode } from "./theme";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
const { Header, Content, Footer } = Layout;

const App = () => {

    const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider
    
    value={colorMode}
  >
    <ThemeProvider
      // @ts-ignore
      theme={theme}
    >
      <CssBaseline />

      
      
     

      <Box
        bgcolor={
          // @ts-ignore
          theme.palette.bg.main
        }
      >
      <Row gutter={[0, 32]}>
        <Col span={24}>
          <Header>
            <AppHeader />
          </Header>
        </Col>
        <Col span={22} offset={1}>
          <Content>
            <AppRoutes />
              </Content>
             
          </Col>
          <Col span={24}>
          <Footer>
          <AppFooter />
          </Footer>
        </Col>
         
                  </Row>
                  
                
         </Box>       
          </ThemeProvider>
          
      </ColorModeContext.Provider>
  );
};
export default App;