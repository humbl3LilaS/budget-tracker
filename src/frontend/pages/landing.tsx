import Features from "@/components/landing-page/features";
import Footer from "@/components/landing-page/footer";
import Hero from "@/components/landing-page/hero";
import Nav from "@/components/landing-page/nav";
import Notice from "@/components/landing-page/notice";
import Reviews from "@/components/landing-page/reviews";

const LandingPage = () => {
    return (
        <>
            <header>
                <Nav />
            </header>
            <Hero />
            <Features />
            <Reviews />
            <Notice />
            <Footer />
        </>
    );
};

export default LandingPage;
