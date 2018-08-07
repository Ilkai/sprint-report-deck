import React from 'react';
import envs from 'env-config';

const URL = envs.url;
const USER = envs.user;
const KEY = envs.key;

let requestObj = {
  method: 'GET',
  mode: 'no-cors',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': 'https://domesticcat.atlassian.net'
  },
  auth: {
    username: USER,
    password: KEY
  },
  withCredentials: true
}

class Issue extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fields: [],
      isLoading: false,
      error: null
    }
  }
  async componentDidMount() {
    this.setState({ isLoading: true});
    fetch(URL, requestObj)
      .then(response => {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response;
      })
      .then(response => response.json())
      .then(data => this.setState({ fields: data.fields, isLoading: false }))
      .catch(error => {
        console.log(error);
        this.setState({ error, isLoading:false })
      });
  }

  render() {
    const { fields, isLoading, error } = this.state;

    if (error) {
      return <p>Error</p>;
    }

    if (isLoading) {
      return <p>Loading...</p>;
    }

    return (
      <div>
        <h1>{fields.summary}</h1>
        {fields.labels.map(label =>
          <span key={label.objectID}>
            {label}
          </span>
        )}
      </div>
    );
  }
}

export default Issue;
