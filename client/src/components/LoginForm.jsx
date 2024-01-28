import { useState } from "react";

function LoginForm({ onSubmit }) {
	const [login, setLogin] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = e => {
		e.preventDefault();
		onSubmit({ login, password });
		setLogin("");
		setPassword("");
	};

	return (
		<form onSubmit={handleSubmit} className='max-w-60 w-screen flex flex-col gap-4'>
			<h2 className='text-center text-3xl'>Log in</h2>

			<div className='flex flex-col gap-2'>
				<label>Login: </label>

				<input
					type='text'
					value={login}
					onChange={e => setLogin(e.target.value)}
					required
				/>
			</div>

			<div className='flex flex-col gap-2'>
				<label>Password: </label>

				<input
					type='text'
					value={password}
					onChange={e => setPassword(e.target.value)}
					required
				/>
			</div>

			<button type='submit' className='text-gray-900 bg-slate-400'>Login</button>
		</form>
	);
}

export default LoginForm;