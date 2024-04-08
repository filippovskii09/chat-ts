'use client'
import { useEffect, useState } from "react"

export type User = {
	id: string,
	name: string,
}

const useChatUsers = () => {
	const [users, setUsers] = useState<User[]>([])
	
	return {users, setUsers}
}

export default useChatUsers
