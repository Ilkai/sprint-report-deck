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

      try {
      const result = await axios.get(URL, requestObj);

      this.setState({
        fields: data.fields,
        isLoading: flase
      });
    } catch (error) {
      this.setState({
        error,
        isLoading: false
      });
    }