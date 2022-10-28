import React from 'react';
import { useParams } from 'react-router-dom';
import './../styles/style.css';
import notFound from './../assets/imgNotFound.png';

export const Show = () => {
	const { id } = useParams();

	const [show, setShow] = React.useState({});
	const [seasons, setSeasons] = React.useState([]);

	React.useEffect(() => {
		fetch(`http://api.tvmaze.com/shows/${id}?embed=cast`)
			.then(res => res.json())
			.then(data => setShow(data))
			.catch(err => console.error(err));

		fetch(`https://api.tvmaze.com/shows/${id}/seasons`)
			.then(res => res.json())
			.then(data => setSeasons(data))
			.catch(err => console.error(err));
	}, []);

	return (
		<div id="show">
			<h1>{show.name}</h1>
			<img id="sign" src={show.image?.medium || notFound} alt="" />
			<p dangerouslySetInnerHTML={{ __html: show.summary }}></p>
			<h3 id="genres">Genres</h3>
			<div>
				{show.genres?.map(genre => {
					return <p key={genre}>{genre}</p>;
				})}
			</div>
			<p id="rating">Note: {show.rating?.average}</p>
			<p id="nb-seasons">Nombre de saisons: {seasons.length}</p>
			<div id="seasons">
				{seasons.map(season => {
					return <img src={season.image?.medium || notFound} alt="" />;
				})}
			</div>
			<div id="casting">
				{show._embedded?.cast?.map(({ person, character }) => {
					return (
						<div key={person.id} className="person">
							<h4>
								{person.name} - {character.name}
							</h4>
							<img src={person.image.medium} alt="person picture" />
						</div>
					);
				})}
			</div>
		</div>
	);
};
