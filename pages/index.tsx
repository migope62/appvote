import { useRouter } from 'next/router';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
    const router = useRouter();

    const handleVote = async (option: string) => {
        try {
            const response = await fetch('/api/vote', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ option }),
            });
            if (response.ok) {
                console.log('Vote enregistré avec succès !');
            } else {
                console.error('Échec de l\'enregistrement du vote');
            }
        } catch (error) {
            console.error('Erreur lors de l\'enregistrement du vote :', error);
        }
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
                        <button type="button" onClick={() => handleVote('oui')}><span>oui</span></button>
                        <button type="button" onClick={() => handleVote('non')}><span>non</span></button>
                    </div>
                    <li>Réglementation des réseaux sociaux</li>
                    <div className="button-group">
                        <button type="button" onClick={() => handleVote('oui')}><span>oui</span></button>
                        <button type="button" onClick={() => handleVote('non')}><span>non</span></button>
                    </div>
                    <li>Réforme de l éducation</li>
                    <div className="button-group">
                        <button type="button" onClick={() => handleVote('oui')}><span>oui</span></button>
                        <button type="button" onClick={() => handleVote('non')}><span>non</span></button>
                    </div>
                </ul>
            </div>
            <Footer />
        </div>
    );
}
