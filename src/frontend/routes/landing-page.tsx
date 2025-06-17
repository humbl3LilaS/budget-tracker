import Hero from "@/components/landing-page/hero";
import Nav from "@/components/landing-page/nav";

const LandingPage = () => {
    return (
        <main>
            <div className={""}>
                <header>
                    <Nav />
                </header>
                <Hero />
            </div>
        </main>
    );
};

export default LandingPage;
