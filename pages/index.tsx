import { useUserName } from "@/hooks/user";
import { Button, TextField, Typography } from "@mui/material";

import { Stack } from "@mui/system";
import { useRouter } from "next/router";
import { useState } from "react";

const Index2 = () => {
  const [username, setUsername] = useState("zack");
  const { refetch } = useUserName(username);
  const [password, setPassword] = useState("124");
  const router = useRouter();
  const userNameHandler = (userName: string) => {
    setUsername((prev) => userName);
  };
  const passwordHandler = (passWord: string) => {
    setPassword((prev) => passWord);
  };
  const signInHandler = async () => {
    const data = await refetch();
    setPassword(data.data.passWord);
    if (data.data.passWord === password) {
      window.localStorage.setItem("user", username);
      router.push("/label");
    }
  };
  return (
    <Stack
      m={"auto"}
      height={"100%"}
      width={"90%"}
      justifyContent={"center"}
      alignItems={"center"}
      border={"1px solid black"}
      sx={{ backgroundColor: "white" }}
    >
      <Stack
        width={"35rem"}
        height={"40rem"}
        border={"1px solid gray"}
        borderRadius={"10px"}
        m={"7rem 0"}
        alignItems={"center"}
      >
        <Typography variant="h2" color={"black"} mt={"2rem"}>
          Sign in
        </Typography>
        <Stack width={"20rem"}>
          <Typography color={"black"} mt={"2rem"}>
            User Name:
          </Typography>
          <TextField
            value={username}
            onChange={(e) => userNameHandler(e.target.value)}
          ></TextField>
          <Typography color={"black"} mt={"2rem"}>
            PassWord:
          </Typography>
          <TextField
            type="password"
            value={password}
            onChange={(e) => passwordHandler(e.target.value)}
          ></TextField>
        </Stack>
        <Stack width={"20rem"} mt={"5rem"}>
          <Button
            variant="contained"
            sx={{ height: "3rem" }}
            onClick={() => signInHandler()}
          >
            Sign in
          </Button>
          <Button sx={{ height: "2rem", mt: "1rem", width: "7rem" }}>
            Sign up
          </Button>
        </Stack>
        <Stack></Stack>
      </Stack>
    </Stack>
  );
};
export default Index2;
