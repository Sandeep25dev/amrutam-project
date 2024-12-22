import AboutSection from "./components/AboutSection";
import AppointmentDetails from "./components/AppointmentDetails";
import FeaturedReviews from "./components/FeaturedReviews";
import Header from "./components/Header";
import ProfileCard from "./components/ProfileCard";
import Skills from "./components/Skills";
import Specialization from "./components/Specialization";
import WorkExperience from "./components/WorkExperience";

function App() {
  return (
    <div>
      <Header />
      <main className="max-w-[1220px] mx-auto p-6 space-y-6">
        <ProfileCard />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="max-w-4xl mx-auto p-6 space-y-8">
            <AboutSection />
            <Specialization />
            <Skills />
            <WorkExperience />
            <FeaturedReviews />
          </div>
          <div>
            <AppointmentDetails />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
