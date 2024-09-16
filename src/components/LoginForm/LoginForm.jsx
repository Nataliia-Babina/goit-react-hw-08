import { useState } from "react";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";
import css from "./LoginForm.module.css";
import toast from "react-hot-toast";
import { Button, TextField } from "@mui/material";
import { InputAdornment, IconButton } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import Tooltip from '@mui/material/Tooltip';


export const LoginForm = () => {
  const dispatch = useDispatch();

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(logIn(values))
      .unwrap()
      .then(() => {
        toast.success("Login ok");
        setValues({ email: "", password: "" });
      })
      .catch(() => {
        toast.error("Login error");
      });
  };

  return (
    <div className={css.container}>
      <h1 className={css.title}>Login</h1>
      <form className={css.form} autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          type="email"
          value={values.email}
          label="Email"
          name="email"
          required
          fullWidth
          onChange={handleChange}
          sx={{
            "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
              borderColor: "#1976d2",
              borderWidth: "1px",
            },
            "& .MuiOutlinedInput-input": {
              color: "white !important",
            },
            "& label": {
              color: "#1976d2",
            },
            "& label.Mui-focused": {
              color: "white",
            },
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "white",
              },
              "&:hover fieldset": {
                borderColor: "white",
              },
              "&.Mui-focused fieldset": {
                borderColor: "white",
              },
            },
          }}
        />
        <TextField
          type={showPassword ? "text" : "password"}
          label="Password"
          name="password"
          value={values.password}
          required
          fullWidth
          onChange={handleChange}
          autoComplete="on"
          sx={{
            "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
              borderColor: "#1976d2",
              borderWidth: "1px",
            },
            "& .MuiOutlinedInput-input": {
              color: "white !important",
            },
            "& label": {
              color: "#1976d2",
            },
            "& label.Mui-focused": {
              color: "white",
            },
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "white",
              },
              "&:hover fieldset": {
                borderColor: "white",
              },
              "&.Mui-focused fieldset": {
                borderColor: "white",
              },
            },
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Tooltip title={showPassword ? "Hide Password" : "Show Password"} placement="top" arrow>
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  edge="end"
                  sx={{
                    border: 0,
                    color: "#1976d2",
                    '&:focus': {
                      outline: 'none',
                    },
                  }}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
                </Tooltip>
              </InputAdornment>
            ),
          }}
        />
        <Button
          type="submit"
          variant="outlined"
          sx={{
            color: "#1976d2",
            width: "100%",
            height: "60px",
            margin: "auto",
            display: "block",
          }}
        >
          Log In
        </Button>
      </form>
      <div
        className={css.sampleData}
        onClick={() => {
          setValues({
            email: "login77746616@maillll.com",
            password: "1234567",
          });
        }}
      >
        * <u>Login for test</u>
      </div>
    </div>
  );
};