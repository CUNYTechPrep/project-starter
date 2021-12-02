import React, { useState } from "react";
import { Layout } from "../modules/layout";
import {
  Stack,
  Button,
  Heading,
  FormControl,
  Input,
  FormHelperText,
  FormLabel,
} from "@chakra-ui/react";

const SignupPage = () => {
  //create input values
  const [firstname, setfname] = useState("");
  const [lastname, setlname] = useState("");
  const [email, setemail] = useState("");
  const [address, setaddress] = useState("");
  const [dob, setdob] = useState("");
  const [password, setpassword] = useState("");
  const [zip, setzip] = useState("");

  const handleSubmit = (e) => {
    //check if every input is valid
    //if all inputs are valid, complete registration
  };

  return (
    <Layout>
      <Stack>
        <Heading>Sign Up</Heading>
        <Form onSubmit={handleSubmit}>
          <FormControl id="firstname" isRequired>
            <FormLabel>First Name</FormLabel>
            <Input
              type="text"
              value={firstname}
              onChange={(e) => {
                setfname(e.target.value);
              }}
            />
          </FormControl>
          <FormControl id="lastname" isRequired>
            <FormLabel>Last Name</FormLabel>
            <Input
              type="text"
              value={lastname}
              onChange={(e) => {
                setlname(e.target.value);
              }}
            />
          </FormControl>
          <FormControl id="email" isRequired>
            <FormLabel>Email address</FormLabel>
            <Input
              type="email"
              placeholder={"example@email.com"}
              value={email}
              onChange={(e) => {
                setemail(e.target.value);
              }}
            />
          </FormControl>
          <FormControl id="password" isRequired>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              value={password}
              onChange={(e) => {
                setpassword(e.target.value);
              }}
            />
          </FormControl>
          <FormControl id="dob">
            <FormLabel>Date of birth</FormLabel>
            <Input
              type="date"
              value={dob}
              onChange={(e) => {
                setdob(e.target.value);
              }}
            />
          </FormControl>
          <FormControl id="address">
            <FormLabel>Address</FormLabel>
            <Input
              type="text"
              placeholder={"123 A Ave NY,NY"}
              value={address}
              onChange={(e) => {
                setaddress(e.target.value);
              }}
            />
          </FormControl>
          <FormControl id="zip" isRequired>
            <FormLabel>Zipcode</FormLabel>
            <Input
              type="text"
              value={zip}
              onChange={(e) => {
                setzip(e.target.value);
              }}
            />
          </FormControl>
          <FormControl id="country">
            <FormLabel>Country</FormLabel>
            <Input type="text" />
          </FormControl>
          <Button type="submit">Register</Button>
        </Form>
      </Stack>
    </Layout>
  );
};
