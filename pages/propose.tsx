
import { useFormik } from 'formik';
import '../styles/propose.css';
import '../styles/global.css';

const Propose: React.FC = () => {
    const formik = useFormik({
        initialValues: {
            choice: '',
            reason: '',
        },
        onSubmit: values => {
            console.log('Choix proposé :', values.choice);
            console.log('Raison :', values.reason);
            formik.resetForm();
        },
    });

    return (
        <div className="container1">
            <form onSubmit={formik.handleSubmit}>
                <h1>Proposer un choix de vote</h1>
                <div>
                    <label htmlFor="choice">Votre sujet</label>
                    <input
                        id="choice"
                        name="choice"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.choice}
                    />
                </div>
                <div>
                    <label htmlFor="reason">Expliquez pourquoi?</label>
                    <textarea
                        id="reason"
                        name="reason"
                        onChange={formik.handleChange}
                        value={formik.values.reason}
                    />
                </div>
                <button type="submit"><span className="text">Proposer</span></button>
            </form>
        </div>
    );
};

export default Propose;
