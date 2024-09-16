import { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import css from "./RegistrationForm.module.css";
import { Button, TextField } from "@mui/material";
import { InputAdornment, IconButton } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import KeyIcon from '@mui/icons-material/Key';
import Tooltip from '@mui/material/Tooltip';

export const RegistrationForm = () => {
  const dispatch = useDispatch();

  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const generateNewPassword = () => {
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let newPassword = "";
    for (let i = 0; i < 12; i++) {
      newPassword += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setValues(prevValues => ({
      ...prevValues,
      password: newPassword 
    }));
};

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(register(values));
    setValues({ name: "", email: "", password: "" });
  };

  return (
    <>
      <h1 className={css.title}>Registration form</h1>
      <form className={css.form} autoComplete="off" onSubmit={handleSubmit}>
        <div className={css.label}>
          <TextField
            label="Name"
            type="text"
            id="name"
            name="name"
            value={values.name}
            onChange={handleChange}
            required
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
        </div>
        <div className={css.label}>
          <TextField
            label="Email"
            type="email"
            id="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            required
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
        </div>
        <div className={css.label}>
          <TextField
            label="Password"
            type={showPassword ? "text" : "password"}
            id="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            autoComplete="on"
            required
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
                <>
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
                  <InputAdornment position="end">
                  <Tooltip title="Generate Password" placement="top">
                    <IconButton
                      aria-label="Generate Password"
                      onClick={generateNewPassword}
                      edge="end"
                      sx={{
                        border: 0,
                        color: "#1976d2",
                        '&:focus': {
                          outline: 'none',
                        },
                      }}
                    >
                      <KeyIcon />
                    </IconButton>
                    </Tooltip>
                  </InputAdornment>
                </>
              ),
            }}
          />
        </div>
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
          Register
        </Button>
      </form>
    </>
  );
};