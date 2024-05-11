import { useRouter } from 'next/router';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
    const router = useRouter();

    const handleProposeClick = () => {
        router.push('/propose');
    };

    return (
        <div>
            <Header />
            <h1 className='h1accueil'>Bienvenue sur CitizenPulse</h1>
            <div className="container">
                <h2>Sujets populaires</h2>
                <ul>
                    <li>Un bilan psy gratuit  à 10</li>
                    <div className="button-group">
                    <button type="submit"><span>oui</span></button>
                    <button type="submit"><span>non</span></button>
                    </div>
                    <li>Réglementation des réseaux sociaux</li>
                    <div className="button-group">
                        <button type="submit"><span>oui</span></button>
                        <button type="submit"><span>non</span></button>
                    </div>
                    <li>Réforme de l éducation</li>
                    <div className="button-group">
                        <button type="submit"><span>oui</span></button>
                        <button type="submit"><span>non</span></button>
                    </div>
                </ul>
            </div>
            <Footer />
        </div>
    );
}
