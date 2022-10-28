import { Outlet, useNavigate } from 'react-router-dom';
import { Navbar } from '../components/Navbar';

export const Layout = () => {
	const navigate = useNavigate();

	return (
		<div>
			<div>
				<Navbar />
			</div>
			<div>
				<Outlet />
			</div>
		</div>
	);
};
