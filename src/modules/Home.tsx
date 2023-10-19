import AvailableService from "@/components/homepage/AvailableService"
import CategorySection from "@/components/homepage/CategorySection"
import EventByCategory from "@/components/homepage/EventByCategory"
import Header from "@/components/homepage/Header"
import News from "@/components/homepage/News"
import Overview from "@/components/homepage/Overview"
import RecentlyViewed from "@/components/homepage/RecentlyViewed"
import Reviews from "@/components/homepage/Reviews"
import UpcomingService from "@/components/homepage/UpcomingService"

const Home = () => {
    return (
        <div>
            <Header />
            <AvailableService />
            <UpcomingService />
            <CategorySection />
            <EventByCategory />
            {/*unique*/}
            <RecentlyViewed />
           <Overview />
           <Reviews />
           <News />
        </div>
    );
};

export default Home;