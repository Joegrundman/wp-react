import { useActionState, type ReactNode } from "react";
import { Link } from "react-router";
import Button from "~/components/Button";
import Input from "~/components/Input";
import Label from "~/components/Label";
import Panel from "~/components/Panel";
import { H2, P } from "~/components/Text";

type LoginProps = {
  style?: React.CSSProperties;
  className?: string;
};

const loginStyles = `
  p-4
  bg-gray-100
  text-white
  border-2
  border-slate-200
`;

const loginAction = async (previousState, formData) => {
  // const response = await fetch(
  //   "https://wp3api2-hffncjc6dte5f9cr.centralus-01.azurewebsites.net/api/users/login",
  //   {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       email: formData.get("email"),
  //       password: formData.get("password"),
  //     }),
  //   }
  // );

  // return response.json();
  await new Promise((resolve) => {
    setTimeout(resolve, 500);
  });

  return "2,17,Joe,Grundman";
};

const Login: React.FC<LoginProps> = ({ className }) => {
  //https://wp3api2-hffncjc6dte5f9cr.centralus-01.azurewebsites.net/api/users/login

  const [state, formAction, isPending] = useActionState(loginAction, "");
  return (
    <div className={`${loginStyles} ${className || ""}`}>
      <Panel>
        <form action={formAction}>
          {JSON.stringify(state)}
          <H2>Login</H2>
          <P>Enter your email and password, and click 'submit'.</P>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Email"
            ></Input>
          </div>
          <div>
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="Password"
            ></Input>
          </div>
          <div>
            <P>
              Forgot your password? Click{" "}
              <span>
                <Link to="request-new">here.</Link>
              </span>
            </P>
          </div>
          <div>
            <Button disabled={isPending} type="submit">
              Submit
            </Button>
          </div>
        </form>
      </Panel>
    </div>
  );
};

export default Login;
