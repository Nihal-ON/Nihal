 const scriptURL = 'https://nihal-on.github.io/Nihal/';

      document.getElementById('myForm').addEventListener('submit', e => {
        e.preventDefault();
        const data = {
          name: e.target.name.value,
          email: e.target.email.value,
          message: e.target.message.value
        };

        fetch(scriptURL, {
          method: 'POST',
          body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(json => {
          document.getElementById('response').innerText = 'Form submitted!';
          e.target.reset();
        })
        .catch(err => {
          document.getElementById('response').innerText = 'Error: ' + err;
        });
      });