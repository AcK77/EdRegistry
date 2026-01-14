---
---

<link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.9.1/flowbite.min.css" rel="stylesheet">
<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" rel="stylesheet">
<link rel="stylesheet" href="{{ '/assets/dark.css' | relative_url }}">
<link rel="stylesheet" href="{{ '/assets/table.css' | relative_url }}">

<script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
<script src="https://cdn.datatables.net/1.13.8/js/jquery.dataTables.min.js"></script>
<script src="{{ '/assets/dark.js' | relative_url }}"></script>
<script src="{{ '/assets/table.js' | relative_url }}"></script>

<div class="flex justify-between items-center p-4">
  <h1 class="text-3xl font-bold">EdRegistry</h1>
  <button onclick="toggleTheme()" class="text-xl px-2 py-1 border rounded">
    🌓
  </button>
</div>

<div class="mx-4 my-2 p-4 bg-gray-100 dark:bg-gray-800 rounded">
  <h2 class="text-xl font-semibold mb-2">📊 Statistiques</h2>
  <p>Total lignes : <span id="stats-total">0</span></p>
  <p>Lignes filtrées : <span id="stats-filtered">0</span></p>

  <h3 class="text-lg font-semibold mt-2">Top valeurs (colonne 1)</h3>
  <ul id="stats-top" class="list-disc ml-5"></ul>
</div>

<div class="table-container mx-4 my-4 p-4 bg-white dark:bg-gray-900 rounded shadow">
  <table id="datatable" class="stripe hover w-full" style="width:100%">
    <thead></thead>
    <tfoot></tfoot>
  </table>
</div>
