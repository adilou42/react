import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';


import AllMeetUpPage from './pages/AllMeetUp';
import NewMeetUpPage from './pages/NewMeetUp';
import FavoritePage from './pages/Favorite';
import MainNavigation from './components/layout/MainNavigation';


function App() {
	return (
		<BrowserRouter>
		<MainNavigation />

			<Routes>
				<Route path="/" element={<AllMeetUpPage />}/>
				<Route path="new-meetup" element={<NewMeetUpPage />}/>
				<Route path="favorite" element={<FavoritePage />}/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;