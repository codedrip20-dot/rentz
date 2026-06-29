import Hero from "@/components/home/hero";
import TrustedBy from "@/components/home/trustedBy";
import WhyUs from "@/components/home/WhyUs";
import Services from "@/components/home/services";
import Reviews from "@/components/home/reviews";
import Footer from "@/components/home/footer";

const HomePage= () => {
    return (
        <>
        <Hero />
        <Services />
         <WhyUs />
        <TrustedBy />
        <Reviews />
        <Footer />
        </>
    )
}
export default HomePage;