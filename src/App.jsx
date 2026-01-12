import { BrowserRouter, Routes, Route } from "react-router";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import SeoCaseStudy from "./pages/SeoCaseStudy";
import ContactUs from "./pages/ContactUs";
import WebDesign from "./pages/WebDesign";
import SeoMarketing from "./pages/SeoMarketing";
import ContentWriting from "./pages/ContentWriting";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />
      <Route
        path="/about"
        element={
          <Layout>
            <About />
          </Layout>
        }
      />

      <Route
        path="/seo-case-study"
        element={
          <Layout>
            <SeoCaseStudy />
          </Layout>
        }
      />
      <Route
        path="/contact-us"
        element={
          <Layout>
            <ContactUs />
          </Layout>
        }
      />
      <Route path="services">
        <Route
          path="web-design"
          element={
            <Layout>
              <WebDesign />
            </Layout>
          }
        />
        <Route
          path="seo"
          element={
            <Layout>
              <SeoMarketing />
            </Layout>
          }
        />
        <Route
          path="content"
          element={
            <Layout>
              <ContentWriting />
            </Layout>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
