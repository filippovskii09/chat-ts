'use client'

import { useState } from "react"
import { v4 as uuid } from 'uuid';
import styles from './RandomLogin.module.scss'

type User = {
	name: string,
	id: string
}

const RandomLogin = () => {
	
	const [user, setUser] = useState<User>({
		name: '',
		id: ''
	})
	
	const generateRandomUser = () => {
		const names = ['Alice', 'Bob', 'Charlie', 'Diana', 'Edward', 'Fiona', 'George', 'Hannah', 'Ian', 'Julia'];

		const randowIndex = Math.floor(Math.random() * names.length)
		const randomName = names[randowIndex]

		setUser({name: randomName, id: uuid()})
		localStorage.setItem('user', JSON.stringify(user))

	}

	return (
		<section className={styles.login}>
			<button className={styles.button} onClick={() => generateRandomUser()}>Start chating</button>
		</section>
	)
}

export default RandomLogin
