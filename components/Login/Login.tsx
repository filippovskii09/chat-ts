'use client'

import { useContext, useEffect, useState } from 'react';
import styles from './Login.module.scss';
import { v4 as uuid } from 'uuid';

type User = {
	name: string,
	id: string
}

const Login = () => {

	const [user, setUser] = useState<User>({
		name: "",
		id: ""
	})
	
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		localStorage.setItem('user', JSON.stringify(user))
	}

	useEffect(() => {
		setUser(prevUser => ({
			...prevUser,
			id: uuid()
		}))
	}, [])

	return (
		<section className={styles.login}>
			<form onSubmit={handleSubmit} className={styles.form}>
				<h2 className={styles.title}>Log In</h2>
				<div className={styles.inputWrapper}>
					<input className={styles.input} onChange={(e) => setUser({...user, name: e.target.value})} type="text" id='nickname' name="nickname" />
					<label className={styles.label} htmlFor="nickname">User name</label>
				</div>
				<div className="button-container-1">
    			<span className="mas">Start chating</span>
  				<button type="submit" name="Hover">Start chating</button>
				</div>
			</form>
		</section>
	)
}

export default Login
