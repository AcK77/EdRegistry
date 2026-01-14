fetch('data/data.json')
  .then(r => r.json())
  .then(data => {
    if (!data.length) return;

    const columns = Object.keys(data[0]).map(key => ({
      title: key,
      data: key
    }));

    const table = $('#datatable').DataTable({
      data,
      columns,
      pageLength: 25,
      order: [],
      responsive: true,
      initComplete: function () {
        this.api().columns().every(function () {
          const column = this;
          const input = document.createElement('input');
          input.placeholder = 'Filtrer';
          input.style.width = '100%';

          $(input).on('keyup change clear', function () {
            column.search(this.value).draw();
            updateStats(table);
          });

          $(column.footer()).empty().append(input);
        });
      }
    });

    updateStats(table);
  });

function updateStats(table) {
  document.getElementById('stats-total').textContent = table.data().count();
  document.getElementById('stats-filtered').textContent =
    table.rows({ filter: 'applied' }).count();

  const col0 = table.column(0, { filter: 'applied' }).data().toArray();
  const freq = {};
  col0.forEach(v => freq[v] = (freq[v] || 0) + 1);

  const top = Object.entries(freq).sort((a,b)=>b[1]-a[1]).slice(0,5);
  const ul = document.getElementById('stats-top');
  ul.innerHTML = '';
  top.forEach(([k,v]) => {
    const li = document.createElement('li');
    li.textContent = `${k}: ${v}`;
    ul.appendChild(li);
  });
}
