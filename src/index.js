import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Layout } from './pages/Layout';
import { Show } from './pages/Show';

const root = document.getElementById('root');
const app = createRoot(root);

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route path="/" element={<Home />} />
					<Route path="/shows/:id" element={<Show />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

app.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
