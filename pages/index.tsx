import { useRouter } from 'next/router';
import Link from 'next/link';
import '../styles/global.css'
import '../styles/index.css'
import '../styles/header.css';
import '../styles/footer.css';
import '../styles/propose.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
    const router = useRouter();

    const handleProposeClick = () => {
        router.push('/propose');
    };

    return (
        <div>
            <Header/>
                <h1 className='h1accueil'>Bienvenue sur CitizenPulse</h1>
                <div className="container">
                    <h2>Sujets populaires</h2>
                    <ul>
                        <li><Link href="/vote/1">Un bilan psy gratuit  à 10 ans</Link></li>
                        <li><Link href="/vote/2">Réglementation des réseaux sociaux</Link></li>
                        <li><Link href="/vote/3">Réforme de l éducation</Link></li>
                    </ul>
                </div>        
                <Footer/>        
            </div>
    );
}
