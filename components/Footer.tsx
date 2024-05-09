import '../styles/footer.css';
import '../styles/global.css'
import Link from 'next/link';

function Footer() {
    return (
        <footer>
            <div className="footer-contact">
                <p>Contactez-nous : contact@example.com</p>
                <p>Suivez-nous sur <Link href="https://twitter.com/example">@Twitter</Link></p>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 CitizenPulse. Tous droits réservés.</p>
                <p><Link href="/privacy-policy">Politique de confidentialité</Link></p>
            </div>
        </footer>
    );
}

export default Footer;
