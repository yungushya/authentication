import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";

function App() {
	const handleLogin = data => {
		console.log("Logging in with", data);
	};

	const handleRegister = data => {
		console.log("Registering with", data);
	};

	return (
		<div className='w-screen flex justify-center gap-20'>
			<LoginForm onSubmit={handleLogin} />
			<RegisterForm onSubmit={handleRegister} />
		</div>
	);
}

export default App;