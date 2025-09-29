import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function RegisterForm() {
    return (
        <>
            <div className="d-flex justify-content-center bg-gray-700 p-10">
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Digite um usuário" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Defina uma senha" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPasswordCheck">
                        <Form.Control type="password" placeholder="Repita a senha" />
                    </Form.Group>
                    <div>
                        <Button type="submit">
                            Registrar
                        </Button>
                    </div>
                </Form>
            </div>
        </>
    );
}

export default RegisterForm;