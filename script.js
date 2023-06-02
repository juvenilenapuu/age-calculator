 function Calculate() {
      var firstDate = document.getElementById("date1").value;
      var secondDate = document.getElementById("date2").value;
      const dateOne = new Date(firstDate);
      const dateTwo = new Date(secondDate);
      const time = Math.abs(dateTwo - dateOne);
      const days = Math.ceil(time / (1000 * 60 * 60 * 24 * 365.25));
      document.getElementById("Output").value = days;
    }