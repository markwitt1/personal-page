import React, { useState, useEffect } from "react";
import { Formik } from "formik";
import {
  TextField,
  DialogActions,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  makeStyles,
  IconButton,
  Slide,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import ReCAPTCHA from "react-google-recaptcha";
import { TransitionProps } from "@material-ui/core/transitions/transition";

interface Props {
  open: boolean;
  setOpen: (value: boolean) => void;
}
interface ContactFormData {
  name: string;
  email: string;
  message: string;
  "g-recaptcha-response": string;
}

type ContactFormErrors = Partial<ContactFormData>;

const encode = (data: any) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

const useStyles = makeStyles((theme) => ({
  textField: {
    width: "100%",
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
}));
const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement<any, any> },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const ContactForm = ({ open, setOpen }: Props) => {
  const classes = useStyles();
  const [isSubmissionCompleted, setSubmissionCompleted] = useState(false);

  useEffect(() => {
    setSubmissionCompleted(false);
  }, [setSubmissionCompleted]);

  const handleSubmit = (values: ContactFormData) => {
    fetch("https://www.markwitt.me/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "contact",
        ...values,
      }),
    })
      .then((res: any) => {
        console.log(res);
        setSubmissionCompleted(true);
      })
      .catch((error) => {
        alert(error);
      });
  };

  function handleClose() {
    setSubmissionCompleted(false);
    setOpen(false);
  }

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
      TransitionComponent={Transition}
    >
      {!isSubmissionCompleted && (
        <React.Fragment>
          <DialogTitle id="form-dialog-title">Contact</DialogTitle>
          <DialogContent>
            <DialogContentText>Send me a message!</DialogContentText>
            <Formik
              initialValues={{
                name: "",
                email: "",
                message: "",
                "g-recaptcha-response": "",
              }}
              validate={(values) => {
                const errors: ContactFormErrors = {};
                if (!values.email) {
                  errors.email = "Enter your email address";
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                  errors.email = "Invalid email address";
                }
                if (!values.name) errors.name = "What is your name?";
                if (!values.message) errors.message = "Ask me anything 🤠";
                if (!values["g-recaptcha-response"])
                  errors["g-recaptcha-response"] = "invalid";
                return errors;
              }}
              onSubmit={handleSubmit}
            >
              {(props) => {
                const {
                  values,
                  touched,
                  errors,
                  dirty,
                  isSubmitting,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  handleReset,
                  setFieldValue,
                  isValid,
                } = props;
                return (
                  <form onSubmit={handleSubmit}>
                    <TextField
                      label="Your Name"
                      name="name"
                      className={classes.textField}
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      helperText={
                        (errors.name && touched.name && errors.name) || " "
                      }
                      margin="normal"
                    />

                    <TextField
                      error={
                        touched.email ? (errors.email ? true : false) : false
                      }
                      label="Email address"
                      name="email"
                      className={classes.textField}
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      helperText={
                        (errors.email && touched.email && errors.email) || " "
                      }
                      margin="normal"
                    />

                    <TextField
                      multiline
                      label="Message"
                      name="message"
                      className={classes.textField}
                      value={values.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      helperText={
                        (errors.message && touched.message && errors.message) ||
                        " "
                      }
                      margin="normal"
                    />
                    <ReCAPTCHA
                      sitekey="6Ld5a_sUAAAAAOeZ8EDwoYoR9Z-kY5HhY5eC6Gvt"
                      onChange={(token: string | null) => {
                        if (token) setFieldValue("g-recaptcha-response", token);
                      }}
                      onExpired={() =>
                        setFieldValue("g-recaptcha-response", "")
                      }
                      onErrored={() =>
                        setFieldValue("g-recaptcha-response", "")
                      }
                    />
                    <DialogActions>
                      <Button
                        type="button"
                        className="outline"
                        onClick={handleReset}
                        disabled={!dirty || isSubmitting}
                      >
                        Reset
                      </Button>
                      <Button type="submit" disabled={isSubmitting || !isValid}>
                        Submit
                      </Button>
                    </DialogActions>
                  </form>
                );
              }}
            </Formik>
          </DialogContent>
        </React.Fragment>
      )}
      {isSubmissionCompleted && (
        <React.Fragment>
          <DialogTitle>
            Thanks
            <span role="img" aria-label="cowboy emoji">
              🤠
            </span>
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              I am going to reach out to you soon!
            </DialogContentText>
            <DialogActions>
              <Button type="button" className="outline" onClick={handleClose}>
                Back
              </Button>
            </DialogActions>
          </DialogContent>
        </React.Fragment>
      )}
      <IconButton
        aria-label="close"
        className={classes.closeButton}
        onClick={handleClose}
      >
        <CloseIcon />
      </IconButton>
    </Dialog>
  );
};

export default ContactForm;
