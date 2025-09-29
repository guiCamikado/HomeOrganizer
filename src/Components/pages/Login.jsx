import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function LoginForm() {
    return (
        <>
            <div className="d-flex justify-content-center bg-gray-700 p-10 text-amber-50">
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Usuário..." />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Senha..." />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Lembre de mim!" />
                    </Form.Group>
                    <Button type="submit" >
                        Login
                    </Button>
                </Form>
            </div>
        </>
    );
}

export default LoginForm;