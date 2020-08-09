import React  from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import auth from "../auth";
import Box from '@material-ui/core/Box';
import Logo from '../images/logo-auth.png';

const user = {
    name: 'admin',
    password: 'admin',
};

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        backgroundColor: "#c309d2",
    },
}));

export default function SignIn(props) {
    const classes = useStyles();

    const onSubmitHandler = (e) => {
        e.preventDefault();
        const { email, password } = e.target;
        if (email.value === user.name && password.value === user.password) {
            auth.login(() => {
                props.history.push("/cabinet");
            })
        } else {
            email.value = '';
            password.value = '';
            alert('Invalid email or password!');
        }
    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box component="div"><img src={Logo} alt="Logo" className="logo-auth" /></Box>
            <div className={classes.paper}>
                <form className={classes.form} noValidate onSubmit={onSubmitHandler}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Логин"
                        name="email"
                        autoComplete="email"
                        autoFocus
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Пароль"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Запомнить пароль"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        size="large"
                    >
                        Войти
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                                Забыли пароль?
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
    );
}