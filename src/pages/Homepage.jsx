import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import CardDiv from "../components/CardDiv";
import JobListings from "../components/JobListings";
import Footer from "../components/Footer";

const Homepage = () => {
  return (
    <>
      <Hero />
      <CardDiv />
      <JobListings isHome={true} />
      <Footer />
    </>
  );
};

export default Homepage;
