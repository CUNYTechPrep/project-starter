import React from 'react'
import { Button, Container, Form} from "react-bootstrap";

export default function Compare() {
    return (
        <div>
            <Container>
                <div className="text-center mt-2">
                    Compare Schools
                </div>
                <div>
                    <Form>
                        <Form.Group id="email">
                            <Form.Control type="first-choice" required />
                            <Form.Control type="second-choice" required />
                        </Form.Group>
                    </Form>
                </div>
            </Container>
        </div>
    )
}
