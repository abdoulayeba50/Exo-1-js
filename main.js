function sortTable() {
    const table = document.getElementById('tableau');
    const rows = table.rows;
    const sortedRows = [];

    for (let i = 0; i < rows.length; i++) {
      sortedRows.push(rows[i].innerText);
    }

    sortedRows.sort();

    for (let i = 0; i < sortedRows.length; i++) {
      rows[i].innerText = sortedRows[i];
    }
  }