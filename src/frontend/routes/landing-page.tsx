import Features from "@/components/landing-page/features";
import Hero from "@/components/landing-page/hero";
import Nav from "@/components/landing-page/nav";
import Reviews from "@/components/landing-page/reviews";

const LandingPage = () => {
    return (
        <main>
            <div className={""}>
                <header>
                    <Nav />
                </header>
                <Hero />
                <Features />
                <Reviews />
            </div>
        </main>
    );
};

export default LandingPage;
