import React from "react";
import { Container} from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";

export default function Profile() {
  const { currentUser } = useAuth();

  return (
    <div>
      <Container>
        <h2>Profile Page</h2>
        <div className="text-center mt-2">
          <strong>Email:{currentUser.email}</strong>
        </div>
      </Container>
    </div>
  );
}
