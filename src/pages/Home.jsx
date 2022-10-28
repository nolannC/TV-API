import React from 'react';
import { useNavigate } from 'react-router-dom';
import './../styles/style.css';
import notFound from './../assets/imgNotFound.png';

export const Home = () => {
	const navigate = useNavigate();

	const [search, setSearch] = React.useState('');
	const [shows, setShows] = React.useState([]);

	const handleSearch = e => {
		e.preventDefault();
		fetch(`https://api.tvmaze.com/search/shows?q=${search}`)
			.then(res => res.json())
			.then(data => setShows(data))
			.catch(err => console.error(err));
	};

	return (
		<div id="main">
			<h1>Accueil</h1>
			<form onSubmit={handleSearch}>
				<input type="text" onChange={e => setSearch(e.target.value)} />
				<button type="submit">Rechercher</button>
			</form>
			<div id="shows">
				{shows.map(({ show }) => {
					return (
						<div key={show.id} className="show" onClick={() => navigate(`/shows/${show.id}`)}>
							<h3>{show.name}</h3>
							<img src={show.image?.medium || notFound} alt="" />
						</div>
					);
				})}
			</div>
		</div>
	);
};
