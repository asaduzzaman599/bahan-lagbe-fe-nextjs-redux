import AvailableService from "@/components/homepage/AvailableService"
import Category from "@/components/homepage/Category"
import Footer from "@/components/homepage/Footer"
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
            <Category />
            {/*unique*/}
            <RecentlyViewed />
           <Overview />
           <Reviews />
           <News />
        </div>
    );
};

export default Home;