import React from 'react';

let url = 'https://cors-anywhere.herokuapp.com/?https://domesticcat.atlassian.net/rest/api/2/issue/MTE-1000';

let requestObj = {
  method: 'GET',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json; charset=utf-8',
    'Access-Control-Allow-Origin': '*'
  },
  // credentials: 'include',
  authorization: 'Basic bHluZGVuQGRvbWVzdGljY2F0LmNvbS5hdTpXQXJoVGdVYWdEaVhxcWtwblBTdTQ4MEE='
}

class Issue extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      summary: [],
      labels: [],
      isLoading: false,
      error: null
    }
  }

  componentDidMount() {
    this.setState({ isLoading: true});
    fetch(url, requestObj)
      .then(response => {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response;
      })
      .then(response => response.json())
      .then(data => this.setState({ summary: data.fields.summary, labels: data.fields.labels, isLoading: false }))
      .catch(error => {
        this.setState({ error, isLoading: false })
      });
  }

  render() {
    const { summary, labels, isLoading, error } = this.state;

    if (error) {
      return <p>Error</p>;
    }

    if (isLoading) {
      return <p>Loading...</p>;
    }

    return (
      <div>
        <h1>{summary}</h1>
        {labels.map(label =>
          <span key={label.objectID}>
            {label}
          </span>
        )}
      </div>
    );
  }
}

export default Issue;
