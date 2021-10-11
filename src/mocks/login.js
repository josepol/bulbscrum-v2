import { graphql } from "msw";
import * as faker from "faker";

export const handlers = [
  graphql.query("Login", (req, res, ctx) => {
    const { email } = req.variables;
    const token = faker.datatype.uuid();
    sessionStorage.setItem("token", "Bearer " + token);
    sessionStorage.setItem("email", email);
    return res(
      ctx.data({
        login: {
          token
        },
      })
    );
  }),
  graphql.mutation("GetUserInfo", null),
];
