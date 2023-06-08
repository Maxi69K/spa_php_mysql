class DB {
    static getAll() {
        return new Promise((resolve, reject) => {
            let xml = new XMLHttpRequest();
            xml.onreadystatechange = () => {
                if (xml.readyState === 4 && xml.status === 200) {
                  // xml.responseTex --- we get the answer in JSON file
                  resolve(JSON.parse(xml.responseText));  // array with objects
                }
            }
            xml.open('GET','get_data.php');
            xml.send();
        })
    }
    static save(newAccount) {
        return new Promise((resolve, reject) => {
          let xml = new XMLHttpRequest();
          xml.onreadystatechange = () => {
            if (xml.readyState === 4 && xml.status === 200) {
              //console.log(xml.responseText); // sends on save_data.php (var_dump($data));
              resolve(xml.responseText); // returns success or error message
            }
          };
          xml.open('POST', 'save_data.php');
          xml.setRequestHeader('Content-Type', 'application/json');
          xml.send(JSON.stringify(newAccount));
        });
    }
}