    function Getcountries()
    {
        var _url='https://restcountries.com/v3.1/all'
        fetch(_url)
      .then(response => response.json())
      .then(dataa => {
            var countr = document.getElementById('countrys');
            dataa.forEach(country => {
                var _option = document.createElement('img');
                _option.src = country.flags.png;
                countr.appendChild(_option);
            });
      })
    }

    Getcountries()