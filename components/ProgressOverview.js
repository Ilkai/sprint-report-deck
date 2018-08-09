import React from 'react';
import styled from 'styled-components';

const URL = 'http://localhost:3001/lastsprint';

const IssueList = styled.ul`
  text-align: left;
  list-style: none;
  padding-left: 0;
  font-size: 1rem;
  line-height: 1.5rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  grid-gap: 2px;
  background-color: #ccc;
  padding: 2px;
`

const Issue = styled.li`
  display: block;
  padding: 1rem;
  background-color: #fff;
`

const IssueSummary = styled.div`
  line-height: 1.5;
  height: 3rem;
  overflow: hidden;
`

const IssueKey = styled.div`
  font-weight: bold;
`

const IssueLabel = styled.span`
  display: inline-block;
  font-size: 0.75rem;
  line-height: 1rem;
  font-weight: bold;
  padding: 0 0.5rem;
  background-color: #eee;
  margin-right: 0.25rem;
`

const IssueShimmer = Issue.extend`
  font-family: "BLOKK Neue";
  color: #ccc;
`

const ErrorMessage = styled.div`
  color: red;
`

class ProgressOverview extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      issues: [],
      isLoading: false,
      error: null,
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });

    fetch(URL)
      .then(response => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error('Something went wrong...');
        }
      })
      .then(data => this.setState({ issues: data.issues, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  createLoadingShimmer = () => {
    let gridItems = []

    for (let i = 0; i < 8; i++) {
      gridItems.push(
        <IssueShimmer key={i}>
          AAA-999<br />
          Issue summary that can run over maybe a few lines
        </IssueShimmer>
      )
    }

    return gridItems;
  }

  render() {
    const { issues, isLoading, error } = this.state;

    if (error) {
      return <ErrorMessage>{error.message}</ErrorMessage>;
    }

    if (isLoading) {
      return (
        <IssueList>
          {this.createLoadingShimmer()}
        </IssueList>
      );
    }

    return (
      <IssueList>
        {issues.map((issue, id) =>
          <Issue key={id}>
            <IssueKey>{issue.key}</IssueKey>
            <IssueSummary>{issue.fields.summary}</IssueSummary>
            {issue.fields.labels.map((tag, id) =>
              <IssueLabel key={id}>{tag}</IssueLabel>
            )}
          </Issue>
        )}
      </IssueList>
    );
  }
}

export default ProgressOverview;
