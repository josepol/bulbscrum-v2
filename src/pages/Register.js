import { Link } from "react-router-dom";
import Input from "../components/Input";
import Button from "../components/Button";
import Card from "../components/Card";
import logo from "../images/light.png";
import { useForm } from "react-hook-form";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (values) => {
    console.log(values);
  };
  return (
    <Card title="Register">
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
              className="mb-6"
              placeholder="Password"
              name="password"
              type="password"
              register={register}
              required
              errors={errors}
            />
            <Input
              placeholder="Confirm Password"
              name="confirmPassword"
              type="password"
              register={register}
              required
              errors={errors}
            />
          </div>
        </div>
        <div className="w-full text-center pb-4 hover:font-bold">
          <Link to="/login">Click here to login</Link>
        </div>
        <div className="w-full">
          <Button type="submit" text="Continue" className="rounded-b-md" />
        </div>
      </form>
    </Card>
  );
};

export default Register;
