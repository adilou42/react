import { Link } from 'react-router-dom';
import classes from './MainNavigation.module.css';

function MainNavigation() {
	return (
		<header className={classes.header}>
			<div classeName={classes.logo}>React Meetups</div>
			<nav>
				<ul>
					<li>
						<Link to="/">All Meetups</Link>
					</li>
					<li>
						<Link to="/new-meetup">Add new meetups</Link>
					</li>
					<li>
						<Link to="/favorite">My favorites</Link>
					</li>
				</ul>
			</nav>
		</header>
	)
}

export default MainNavigation;