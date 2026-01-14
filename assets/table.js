$(document).ready(function() {
  fetch('data/data.json')
    .then(res => res.json())
    .then(data => {
      const columns = Object.keys(data[0] || {}).map(key => ({ title: key, data: key }));

      $('#loader').hide();
      $('#stats').removeClass('hidden');
      $('#table-container').removeClass('hidden');

      const table = $('#datatable').DataTable({
        data: data,
        columns: columns,
        pageLength: 25,
        deferRender: true,
        scrollY: '60vh',
        scroller: true,
        responsive: true
      });

      $('#stats-total').text(data.length);
      $('#stats-filtered').text(table.rows({ filter: 'applied' }).count());

      const firstCol = columns[0].title;
      const counts = {};
      data.forEach(row => {
        const val = row[firstCol] || '';
        counts[val] = (counts[val] || 0) + 1;
      });
      const top5 = Object.entries(counts).sort((a,b) => b[1]-a[1]).slice(0,5);
      $('#stats-top').html(top5.map(e => `<li>${e[0]} (${e[1]})</li>`).join(''));

      table.on('search.dt', function() {
        $('#stats-filtered').text(table.rows({ filter: 'applied' }).count());
      });
    })
    .catch(err => {
      $('#loader').html('<span class="text-red-500">Failed to load data</span>');
      console.error(err);
    });
});
