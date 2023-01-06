
  function update() {
    let pDate = dayjs().format('MMM DD, YYYY [at] H:mm:ss a');
  $('#date').text(pDate);
  }

  setInterval(update, 1000);


