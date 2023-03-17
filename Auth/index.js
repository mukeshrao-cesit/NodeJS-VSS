import token from "jsonwebtoken";

const signedToken = token.sign({ name: "mukesh", company: "ces" }, "qwerty");
console.log({ signedToken });

try {
  const isVerified = token.verify(signedToken, "qwerty");
  console.log({ isVerified });
} catch (err) {
  console.log(err);
}
