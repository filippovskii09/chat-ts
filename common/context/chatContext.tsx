'use client'
import { createContext, useState, ReactNode } from "react";
import useChatUsers, { User } from "../hooks/useAllUsers";

export type ChatContextType = {
	users: User[],
	setUsers: React.Dispatch<React.SetStateAction<User[]>>
}

export const ChatContext = createContext<ChatContextType | undefined>({} as ChatContextType)

type ChatContextProviderProps = {
	children: ReactNode;
}

export const ChatContextProvider = ({children}: ChatContextProviderProps) => {
	const {users, setUsers} = useChatUsers()

	return (
		<ChatContext.Provider value={{users, setUsers}}>
			{children}
		</ChatContext.Provider>
	)
}