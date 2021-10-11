import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Input from "../components/Input";
import Card from "../components/Card";
import DialogCard from "../components/DialogCard";
import Button from "../components/Button";
import logo from "../images/light.png";
import cross from "../images/cross.png";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useLazyQuery } from "@apollo/client";
import { HOME_ROUTE } from "../constants";
import LOGIN_QUERY from "../queries/login";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  let history = useHistory();
  let [isDialogOpen, setIsDialogOpen] = useState(false);
  let [isDialogAccepted, setIsDialogAccepted] = useState(false);
  const [loguinQuery, { data }] = useLazyQuery(LOGIN_QUERY);
  const onSubmit = ({ email, password }) =>
    loguinQuery({ variables: { email, password } });
  const openModal = () => setIsDialogOpen(true);
  const closeModal = (isAccepted) => {
    setIsDialogAccepted(isAccepted);
    setIsDialogOpen(false);
  };

  useEffect(() => {
    if (data?.login?.token) {
      history.push(HOME_ROUTE);
    }
    if (data?.login === null) {
      openModal();
    }
  }, [data, history]);

  useEffect(() => {
    console.log(isDialogAccepted);
  }, [isDialogAccepted]);

  return (
    <Card title="Login">
      <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
        <div className="p-6 flex md:flex-row flex-col items-center justify-evenly w-full">
          <div className="flex-shrink-0 md:w-20 w-auto">
            <img className="h-12 w-12" src={logo} alt="Bulbscrum Logo" />
          </div>
          <div className="flex flex-col py-6 w-60 text-gray-600 text-center">
            <Input
              className="mb-6"
              placeholder="Email"
              name="email"
              type="email"
              register={register}
              required
              errors={errors}
            />
            <Input
              placeholder="Password"
              name="password"
              type="password"
              register={register}
              required
              errors={errors}
            />
          </div>
        </div>
        <div className="w-full text-center pb-4">
          <Link to="/register">Click here to register</Link>
        </div>
        <div className="w-full">
          <Button type="submit" text="Continue" className="rounded-b-md" />
        </div>
      </form>
      <DialogCard
        title="Unsuccessful Login"
        isDialogOpen={isDialogOpen}
        closeModal={closeModal}
      >
        <div className="flex align-middle items-center justify-evenly mt-4">
          <img
            className="h-12 w-12 mx-10 hidden md:block"
            src={cross}
            alt="Bulbscrum Logo"
          />
          <p className="w-60">
            Username or Password invalid. Please try again.
          </p>
        </div>
      </DialogCard>
    </Card>
  );
};

export default Login;
