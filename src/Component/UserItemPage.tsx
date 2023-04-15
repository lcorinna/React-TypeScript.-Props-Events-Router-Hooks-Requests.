import React, { FC, useState, useEffect } from "react";
import { IUser } from "../types/types";
import { useParams, useHistory } from 'react-router-dom';
import axios from "axios";

interface userItemPageParams {
	id: string;
}

const UserItemPage: FC = () => {
	const [user, setUser] = useState<IUser | null>(null);
	const params = useParams<userItemPageParams>();
	const history = useHistory();

	useEffect(() => {
		fetchUser();
	}, []);
	
	async function fetchUser() {
	  try {
		  const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users/' + params)
		  setUser(response.data)
	  } catch (e) {
		  alert(e);
		}
	}
	return (
		<div>
			<button onClick={() => history.push('/users')}>Back</button>
			<h1>Страница пользователя {user?.name}</h1>
			<div>
				{user?.email}
			</div>
			<div>
				{user?.address.city} {user?.address.street} {user?.address.zipcode}
			</div>
		</div>
	)
};

export default UserItemPage;