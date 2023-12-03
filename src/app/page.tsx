import Footer from '@/components/Footer';
import MainContent from '@/components/MainContent';
import Navbar from '@/components/Navbar';
import './page.module.scss';

export default function Home() {
    return (
        <>
            <Navbar />
            <MainContent />
            <Footer />
        </>
    );
}
