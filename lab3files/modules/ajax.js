class Ajax {
    get(url, callback) {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', url);
      xhr.withCredentials = true;
      xhr.send();
  
      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
          this._handleResponse(xhr, callback);
        }
      };
    }
  
    post(url, data, callback) {
      const xhr = new XMLHttpRequest();
      xhr.open('POST', url);
      xhr.setRequestHeader('Content-Type', 'application/json');
      xhr.withCredentials = true;
      xhr.send(JSON.stringify(data));
  
      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
          this._handleResponse(xhr, callback);
        }
      };
    }
  
    patch(url, data, callback) {
      const xhr = new XMLHttpRequest();
      xhr.open('PATCH', url);
      xhr.setRequestHeader('Content-Type', 'application/json');
      xhr.withCredentials = true;
      xhr.send(JSON.stringify(data));
  
      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
          this._handleResponse(xhr, callback);
        }
      };
    }
  
    delete(url, callback) {
      const xhr = new XMLHttpRequest();
      xhr.open('DELETE', url);
      xhr.withCredentials = true;
      xhr.send();
  
      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
          this._handleResponse(xhr, callback);
        }
      };
    }
  
    _handleResponse(xhr, callback) {
      if (xhr.status === 200) {
        callback(JSON.parse(xhr.responseText), 'success');
      } else {
        callback(null, 'error');
      }
    }
  }
  export const ajax = new Ajax();