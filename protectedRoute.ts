
// Auth.configure(awsconfig);

// function PrivateRoute({ children, ...rest }) {

//     const [auth, setAuth] = useState(false);

//     const isAuthenticated = () => {

//         setAuth(false);

//         Auth.currentSession().then( response => {
//             if(response.isValid()) {
//                 setAuth(true);
//             } else {
//                 redirectToLogin();
//             }
//         }).catch(() => {
//             redirectToLogin();
//         });
//     }

//     const redirectToLogin = () => {
//         history.push('/login');
//     }

//     useEffect(() => {
//         isAuthenticated();
//     }, []);

//     return (
//         <Route {...rest}>
//             { auth ? children : null }
//         </Route>
//     )
// }

// export default PrivateRoute;