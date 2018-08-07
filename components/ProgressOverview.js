import React from 'react';

const API = 'https://hn.algolia.com/api/v1/search?query=';
const DEFAULT_QUERY = 'redux';

class ProgressOverview extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			hits: [],
		};
	}

	componentDidMount() {
		fetch(API + DEFAULT_QUERY)
			.then(reponse => reponse.json())
			.then(data => this.setState({ hits: data.hits }));
	}

	render() {
		const { hits } = this.state;

		return (
			<ul>
				{hits.map(hit =>
					<li key={hit.objectID}>
						{hit.title}
					</li>
				)}
			</ul>
		);
	}
}

export default ProgressOverview;
