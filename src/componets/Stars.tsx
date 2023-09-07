import Star from './Star';

const Stars = ({ count }) => {

	if (typeof count !== 'number' || count > 5 || count < 0) {
		return null;
	}

	return (
		<ul className="card-body-stars">
         {[...Array(count)].map((_, idx) => <li key={idx}><Star /></li>)}
      </ul>
	)
}

export default Stars;
interface Stars {
  count: number
}
